import { motion } from 'framer-motion';
import {
  FileText, ShieldCheck, Mail, GitBranch, Globe, Briefcase,
  MessageSquare, Link, DollarSign, Users
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    iconColor: 'from-blue-500 to-blue-700',
    iconGlow: 'rgba(59,130,246,0.3)',
    title: 'Resume Maxxing',
    tagline: 'Upload your resume and get AI-powered improvements.',
    bullets: [
      'Resume parsing & rewriting',
      'Impact-focused bullet points',
      'Keyword optimization',
      'Recruiter-friendly formatting',
    ],
    preview: null,
    accentColor: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.3)',
  },
  {
    icon: ShieldCheck,
    iconColor: 'from-emerald-500 to-teal-700',
    iconGlow: 'rgba(16,185,129,0.3)',
    title: 'ATS Maxxing',
    tagline: 'Beat applicant tracking systems before they beat you.',
    bullets: [
      'Real-time ATS score',
      'Missing keyword detection',
      'Formatting analysis',
      'Skill gap analysis',
      'Optimization recommendations',
    ],
    preview: null,
    accentColor: 'rgba(16,185,129,0.1)',
    borderColor: 'rgba(16,185,129,0.3)',
  },
  {
    icon: Mail,
    iconColor: 'from-purple-500 to-purple-700',
    iconGlow: 'rgba(124,58,237,0.3)',
    title: 'Cold Mail Maxxing',
    tagline: 'Automate recruiter outreach at scale.',
    bullets: [
      'AI-generated personalized emails',
      'Bulk outreach campaigns',
      'Follow-up automation',
      'Response rate tracking',
    ],
    preview: null,
    accentColor: 'rgba(124,58,237,0.1)',
    borderColor: 'rgba(124,58,237,0.3)',
  },
  {
    icon: GitBranch,
    iconColor: 'from-cyan-500 to-blue-600',
    iconGlow: 'rgba(6,182,212,0.3)',
    title: 'GitHub Maxxing',
    tagline: 'Turn GitHub into a recruiter magnet.',
    bullets: [
      'Profile analysis & scoring',
      'README optimization',
      'Open source suggestions',
      'Recruiter visibility score',
      'Contribution insights',
    ],
    preview: {
      lines: [
        { label: 'GitHub Score', value: '84 / 100', color: 'text-cyan-400' },
        { label: '✓ Better READMEs', color: 'text-green-400' },
        { label: '✓ Pin top projects', color: 'text-green-400' },
        { label: '✓ Add live demos', color: 'text-green-400' },
      ],
    },
    accentColor: 'rgba(6,182,212,0.1)',
    borderColor: 'rgba(6,182,212,0.3)',
  },
  {
    icon: Globe,
    iconColor: 'from-pink-500 to-rose-700',
    iconGlow: 'rgba(236,72,153,0.3)',
    title: 'Portfolio Maxxing',
    tagline: 'Build a portfolio that converts visitors into interviews.',
    bullets: [
      'Design & content analysis',
      'Missing project detection',
      'AI-generated case studies',
      'Recruiter readability score',
    ],
    preview: {
      lines: [
        { label: 'Portfolio Score', value: '78 / 100', color: 'text-pink-400' },
        { label: '✓ Add live demos', color: 'text-green-400' },
        { label: '✓ Add impact metrics', color: 'text-green-400' },
        { label: '✓ Write case studies', color: 'text-green-400' },
      ],
    },
    accentColor: 'rgba(236,72,153,0.1)',
    borderColor: 'rgba(236,72,153,0.3)',
  },
  {
    icon: Briefcase,
    iconColor: 'from-orange-500 to-amber-600',
    iconGlow: 'rgba(249,115,22,0.3)',
    title: 'Job Maxxing',
    tagline: 'Analyze compatibility before you hit Apply.',
    bullets: [
      'Job match score',
      'Missing skills analysis',
      'Resume tailoring per role',
      'Interview probability estimate',
    ],
    preview: {
      lines: [
        { label: 'Match Score', value: '81%', color: 'text-orange-400' },
        { label: '⚠ Missing: Docker, Redis', color: 'text-amber-400' },
        { label: '$ Potential: $120k–$180k', color: 'text-green-400' },
      ],
    },
    accentColor: 'rgba(249,115,22,0.1)',
    borderColor: 'rgba(249,115,22,0.3)',
  },
  {
    icon: MessageSquare,
    iconColor: 'from-violet-500 to-purple-700',
    iconGlow: 'rgba(139,92,246,0.3)',
    title: 'Interview Maxxing',
    tagline: 'Prepare smarter with AI mock interviews.',
    bullets: [
      'Personalized mock interviews',
      'Technical & behavioral questions',
      'AI-powered feedback',
      'Company-specific prep',
    ],
    preview: null,
    accentColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Link,
    iconColor: 'from-blue-400 to-blue-700',
    iconGlow: 'rgba(59,130,246,0.3)',
    title: 'LinkedIn Maxxing',
    tagline: 'Optimize your professional presence.',
    bullets: [
      'AI headline generation',
      'About section rewrite',
      'Profile score analysis',
      'Recruiter visibility boost',
    ],
    preview: null,
    accentColor: 'rgba(59,130,246,0.1)',
    borderColor: 'rgba(59,130,246,0.3)',
  },
  {
    icon: DollarSign,
    iconColor: 'from-green-500 to-emerald-700',
    iconGlow: 'rgba(34,197,94,0.3)',
    title: 'Salary Maxxing',
    tagline: 'Know your worth and negotiate with confidence.',
    bullets: [
      'Salary benchmarking',
      'Offer comparison tools',
      'Negotiation assistance',
      'Market insights',
    ],
    preview: null,
    accentColor: 'rgba(34,197,94,0.1)',
    borderColor: 'rgba(34,197,94,0.3)',
  },
  {
    icon: Users,
    iconColor: 'from-teal-500 to-cyan-700',
    iconGlow: 'rgba(20,184,166,0.3)',
    title: 'Referral Maxxing',
    tagline: 'Get more referrals through strategic networking.',
    bullets: [
      'Referral opportunity finder',
      'AI request generator',
      'LinkedIn outreach templates',
      'Referral tracking',
    ],
    preview: null,
    accentColor: 'rgba(20,184,166,0.1)',
    borderColor: 'rgba(20,184,166,0.3)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06), transparent 60%)', filter: 'blur(40px)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-purple-400/80 tracking-widest uppercase mb-4 block">Features</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl mx-auto mb-4">
            The Career Operating System for{' '}
            <span className="text-gradient">Developers</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            10 powerful tools to maximize every aspect of your job search.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-2xl p-6 overflow-hidden group cursor-default transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.accentColor}, rgba(255,255,255,0.02))`,
                  border: `1px solid ${feature.borderColor.replace('0.3', '0.15')}`,
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: `1px solid ${feature.borderColor}`, boxShadow: `inset 0 0 30px ${feature.iconGlow}` }}
                />

                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.iconColor} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 0 20px ${feature.iconGlow}` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>

                {/* Title & tagline */}
                <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-white/40 text-sm mb-5 leading-relaxed">{feature.tagline}</p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {feature.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Preview box */}
                {feature.preview && (
                  <div
                    className="rounded-xl p-4 font-mono text-xs space-y-1.5"
                    style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {feature.preview.lines.map((line, li) => (
                      <div key={li} className="flex items-center justify-between">
                        <span className={line.color || 'text-white/50'}>{line.label}</span>
                        {line.value && <span className="text-white font-bold">{line.value}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
