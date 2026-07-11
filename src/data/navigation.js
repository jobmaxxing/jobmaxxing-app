import { LayoutDashboard, Settings } from 'lucide-react';

export const primaryNavItems = [
  { label: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Resume', path: '/app/resume' },
  { label: 'GitHub', path: '/app/github' },
  { label: 'Portfolio', path: '/app/portfolio' },
  { label: 'ATS', path: '/app/ats' },
  { label: 'LinkedIn', path: '/app/linkedin' },
  { label: 'Interviews', path: '/app/interviews' },
  { label: 'Cold Email', path: '/app/cold-email' },
  { label: 'Job Tracker', path: '/app/job-tracker' },
];

export const secondaryNavItems = [{ label: 'Settings', path: '/app/settings', icon: Settings }];

export const pageTitles = {
  '/app/dashboard': 'Dashboard',
  '/app/resume': 'Resume',
  '/app/github': 'GitHub',
  '/app/portfolio': 'Portfolio',
  '/app/ats': 'ATS',
  '/app/linkedin': 'LinkedIn',
  '/app/interviews': 'Interviews',
  '/app/cold-email': 'Cold Email',
  '/app/job-tracker': 'Job Tracker',
  '/app/settings': 'Settings',
  '/app/profile': 'Profile',
};
