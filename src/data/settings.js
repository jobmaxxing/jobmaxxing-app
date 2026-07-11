export const settingGroups = [
  {
    id: 'account',
    title: 'Account',
    rows: [
      { id: 'email-notifications', label: 'Email notifications', enabled: true },
      { id: 'weekly-digest', label: 'Weekly digest', enabled: true },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    rows: [
      { id: 'interview-reminders', label: 'Interview reminders', enabled: true },
      { id: 'ai-recommendations', label: 'AI recommendation alerts', enabled: false },
    ],
  },
  {
    id: 'appearance',
    title: 'Appearance',
    rows: [{ id: 'compact-sidebar', label: 'Start with sidebar collapsed', enabled: false }],
  },
];
