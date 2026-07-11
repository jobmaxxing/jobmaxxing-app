import { githubSummary, repos } from './github';

export function useGithubData() {
  return { summary: githubSummary, repos };
}
