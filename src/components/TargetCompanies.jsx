import { motion } from 'framer-motion';
import { Building2, Globe, Rocket } from 'lucide-react';

const categories = [
  {
    icon: Rocket,
    iconColor: 'from-orange-400 to-rose-500',
    label: 'High-Growth Startups',
    desc: 'Fast-growing unicorns disrupting every sector',
    companies: ['Stripe', 'Airbnb', 'Linear', 'Vercel', 'Brex', 'Ramp', 'Figma', 'Canva'],
    accent: 'rgba(249,115,22,0.15)',
    border: 'rgba(249,115,22,0.25)',
  },
  {
    icon: Building2,
    iconColor: 'from-blue-400 to-purple-500',
    label: 'Product Companies',
    desc: 'Global tech giants and industry leaders',
    companies: ['Atlassian', 'Adobe', 'Microsoft', 'Intuit', 'Salesforce', 'Uber', 'Google', 'Amazon'],
    accent: 'rgba(99,102,241,0.15)',
    border: 'rgba(99,102,241,0.25)',
  },
  {
    icon: Globe,
    iconColor: 'from-cyan-400 to-teal-500',
    label: 'Global Remote',
    desc: 'Remote-first companies hiring globally',
    companies: ['YC Startups', 'EU Startups', 'Remote.com', 'Deel', 'Toptal', 'Arc.dev', 'Lemon.io', 'Turing'],
    accent: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.25)',
  },
];

export default function TargetCompanies() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.05), transparent)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-400/80 tracking-widest uppercase mb-4 block">Target Companies</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Built For The Jobs{' '}
            <span className="text-gradient">You Actually Want</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${cat.accent}, rgba(255,255,255,0.02))`,
                  border: `1px solid ${cat.border.replace('0.25', '0.15')}`,
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: `1px solid ${cat.border}` }}
                />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.iconColor} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{cat.label}</h3>
                <p className="text-white/40 text-sm mb-6">{cat.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {cat.companies.map((company) => (
                    <span
                      key={company}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white/70 border border-white/10 bg-white/5 hover:border-white/20 hover:text-white transition-all duration-200"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
