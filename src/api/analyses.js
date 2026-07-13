import { supabase } from '../lib/supabaseClient';

export async function analyzeResume({ resumeId, targetRole }) {
  const { data, error } = await supabase.functions.invoke('analyze-resume', {
    body: { resumeId, targetRole },
  });
  if (error) throw error;
  return data;
}

export async function getLatestAnalysis(resumeId) {
  const { data, error } = await supabase
    .from('resume_analyses')
    .select('*')
    .eq('resume_id', resumeId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return data;
}
