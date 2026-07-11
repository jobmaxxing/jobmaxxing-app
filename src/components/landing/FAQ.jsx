import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is JobMaxxing?',
    a: 'JobMaxxing is a career acceleration platform built for software developers. It functions as your one-stop resource to optimize every aspect of your job search — from your resume and GitHub profile to cold emails and interview prep — giving you a clear, streamlined path to getting hired.',
  },
  {
    q: 'Who is JobMaxxing for?',
    a: 'JobMaxxing is built for software developers at all experience levels — freshers looking for their first job, developers targeting product companies, those aiming for remote-first roles, and experienced engineers looking to switch companies or negotiate better salaries.',
  },
  {
    q: 'When will it launch?',
    a: 'We\'re currently in pre-launch. Our first feature, Resume Maxxing, is targeted for Q3 2026. Join the waitlist to be notified the moment we go live and get early access before the general public.',
  },
  {
    q: 'Is it free?',
    a: 'We\'re still finalizing our pricing model. Early waitlist members will get exclusive discounted access. Follow our updates for pricing announcements — we\'re committed to making it affordable for all developers.',
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
    q: 'Is it built for developers globally?',
    a: 'Absolutely. JobMaxxing is designed around the global tech job market — including salary benchmarks, top startup and product company targeting, ATS systems used by modern recruiters, and strategies tailored to how modern hiring actually works.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors duration-150 hover:bg-canvas"
        id={`faq-${index}`}
      >
        <span className="pr-2 text-sm font-semibold text-ink md:text-base">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="h-5 w-5 text-muted" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="accordion-content"
          >
            <div className="border-t border-line px-5 pb-5 text-sm leading-relaxed text-muted">
              <div className="pt-4">{faq.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-muted">FAQ</span>
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-black leading-tight text-ink md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
