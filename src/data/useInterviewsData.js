import { upcomingInterviews, pastInterviews } from './interviews';

export function useInterviewsData() {
  return { upcoming: upcomingInterviews, past: pastInterviews };
}
