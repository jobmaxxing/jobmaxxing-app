import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is JobMaxxing?',
    a: 'JobMaxxing is a career acceleration platform built specifically for Indian software developers. It combines AI-powered tools to optimize every aspect of your job search — from your resume and GitHub profile to cold emails and interview prep — helping you go from doom-applying to smart-applying.',
  },
  {
    q: 'Who is JobMaxxing for?',
    a: 'JobMaxxing is built for Indian software developers at all experience levels — freshers looking for their first job, developers targeting product companies, those aiming for remote-first roles, and experienced engineers looking to switch companies or negotiate better salaries.',
  },
  {
    q: 'When will it launch?',
    a: 'We\'re currently in pre-launch. Our first feature, Resume Maxxing, is targeted for Q1 2026. Join the waitlist to be notified the moment we go live and get early access before the general public.',
  },
  {
    q: 'Is it free?',
    a: 'We\'re still finalizing our pricing model. Early waitlist members will get exclusive discounted access. Follow our updates for pricing announcements — we\'re committed to making it affordable for Indian developers.',
  },
  {
    q: 'How does ATS Maxxing work?',
    a: 'ATS Maxxing analyzes your resume against job descriptions using the same logic that Applicant Tracking Systems use. It detects missing keywords, flags formatting issues, and gives you a score with actionable fixes to ensure your resume passes automated filters.',
  },
  {
    q: 'Can I upload my current resume?',
    a: 'Yes! Resume Maxxing lets you upload your existing resume in PDF or DOCX format. Our AI parses it, analyzes every section, and provides specific improvements for impact, keywords, formatting, and overall recruiter appeal.',
  },
  {
    q: 'Will Cold Mail Maxxing send emails automatically?',
    a: 'Cold Mail Maxxing generates highly personalized email templates and can assist with bulk outreach campaigns. Automation features including follow-ups and scheduling are part of our Q3 roadmap. The goal is smarter, not spammy, outreach.',
  },
  {
    q: 'Is it built specifically for Indian developers?',
    a: 'Absolutely. JobMaxxing is designed around the Indian tech job market — including India-specific salary benchmarks, top Indian startup and product company targeting, ATS systems used by Indian recruiters, and strategies tailored to how hiring actually works in India.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
        id={`faq-${index}`}
      >
        <span className="text-white font-semibold text-sm md:text-base pr-2">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="accordion-content"
          >
            <div
              className="px-5 pb-5 text-white/50 text-sm leading-relaxed"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="pt-4">{faq.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400/80 tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
