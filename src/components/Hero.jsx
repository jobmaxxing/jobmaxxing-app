import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Mail, Star, GitBranch } from 'lucide-react';
import GradientOrbs from './ui/GradientOrbs';

// Individual card data
const leftCards = [
  {
    id: 'resume',
    icon: <Star className="w-4 h-4 text-yellow-400" />,
    title: 'Resume Score',
    value: '92/100',
    sub: '+8 this week',
    subColor: 'text-green-400',
    animClass: 'animate-float',
  },
  {
    id: 'emails',
    icon: <Mail className="w-4 h-4 text-purple-400" />,
    title: 'Cold Emails Sent',
    value: '150+',
    sub: '12 replies',
    subColor: 'text-purple-400',
    animClass: 'animate-float-slow',
  },
];

const rightCards = [
  {
    id: 'ats',
    icon: <TrendingUp className="w-4 h-4 text-blue-400" />,
    title: 'ATS Match',
    value: '88%',
    sub: '↑ Optimized',
    subColor: 'text-blue-400',
    animClass: 'animate-float-delayed',
  },
  {
    id: 'interviews',
    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
    title: 'Interview Calls',
    value: '+37%',
    sub: 'Last 30 days',
    subColor: 'text-green-400',
    animClass: 'animate-float',
  },
  {
    id: 'github',
    icon: <GitBranch className="w-4 h-4 text-cyan-400" />,
    title: 'GitHub Score',
    value: '84/100',
    sub: '↑ +6 points',
    subColor: 'text-cyan-400',
    animClass: 'animate-float-delayed',
  },
];

function FloatingCard({ card, index, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
      className={card.animClass}
    >
      <div className="glass-card rounded-2xl p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 hover:border-blue-500/30 transition-all duration-300 w-[165px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg feature-icon-bg flex items-center justify-center flex-shrink-0">
            {card.icon}
          </div>
          <span className="text-white/50 text-[11px] font-medium leading-tight">{card.title}</span>
        </div>
        <div className="text-white font-bold text-xl leading-none">{card.value}</div>
        <div className={`text-[11px] mt-1.5 font-medium ${card.subColor}`}>{card.sub}</div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16">
      <GradientOrbs />

      <div className="relative z-10 w-full container-custom px-4 py-20">
        {/* 3-column grid: [left cards] [center text] [right cards] */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_180px] xl:grid-cols-[200px_1fr_200px] gap-6 items-center">

          {/* ── Left cards ── */}
          <div className="hidden lg:flex flex-col gap-5 items-center">
            {leftCards.map((card, i) => (
              <FloatingCard key={card.id} card={card} index={i} align="left" />
            ))}
          </div>

          {/* ── Center content ── */}
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 text-sm font-semibold"
              style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: '#60A5FA',
              }}
            >
              <span className="badge-pulse" />
              Built for Software Developers
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-4"
            >
              <span className="block text-white/50 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-1">
                Stop Doom‑Applying.
              </span>
              <span className="block text-gradient">Start JobMaxxing.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 text-sm md:text-base text-white/50 max-w-md leading-relaxed"
            >
              Your ultimate one-stop resource to get hired. Optimize your resume, beat ATS filters, showcase your GitHub, automate recruiter outreach, and land top software developer jobs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mt-8 justify-center"
            >
              <button
                onClick={() => handleScroll('#waitlist')}
                className="glow-button px-7 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 text-sm group"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#features')}
                className="px-7 py-3 rounded-xl font-semibold text-white/80 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                Explore Features
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-center"
            >
              {[
                { value: '10K+', label: 'Developers Joining' },
                { value: '10', label: 'Career Features' },
                { value: '100%', label: 'Developer Focused' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-xl font-black text-gradient-blue">{stat.value}</span>
                  <span className="text-xs text-white/35 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right cards ── */}
          <div className="hidden lg:flex flex-col gap-4 items-center">
            {rightCards.map((card, i) => (
              <FloatingCard key={card.id} card={card} index={i} align="right" />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <span className="text-white/20 text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
