import { Clock } from 'lucide-react';

const quarters = [
  { label: 'Q4 2026', items: ['Resume Maxxing'] },
  { label: 'Q1 2027', items: ['ATS Maxxing', 'Job Maxxing'] },
  { label: 'Q2 2027', items: ['Cold Mail Maxxing', 'GitHub Maxxing'] },
  { label: 'Q3 2027', items: ['Portfolio Maxxing', 'Referral Maxxing', 'Interview Maxxing', 'LinkedIn Maxxing', 'Salary Maxxing'] },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">Roadmap</span>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            What We're Building
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted">
            A full career acceleration platform rolling out through 2026.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-line sm:block md:left-1/2" />

          <div className="space-y-10">
            {quarters.map((quarter, qi) => (
              <div
                key={quarter.label}
                className={`relative flex flex-col items-start gap-4 sm:flex-row ${qi % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}
              >
                <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center sm:flex">
                  <div className="h-5 w-5 rounded-full border-2 border-surface bg-accent shadow-soft" />
                </div>

                <div
                  className={`w-full rounded-2xl border border-line bg-surface p-6 shadow-soft sm:w-[calc(50%-2rem)] ${
                    qi % 2 === 0 ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'
                  }`}
                >
                  <div className={`mb-4 flex items-center gap-2 ${qi % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft">
                      <Clock className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-base font-bold text-ink">{quarter.label}</span>
                  </div>

                  <div className="space-y-2.5">
                    {quarter.items.map((item) => (
                      <div key={item} className={`flex items-center gap-3 ${qi % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                        <span className="shrink-0 whitespace-nowrap rounded border border-line px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">
                          Coming Soon
                        </span>
                        <span className="text-sm font-medium text-ink">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
