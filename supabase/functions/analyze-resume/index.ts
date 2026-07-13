import { createClient } from 'npm:@supabase/supabase-js@2';
import { extractText, getDocumentProxy } from 'npm:unpdf@0.12.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
const DEEPSEEK_API_KEY = Deno.env.get('DEEPSEEK_API_KEY');
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

const CHECKLIST_STATUSES = new Set(['pass', 'warning', 'fail']);

interface Analysis {
  score: number;
  summary: string;
  checklist: { id: string; label: string; status: string }[];
  missing_keywords: string[];
}

function buildInstructions(targetRole: string) {
  const role = targetRole || 'a general software engineering role';
  return (
    `You are an ATS (Applicant Tracking System) resume reviewer. Analyze the resume text below for ` +
    `${role}. Respond with ONLY a JSON object (no markdown, no code fences) matching exactly this shape:\n` +
    `{\n` +
    `  "score": <integer 0-100, overall ATS match score>,\n` +
    `  "summary": <string, 2-3 sentence summary of the resume's strengths and weaknesses>,\n` +
    `  "checklist": [ { "id": <short-slug>, "label": <string>, "status": "pass"|"warning"|"fail" }, ... 4 to 6 items assessing formatting/ATS-friendliness ],\n` +
    `  "missing_keywords": [ <3 to 8 strings, relevant keywords/skills missing for the target role> ]\n` +
    `}`
  );
}

function validateAnalysis(raw: unknown): Analysis {
  if (!raw || typeof raw !== 'object') throw new Error('Analysis response was not an object');
  const obj = raw as Record<string, unknown>;

  const score = Math.max(0, Math.min(100, Math.round(Number(obj.score))));
  if (!Number.isFinite(score)) throw new Error('Analysis missing valid score');

  const summary = typeof obj.summary === 'string' ? obj.summary : '';
  if (!summary) throw new Error('Analysis missing summary');

  if (!Array.isArray(obj.checklist)) throw new Error('Analysis missing checklist array');
  const checklist = obj.checklist.map((item, i) => {
    const entry = item as Record<string, unknown>;
    const status = String(entry.status || '').toLowerCase();
    if (!CHECKLIST_STATUSES.has(status)) throw new Error(`Invalid checklist status at index ${i}`);
    return {
      id: String(entry.id || `item-${i}`),
      label: String(entry.label || ''),
      status,
    };
  });

  if (!Array.isArray(obj.missing_keywords)) throw new Error('Analysis missing missing_keywords array');
  const missing_keywords = obj.missing_keywords.map((k) => String(k));

  return { score, summary, checklist, missing_keywords };
}

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 25000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function callGroq(resumeText: string, targetRole: string): Promise<Analysis> {
  if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY not configured');
  const res = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: buildInstructions(targetRole) },
        { role: 'user', content: resumeText },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Groq request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('Groq response missing content');
  return validateAnalysis(JSON.parse(content));
}

async function callDeepSeek(resumeText: string, targetRole: string): Promise<Analysis> {
  if (!DEEPSEEK_API_KEY) throw new Error('DEEPSEEK_API_KEY not configured');
  const res = await fetchWithTimeout('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${DEEPSEEK_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-chat',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: buildInstructions(targetRole) },
        { role: 'user', content: resumeText },
      ],
    }),
  });
  if (!res.ok) throw new Error(`DeepSeek request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('DeepSeek response missing content');
  return validateAnalysis(JSON.parse(content));
}

async function callGemini(resumeText: string, targetRole: string): Promise<Analysis> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not configured');
  const res = await fetchWithTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${buildInstructions(targetRole)}\n\nResume text:\n${resumeText}` }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'object',
            properties: {
              score: { type: 'integer' },
              summary: { type: 'string' },
              checklist: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    label: { type: 'string' },
                    status: { type: 'string', enum: ['pass', 'warning', 'fail'] },
                  },
                  required: ['id', 'label', 'status'],
                },
              },
              missing_keywords: { type: 'array', items: { type: 'string' } },
            },
            required: ['score', 'summary', 'checklist', 'missing_keywords'],
          },
        },
      }),
    }
  );
  if (!res.ok) throw new Error(`Gemini request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini response missing content');
  return validateAnalysis(JSON.parse(text));
}

async function analyzeWithFallback(resumeText: string, targetRole: string): Promise<Analysis> {
  const providers = [callGroq, callDeepSeek, callGemini];
  const errors: string[] = [];
  for (const provider of providers) {
    try {
      return await provider(resumeText, targetRole);
    } catch (err) {
      errors.push(err instanceof Error ? err.message : String(err));
    }
  }
  throw new Error(`All providers failed: ${errors.join(' | ')}`);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { resumeId, targetRole = '' } = await req.json();
    if (!resumeId) {
      return new Response(JSON.stringify({ error: 'resumeId is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { data: resume, error: resumeError } = await supabaseClient
      .from('resumes')
      .select('*')
      .eq('id', resumeId)
      .eq('user_id', user.id)
      .single();
    if (resumeError || !resume) {
      return new Response(JSON.stringify({ error: 'Resume not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { data: fileBlob, error: downloadError } = await supabaseClient.storage
      .from('resumes')
      .download(resume.storage_path);
    if (downloadError || !fileBlob) {
      throw new Error(`Failed to download resume file: ${downloadError?.message}`);
    }

    const pdfBytes = new Uint8Array(await fileBlob.arrayBuffer());
    const pdf = await getDocumentProxy(pdfBytes);
    const { text: resumeText } = await extractText(pdf, { mergePages: true });
    if (!resumeText || !resumeText.trim()) {
      throw new Error('Could not extract any text from the resume PDF');
    }

    const analysis = await analyzeWithFallback(resumeText, targetRole);

    const { data: row, error: insertError } = await supabaseClient
      .from('resume_analyses')
      .insert({
        resume_id: resumeId,
        user_id: user.id,
        target_role: targetRole || null,
        score: analysis.score,
        summary: analysis.summary,
        checklist: analysis.checklist,
        missing_keywords: analysis.missing_keywords,
      })
      .select()
      .single();
    if (insertError) throw insertError;

    return new Response(JSON.stringify(row), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
