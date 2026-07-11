import {
  FileText, ShieldCheck, Mail, GitBranch, Globe, Briefcase,
  MessageSquare, Link, DollarSign, Users
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Resume Maxxing',
    tagline: 'Upload your resume and get AI-powered improvements.',
    bullets: ['Resume parsing & rewriting', 'Impact-focused bullet points', 'Keyword optimization', 'Recruiter-friendly formatting'],
    preview: null,
  },
  {
    icon: ShieldCheck,
    title: 'ATS Maxxing',
    tagline: 'Beat applicant tracking systems before they beat you.',
    bullets: ['Real-time ATS score', 'Missing keyword detection', 'Formatting analysis', 'Skill gap analysis', 'Optimization recommendations'],
    preview: null,
  },
  {
    icon: Mail,
    title: 'Cold Mail Maxxing',
    tagline: 'Automate recruiter outreach at scale.',
    bullets: ['AI-generated personalized emails', 'Bulk outreach campaigns', 'Follow-up automation', 'Response rate tracking'],
    preview: null,
  },
  {
    icon: GitBranch,
    title: 'GitHub Maxxing',
    tagline: 'Turn GitHub into a recruiter magnet.',
    bullets: ['Profile analysis & scoring', 'README optimization', 'Open source suggestions', 'Recruiter visibility score', 'Contribution insights'],
    preview: {
      lines: [
        { label: 'GitHub Score', value: '84 / 100' },
        { label: '✓ Better READMEs' },
        { label: '✓ Pin top projects' },
        { label: '✓ Add live demos' },
      ],
    },
  },
  {
    icon: Globe,
    title: 'Portfolio Maxxing',
    tagline: 'Build a portfolio that converts visitors into interviews.',
    bullets: ['Design & content analysis', 'Missing project detection', 'AI-generated case studies', 'Recruiter readability score'],
    preview: {
      lines: [
        { label: 'Portfolio Score', value: '78 / 100' },
        { label: '✓ Add live demos' },
        { label: '✓ Add impact metrics' },
        { label: '✓ Write case studies' },
      ],
    },
  },
  {
    icon: Briefcase,
    title: 'Job Maxxing',
    tagline: 'Analyze compatibility before you hit Apply.',
    bullets: ['Job match score', 'Missing skills analysis', 'Resume tailoring per role', 'Interview probability estimate'],
    preview: {
      lines: [
        { label: 'Match Score', value: '81%' },
        { label: '⚠ Missing: Docker, Redis' },
        { label: '$ Potential: $120k–$180k' },
      ],
    },
  },
  {
    icon: MessageSquare,
    title: 'Interview Maxxing',
    tagline: 'Prepare smarter with AI mock interviews.',
    bullets: ['Personalized mock interviews', 'Technical & behavioral questions', 'AI-powered feedback', 'Company-specific prep'],
    preview: null,
  },
  {
    icon: Link,
    title: 'LinkedIn Maxxing',
    tagline: 'Optimize your professional presence.',
    bullets: ['AI headline generation', 'About section rewrite', 'Profile score analysis', 'Recruiter visibility boost'],
    preview: null,
  },
  {
    icon: DollarSign,
    title: 'Salary Maxxing',
    tagline: 'Know your worth and negotiate with confidence.',
    bullets: ['Salary benchmarking', 'Offer comparison tools', 'Negotiation assistance', 'Market insights'],
    preview: null,
  },
  {
    icon: Users,
    title: 'Referral Maxxing',
    tagline: 'Get more referrals through strategic networking.',
    bullets: ['Referral opportunity finder', 'AI request generator', 'LinkedIn outreach templates', 'Referral tracking'],
    preview: null,
  },
];

function previewLineColor(label) {
  if (label.startsWith('✓')) return 'text-success';
  if (label.startsWith('⚠')) return 'text-danger';
  return 'text-muted';
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">Features</span>
          <h2 className="mx-auto mb-4 max-w-3xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            The Career Operating System for Developers
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted">
            10 powerful tools to maximize every aspect of your job search.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition-shadow duration-200 hover:shadow-soft-hover"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="rounded border border-line px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">
                    Coming Soon
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{feature.tagline}</p>

                <ul className="mb-5 space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {feature.preview && (
                  <div className="space-y-1.5 rounded-xl border border-line bg-canvas p-4 font-mono text-xs">
                    {feature.preview.lines.map((line) => (
                      <div key={line.label} className="flex items-center justify-between">
                        <span className={previewLineColor(line.label)}>{line.label}</span>
                        {line.value && <span className="font-bold text-ink">{line.value}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
