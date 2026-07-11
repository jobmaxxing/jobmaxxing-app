import { portfolioProjects } from './portfolio';

export function usePortfolioData() {
  return { projects: portfolioProjects };
}
