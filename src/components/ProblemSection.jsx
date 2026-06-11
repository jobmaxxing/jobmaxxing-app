import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    emoji: '📮',
    title: 'Applied to 500 jobs, got 5 replies',
    desc: 'Mass applying without strategy leads to silence. Quality beats quantity every time.',
  },
  {
    emoji: '🤖',
    title: 'ATS rejected your resume before a human saw it',
    desc: 'Most resumes never reach a recruiter. Automated filters kill your chances instantly.',
  },
  {
    emoji: '👻',
    title: 'Recruiters keep ghosting you',
    desc: 'No response isn\'t rejection — it\'s a signal your outreach isn\'t optimized yet.',
  },
  {
    emoji: '🤔',
    title: 'Unsure whether you\'re actually ready',
    desc: 'No objective feedback leaves you second-guessing. You need real data, not gut feelings.',
  },
  {
    emoji: '😐',
    title: 'GitHub profile doesn\'t stand out',
    desc: 'Recruiters check GitHub. An empty or cluttered profile loses you opportunities silently.',
  },
  {
    emoji: '🔕',
    title: 'Portfolio isn\'t getting noticed',
    desc: 'Beautiful portfolios go unseen without proper case studies and conversion optimization.',
  },
  {
    emoji: '🔗',
    title: 'No referrals despite networking',
    desc: 'Networking without a strategy leads nowhere. The right ask at the right time is everything.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07071A]/50 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-red-400/80 tracking-widest uppercase mb-4 block">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            Software Developers Deserve Better Than{' '}
            <span className="text-gradient">Generic Job Portals</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-default
                ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Red gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{problem.emoji}</span>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{problem.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
