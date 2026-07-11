export const statTiles = [
  {
    id: 'applications',
    label: 'Applications',
    value: '72',
    subtitle: 'Last 30 days',
    delta: '+18% vs last month',
    direction: 'up',
  },
  {
    id: 'response-rate',
    label: 'Response Rate',
    value: '24%',
    subtitle: '18 responses',
    delta: '+5pp vs last month',
    direction: 'up',
  },
  {
    id: 'interview-rate',
    label: 'Interview Rate',
    value: '11%',
    subtitle: '8 interviews',
    delta: '-2pp vs last month',
    direction: 'down',
  },
  {
    id: 'active-pipeline',
    label: 'Active Pipeline',
    value: '13',
    subtitle: 'Across 3 stages',
    delta: '+3 vs last month',
    direction: 'up',
  },
];

export const applicationActivity = [
  { week: 'Jun 2', applications: 8, responses: 3 },
  { week: 'Jun 9', applications: 13, responses: 4 },
  { week: 'Jun 16', applications: 10, responses: 5 },
  { week: 'Jun 23', applications: 16, responses: 6 },
  { week: 'Jun 30', applications: 14, responses: 6 },
  { week: 'Jul 7', applications: 19, responses: 7 },
];

export const pipelineFunnel = [
  { stage: 'Applied', count: 72, percent: 100 },
  { stage: 'Viewed', count: 41, percent: 57 },
  { stage: 'Screened', count: 18, percent: 25 },
  { stage: 'Interview', count: 13, percent: 18 },
  { stage: 'Offer', count: 3, percent: 4 },
];

export const recentActivity = [
  { id: 1, company: 'Stripe', role: 'Frontend Engineer', event: 'Application viewed', time: '2h ago' },
  { id: 2, company: 'Vercel', role: 'Platform Engineer', event: 'Moved to interview stage', time: '5h ago' },
  { id: 3, company: 'Linear', role: 'Product Engineer', event: 'Applied', time: '1d ago' },
  { id: 4, company: 'Notion', role: 'Full Stack Engineer', event: 'Recruiter screen scheduled', time: '2d ago' },
];

export const aiRecommendations = [
  { id: 1, tag: 'Resume', title: 'Tailor your resume summary for the Stripe application', eta: '15 min', priority: 'high' },
  { id: 2, tag: 'ATS', title: 'Add 3 missing keywords to improve your ATS match score', eta: '10 min', priority: 'medium' },
  { id: 3, tag: 'LinkedIn', title: 'Update your headline to match target role titles', eta: '5 min', priority: 'low' },
];
