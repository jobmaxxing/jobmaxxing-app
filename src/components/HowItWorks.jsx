import { motion } from 'framer-motion';
import { Upload, Search, Sparkles, Target, Trophy } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Resume',
    desc: 'Drop your existing resume. Our AI parses and analyzes every detail instantly.',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    number: '02',
    icon: Search,
    title: 'Analyze Skills',
    desc: 'Get a full breakdown of your strengths, gaps, and opportunities across all dimensions.',
    color: 'from-purple-500 to-purple-700',
    glow: 'rgba(124,58,237,0.4)',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Optimize Profile',
    desc: 'AI improves your resume, LinkedIn, GitHub, and portfolio for maximum recruiter impact.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.4)',
  },
  {
    number: '04',
    icon: Target,
    title: 'Apply Smarter',
    desc: 'Automate cold emails, get job match scores, and tailor applications per role.',
    color: 'from-emerald-500 to-teal-700',
    glow: 'rgba(16,185,129,0.4)',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Land More Interviews',
    desc: 'Practice with AI mock interviews, track applications, and maximize offer rates.',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.4)',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-cyan-400/80 tracking-widest uppercase mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Maximize Your Career{' '}
            <span className="text-gradient">In 5 Steps</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-2 lg:hidden">
                    <span className="text-[10px] font-bold text-white/20">{step.number}</span>
                  </div>

                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 relative z-10 shadow-lg`}
                    style={{ boxShadow: `0 0 30px ${step.glow}` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                    {/* Step number inside */}
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#050508] border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60"
                    >
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full flex items-center justify-center -translate-x-1/2 z-0">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                        className="w-full h-px origin-left"
                        style={{ background: `linear-gradient(90deg, ${step.glow}, transparent)` }}
                      />
                    </div>
                  )}

                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
