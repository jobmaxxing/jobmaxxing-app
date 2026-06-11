import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const quarters = [
  {
    label: 'Q4 2026',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.4)',
    items: ['Resume Maxxing'],
  },
  {
    label: 'Q1 2027',
    color: 'from-purple-500 to-purple-700',
    glow: 'rgba(124,58,237,0.4)',
    items: ['ATS Maxxing', 'Job Maxxing'],
  },
  {
    label: 'Q2 2027',
    color: 'from-cyan-500 to-teal-600',
    glow: 'rgba(6,182,212,0.4)',
    items: ['Cold Mail Maxxing', 'GitHub Maxxing'],
  },
  {
    label: 'Q3 2027',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.4)',
    items: ['Portfolio Maxxing', 'Referral Maxxing', 'Interview Maxxing', 'LinkedIn Maxxing', 'Salary Maxxing'],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-400/80 tracking-widest uppercase mb-4 block">Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
            What We're{' '}
            <span className="text-gradient">Building</span>
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-lg mx-auto">
            A full career acceleration platform rolling out through 2026.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 via-cyan-500 to-amber-500 origin-top hidden sm:block"
          />

          <div className="space-y-10">
            {quarters.map((quarter, qi) => (
              <motion.div
                key={qi}
                initial={{ opacity: 0, x: qi % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: qi * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start gap-4 ${
                  qi % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${quarter.color} shadow-lg`}
                    style={{ boxShadow: `0 0 15px ${quarter.glow}` }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2rem)] rounded-2xl p-6 relative overflow-hidden group
                    ${qi % 2 === 0 ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'}
                  `}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Quarter header */}
                  <div className={`flex items-center gap-2 mb-4 ${qi % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${quarter.color} flex items-center justify-center flex-shrink-0`}
                      style={{ boxShadow: `0 0 15px ${quarter.glow}` }}
                    >
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-white text-base">{quarter.label}</span>
                  </div>

                  {/* Feature items */}
                  <div className="space-y-2.5">
                    {quarter.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`flex items-center gap-3 ${qi % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                      >
                        <span className="coming-soon-badge whitespace-nowrap flex-shrink-0">Coming Soon</span>
                        <span className="text-white/70 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
