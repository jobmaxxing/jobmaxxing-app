import { supabase } from '../lib/supabaseClient';

export async function getGithubProfile(userId) {
  const { data, error } = await supabase.from('github_profiles').select('*').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

export async function getGithubRepos(userId) {
  const { data, error } = await supabase
    .from('github_repos')
    .select('*')
    .eq('user_id', userId)
    .order('stars', { ascending: false });
  if (error) throw error;
  return data;
}

export async function syncGithub({ username }) {
  const { data, error } = await supabase.functions.invoke('analyze-github', {
    body: { username },
  });
  if (error) throw error;
  return data;
}
