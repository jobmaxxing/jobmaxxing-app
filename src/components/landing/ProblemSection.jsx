import { SendHorizontal, ShieldAlert, UserX, HelpCircle, GitBranch, EyeOff, Link2 } from 'lucide-react';

const problems = [
  {
    icon: SendHorizontal,
    title: 'Applied to 500 jobs, got 5 replies',
    desc: 'Mass applying without strategy leads to silence. Quality beats quantity every time.',
  },
  {
    icon: ShieldAlert,
    title: 'ATS rejected your resume before a human saw it',
    desc: 'Most resumes never reach a recruiter. Automated filters kill your chances instantly.',
  },
  {
    icon: UserX,
    title: 'Recruiters keep ghosting you',
    desc: "No response isn't rejection — it's a signal your outreach isn't optimized yet.",
  },
  {
    icon: HelpCircle,
    title: "Unsure whether you're actually ready",
    desc: 'No objective feedback leaves you second-guessing. You need real data, not gut feelings.',
  },
  {
    icon: GitBranch,
    title: "GitHub profile doesn't stand out",
    desc: 'Recruiters check GitHub. An empty or cluttered profile loses you opportunities silently.',
  },
  {
    icon: EyeOff,
    title: "Portfolio isn't getting noticed",
    desc: 'Beautiful portfolios go unseen without proper case studies and conversion optimization.',
  },
  {
    icon: Link2,
    title: 'No referrals despite networking',
    desc: 'Networking without a strategy leads nowhere. The right ask at the right time is everything.',
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">The Problem</span>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            Software Developers Deserve Better Than Generic Job Portals
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className={`rounded-2xl border border-line bg-surface p-6 shadow-soft transition-shadow duration-200 hover:shadow-soft-hover ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-ink">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{problem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
