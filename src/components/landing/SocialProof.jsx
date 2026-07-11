import AnimatedCounter from './ui/AnimatedCounter';

const stats = [
  { target: 10000, suffix: '+', label: 'Developers Joining Waitlist', sub: 'And growing every day' },
  { target: 50000, suffix: '+', label: 'Resumes To Be Optimized', sub: 'Ready to transform careers' },
  { target: 100000, suffix: '+', label: 'Applications To Improve', sub: 'Accelerating direct hiring opportunities' },
];

export default function SocialProof() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">Momentum</span>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            Join The Early Adopters
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-surface p-8 text-center shadow-soft transition-shadow duration-200 hover:shadow-soft-hover"
            >
              <div className="mb-3 font-heading text-5xl font-black text-accent md:text-6xl">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="mb-2 text-base font-bold text-ink">{stat.label}</div>
              <div className="text-sm text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
