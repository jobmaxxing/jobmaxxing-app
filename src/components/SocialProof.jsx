import { motion } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';

const stats = [
  {
    target: 10000,
    suffix: '+',
    label: 'Developers Joining Waitlist',
    sub: 'And growing every day',
    color: 'text-gradient-blue',
  },
  {
    target: 50000,
    suffix: '+',
    label: 'Resumes To Be Optimized',
    sub: 'Ready to transform careers',
    color: 'text-gradient-purple',
  },
  {
    target: 100000,
    suffix: '+',
    label: 'Applications To Improve',
    sub: 'Accelerating direct hiring opportunities',
    color: 'text-gradient',
  },
];

export default function SocialProof() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.08), transparent)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-400/80 tracking-widest uppercase mb-4 block">Momentum</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
            Join The{' '}
            <span className="text-gradient">Early Adopters</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-8 text-center relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className={`text-5xl md:text-6xl font-black mb-3 ${stat.color}`}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-white font-bold text-base mb-2">{stat.label}</div>
              <div className="text-white/40 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
