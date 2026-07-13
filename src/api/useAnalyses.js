import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { analyzeResume, getLatestAnalysis } from './analyses';

export function useLatestAnalysis(resumeId) {
  return useQuery({
    queryKey: ['resume-analysis', resumeId],
    queryFn: () => getLatestAnalysis(resumeId),
    enabled: !!resumeId,
  });
}

export function useAnalyzeResume() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ resumeId, targetRole }) => analyzeResume({ resumeId, targetRole }),
    onSuccess: (data, variables) =>
      queryClient.invalidateQueries({ queryKey: ['resume-analysis', variables.resumeId] }),
  });
}
