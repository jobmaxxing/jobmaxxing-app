import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../context/useAuth';
import { getGithubProfile, getGithubRepos, syncGithub } from './github';

export function useGithubProfile() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['github-profile', user?.id],
    queryFn: () => getGithubProfile(user.id),
    enabled: !!user,
  });
}

export function useGithubRepos() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['github-repos', user?.id],
    queryFn: () => getGithubRepos(user.id),
    enabled: !!user,
  });
}

export function useSyncGithub() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ username }) => syncGithub({ username }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['github-profile', user?.id] });
      queryClient.invalidateQueries({ queryKey: ['github-repos', user?.id] });
    },
  });
}
