import { jobApplications, statusOrder, statusLabels } from './jobTracker';

export function useJobTrackerData() {
  return { jobApplications, statusOrder, statusLabels };
}
