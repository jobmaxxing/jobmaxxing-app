import { atsScan, atsChecklist, missingKeywords } from './ats';

export function useAtsData() {
  return { scan: atsScan, checklist: atsChecklist, missingKeywords };
}
