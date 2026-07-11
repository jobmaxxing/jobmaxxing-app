import { resumeSummary, resumeSections, resumeVersions } from './resume';

export function useResumeData() {
  return { summary: resumeSummary, sections: resumeSections, versions: resumeVersions };
}
