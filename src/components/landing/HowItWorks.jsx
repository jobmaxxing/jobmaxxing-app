import { Upload, Search, Sparkles, Target, Trophy } from 'lucide-react';

const steps = [
  { icon: Upload, title: 'Upload Resume', desc: 'Drop your existing resume. Our AI parses and analyzes every detail instantly.' },
  { icon: Search, title: 'Analyze Skills', desc: 'Get a full breakdown of your strengths, gaps, and opportunities across all dimensions.' },
  { icon: Sparkles, title: 'Optimize Profile', desc: 'AI improves your resume, LinkedIn, GitHub, and portfolio for maximum recruiter impact.' },
  { icon: Target, title: 'Apply Smarter', desc: 'Automate cold emails, get job match scores, and tailor applications per role.' },
  { icon: Trophy, title: 'Land More Interviews', desc: 'Practice with AI mock interviews, track applications, and maximize offer rates.' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">How It Works</span>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            Maximize Your Career In 5 Steps
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft">
                    <Icon className="h-7 w-7 text-accent" />
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-surface text-[10px] font-bold text-muted">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
