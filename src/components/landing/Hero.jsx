import { ArrowRight, Sparkles, TrendingUp, Mail, Star, GitBranch } from 'lucide-react';

const leftCards = [
  { id: 'resume', icon: <Star className="h-4 w-4 text-accent" />, title: 'Resume Score', value: '92/100', sub: '+8 this week', subColor: 'text-success' },
  { id: 'emails', icon: <Mail className="h-4 w-4 text-accent" />, title: 'Cold Emails Sent', value: '150+', sub: '12 replies', subColor: 'text-accent' },
];

const rightCards = [
  { id: 'ats', icon: <TrendingUp className="h-4 w-4 text-accent" />, title: 'ATS Match', value: '88%', sub: '↑ Optimized', subColor: 'text-accent' },
  { id: 'interviews', icon: <TrendingUp className="h-4 w-4 text-success" />, title: 'Interview Calls', value: '+37%', sub: 'Last 30 days', subColor: 'text-success' },
  { id: 'github', icon: <GitBranch className="h-4 w-4 text-accent" />, title: 'GitHub Score', value: '84/100', sub: '↑ +6 points', subColor: 'text-accent' },
];

function FloatingCard({ card }) {
  return (
    <div className="w-[165px] rounded-2xl border border-line bg-surface p-3.5 shadow-soft transition-shadow duration-200 hover:shadow-soft-hover">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent-soft">{card.icon}</div>
        <span className="text-[11px] font-medium leading-tight text-muted">{card.title}</span>
      </div>
      <div className="font-heading text-xl font-bold leading-none text-ink">{card.value}</div>
      <div className={`mt-1.5 text-[11px] font-medium ${card.subColor}`}>{card.sub}</div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="container-custom relative z-10 w-full px-4 py-20">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[180px_1fr_180px] xl:grid-cols-[200px_1fr_200px]">
          <div className="hidden flex-col items-center gap-5 lg:flex">
            {leftCards.map((card) => (
              <FloatingCard key={card.id} card={card} />
            ))}
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent">
              Built for Software Developers
            </div>

            <h1 className="mb-4 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="mb-1 block font-heading text-2xl font-bold text-muted sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                Stop Doom&#8209;Applying.
              </span>
              <span className="block font-heading text-ink">Start JobMaxxing.</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Your ultimate one-stop resource to get hired. Optimize your resume, beat ATS filters, showcase your
              GitHub, automate recruiter outreach, and land top software developer jobs.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => handleScroll('#waitlist')}
                className="group flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#3f7de0]"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScroll('#features')}
                className="flex items-center justify-center gap-2 rounded-xl border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-canvas"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                Explore Features
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: '10K+', label: 'Developers Joining' },
                { value: '10', label: 'Career Features' },
                { value: '100%', label: 'Developer Focused' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-heading text-xl font-black text-accent">{stat.value}</span>
                  <span className="text-xs font-medium text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden flex-col items-center gap-4 lg:flex">
            {rightCards.map((card) => (
              <FloatingCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-muted">Scroll to explore</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-line pt-1.5">
            <div className="h-2 w-1 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}
