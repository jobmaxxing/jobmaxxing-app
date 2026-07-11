import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function WaitlistSection() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name: form.name, email: form.email }]);
      if (error) throw error;

      setStatus('success');
    } catch (error) {
      console.error('Error inserting waitlist data:', error.message);
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-6 block text-sm font-semibold uppercase tracking-widest text-muted">Get Early Access</span>

          <h2 className="mb-6 font-heading text-4xl font-black leading-tight text-ink md:text-6xl">
            Be First When JobMaxxing Launches
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-muted">
            Join ambitious developers who want to stop doom-applying and start optimizing.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface p-10 shadow-soft">
              <CheckCircle2 className="h-16 w-16 text-success" />
              <h3 className="text-2xl font-bold text-ink">You're on the list! 🎉</h3>
              <p className="text-base text-muted">
                We'll notify you the moment JobMaxxing launches. Get ready to stop doom-applying.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-8 text-left shadow-soft">
              <div className="mb-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted" htmlFor="waitlist-name">
                    Full Name
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    placeholder="Alex Rivera"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full rounded-xl border border-line bg-canvas px-4 py-3.5 text-sm font-medium text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-muted" htmlFor="waitlist-email">
                    Email Address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="alex@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full rounded-xl border border-line bg-canvas px-4 py-3.5 text-sm font-medium text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent-soft"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#3f7de0] disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-xs text-muted">🔒 No spam. Only product updates when we launch.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
