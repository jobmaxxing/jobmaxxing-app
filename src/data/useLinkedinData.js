import { linkedinSummary, linkedinSuggestions } from './linkedin';

export function useLinkedinData() {
  return { summary: linkedinSummary, suggestions: linkedinSuggestions };
}
