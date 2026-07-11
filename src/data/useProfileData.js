import { profile, profileStats } from './profile';

export function useProfileData() {
  return { profile, stats: profileStats };
}
