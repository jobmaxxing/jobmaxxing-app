import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
const DEEPSEEK_API_KEY = Deno.env.get('DEEPSEEK_API_KEY');
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

interface Scoring {
  score: number;
  summary: string;
}

function buildInstructions() {
  return (
    `You are a technical recruiter evaluating a developer's GitHub profile. Given the profile and repository ` +
    `data below, respond with ONLY a JSON object (no markdown, no code fences) matching exactly this shape:\n` +
    `{\n` +
    `  "score": <integer 0-100, recruiter-facing profile strength score>,\n` +
    `  "summary": <string, 2-3 sentence summary of the developer's strengths, focus areas, and activity level>\n` +
    `}`
  );
}

function validateScoring(raw: unknown): Scoring {
  if (!raw || typeof raw !== 'object') throw new Error('Scoring response was not an object');
  const obj = raw as Record<string, unknown>;
  const score = Math.max(0, Math.min(100, Math.round(Number(obj.score))));
  if (!Number.isFinite(score)) throw new Error('Scoring missing valid score');
  const summary = typeof obj.summary === 'string' ? obj.summary : '';
  if (!summary) throw new Error('Scoring missing summary');
  return { score, summary };
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

async function callGroq(prompt: string): Promise<Scoring> {
  if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY not configured');
  const res = await fetchWithTimeout('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: buildInstructions() },
        { role: 'user', content: prompt },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Groq request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('Groq response missing content');
  return validateScoring(JSON.parse(content));
}

async function callDeepSeek(prompt: string): Promise<Scoring> {
  if (!DEEPSEEK_API_KEY) throw new Error('DEEPSEEK_API_KEY not configured');
  const res = await fetchWithTimeout('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${DEEPSEEK_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-chat',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: buildInstructions() },
        { role: 'user', content: prompt },
      ],
    }),
  });
  if (!res.ok) throw new Error(`DeepSeek request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('DeepSeek response missing content');
  return validateScoring(JSON.parse(content));
}

async function callGemini(prompt: string): Promise<Scoring> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not configured');
  const res = await fetchWithTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${buildInstructions()}\n\n${prompt}` }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'object',
            properties: {
              score: { type: 'integer' },
              summary: { type: 'string' },
            },
            required: ['score', 'summary'],
          },
        },
      }),
    }
  );
  if (!res.ok) throw new Error(`Gemini request failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini response missing content');
  return validateScoring(JSON.parse(text));
}

async function scoreWithFallback(prompt: string): Promise<Scoring> {
  const providers = [callGroq, callDeepSeek, callGemini];
  const errors: string[] = [];
  for (const provider of providers) {
    try {
      return await provider(prompt);
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

    const { username } = await req.json();
    if (!username) {
      return new Response(JSON.stringify({ error: 'username is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const profileRes = await fetchWithTimeout(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'jobmaxxing-edge-function' },
    });
    if (profileRes.status === 404) {
      return new Response(JSON.stringify({ error: `GitHub user "${username}" not found` }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!profileRes.ok) throw new Error(`GitHub profile request failed: ${profileRes.status}`);
    const ghProfile = await profileRes.json();

    const reposRes = await fetchWithTimeout(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'jobmaxxing-edge-function' } }
    );
    if (!reposRes.ok) throw new Error(`GitHub repos request failed: ${reposRes.status}`);
    const ghRepos = await reposRes.json();

    const topRepos = [...ghRepos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        language: repo.language,
        stars: repo.stargazers_count,
        last_commit_at: repo.pushed_at,
      }));

    const prompt =
      `GitHub profile:\n` +
      `Username: ${ghProfile.login}\nBio: ${ghProfile.bio || 'N/A'}\n` +
      `Public repos: ${ghProfile.public_repos}\nFollowers: ${ghProfile.followers}\n\n` +
      `Top repositories:\n` +
      topRepos.map((r) => `- ${r.name} (${r.language || 'unknown'}, ${r.stars} stars)`).join('\n');

    const scoring = await scoreWithFallback(prompt);

    const { data: profileRow, error: upsertError } = await supabaseClient
      .from('github_profiles')
      .upsert({
        user_id: user.id,
        username: ghProfile.login,
        score: scoring.score,
        public_repos: ghProfile.public_repos,
        followers: ghProfile.followers,
        ai_summary: scoring.summary,
        last_synced_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (upsertError) throw upsertError;

    const { error: deleteReposError } = await supabaseClient.from('github_repos').delete().eq('user_id', user.id);
    if (deleteReposError) throw deleteReposError;

    const { data: repoRows, error: insertReposError } = await supabaseClient
      .from('github_repos')
      .insert(topRepos.map((r) => ({ ...r, user_id: user.id })))
      .select();
    if (insertReposError) throw insertReposError;

    return new Response(JSON.stringify({ profile: profileRow, repos: repoRows }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
