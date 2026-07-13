import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../context/useAuth';
import { deleteResume, listResumes, setActiveResume, uploadResume } from './resumes';

export function useResumes() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['resumes', user?.id],
    queryFn: () => listResumes(user.id),
    enabled: !!user,
  });
}

export function useUploadResume() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ file, label }) => uploadResume({ userId: user.id, file, label }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['resumes', user?.id] }),
  });
}

export function useDeleteResume() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, storagePath }) => deleteResume({ id, storagePath }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['resumes', user?.id] }),
  });
}

export function useSetActiveResume() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }) => setActiveResume({ userId: user.id, id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['resumes', user?.id] }),
  });
}
