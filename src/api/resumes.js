import { supabase } from '../lib/supabaseClient';

export async function listResumes(userId) {
  const { data, error } = await supabase
    .from('resumes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function uploadResume({ userId, file, label }) {
  const storagePath = `${userId}/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage.from('resumes').upload(storagePath, file);
  if (uploadError) throw uploadError;

  const { data, error } = await supabase
    .from('resumes')
    .insert({
      user_id: userId,
      label: label || file.name,
      storage_path: storagePath,
      file_name: file.name,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteResume({ id, storagePath }) {
  const { error: storageError } = await supabase.storage.from('resumes').remove([storagePath]);
  if (storageError) throw storageError;

  const { error } = await supabase.from('resumes').delete().eq('id', id);
  if (error) throw error;
}

export async function setActiveResume({ userId, id }) {
  const { error: clearError } = await supabase
    .from('resumes')
    .update({ is_active: false })
    .eq('user_id', userId);
  if (clearError) throw clearError;

  const { data, error } = await supabase
    .from('resumes')
    .update({ is_active: true })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}
