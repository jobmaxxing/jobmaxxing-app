import {
  LayoutDashboard,
  Settings,
  FileText,
  GitBranch,
  Globe,
  ShieldCheck,
  Link as LinkIcon,
  MessageSquare,
  Mail,
  Briefcase,
} from 'lucide-react';

export const primaryNavItems = [
  { label: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
  { label: 'Resume', path: '/app/resume', icon: FileText },
  { label: 'GitHub', path: '/app/github', icon: GitBranch },
  { label: 'Portfolio', path: '/app/portfolio', icon: Globe },
  { label: 'ATS', path: '/app/ats', icon: ShieldCheck },
  { label: 'LinkedIn', path: '/app/linkedin', icon: LinkIcon },
  { label: 'Interviews', path: '/app/interviews', icon: MessageSquare },
  { label: 'Cold Email', path: '/app/cold-email', icon: Mail },
  { label: 'Job Tracker', path: '/app/job-tracker', icon: Briefcase },
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
