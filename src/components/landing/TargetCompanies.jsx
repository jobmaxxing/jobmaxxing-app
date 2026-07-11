import { Building2, Globe, Rocket } from 'lucide-react';

const categories = [
  {
    icon: Rocket,
    label: 'High-Growth Startups',
    desc: 'Fast-growing unicorns disrupting every sector',
    companies: ['Stripe', 'Airbnb', 'Linear', 'Vercel', 'Brex', 'Ramp', 'Figma', 'Canva'],
  },
  {
    icon: Building2,
    label: 'Product Companies',
    desc: 'Global tech giants and industry leaders',
    companies: ['Atlassian', 'Adobe', 'Microsoft', 'Intuit', 'Salesforce', 'Uber', 'Google', 'Amazon'],
  },
  {
    icon: Globe,
    label: 'Global Remote',
    desc: 'Remote-first companies hiring globally',
    companies: ['YC Startups', 'EU Startups', 'Remote.com', 'Deel', 'Toptal', 'Arc.dev', 'Lemon.io', 'Turing'],
  },
];

export default function TargetCompanies() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">Target Companies</span>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            Built For The Jobs You Actually Want
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition-shadow duration-200 hover:shadow-soft-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="mb-1 text-lg font-bold text-ink">{cat.label}</h3>
                <p className="mb-6 text-sm text-muted">{cat.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {cat.companies.map((company) => (
                    <span
                      key={company}
                      className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs font-semibold text-muted transition-colors duration-150 hover:text-ink"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
