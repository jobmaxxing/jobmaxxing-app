import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function WaitlistSection() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus('loading');
    try {
      const { data, error } = await supabase
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
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12), transparent)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(5,5,8,0.5), transparent)' }}
        />
      </div>

      {/* Glowing border lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(124,58,237,0.5), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(124,58,237,0.5), transparent)' }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-purple-400/80 tracking-widest uppercase mb-6 block">Get Early Access</span>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Be First When{' '}
            <span className="text-gradient">JobMaxxing</span>{' '}
            Launches
          </h2>

          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Join ambitious developers who want to stop doom-applying and start optimizing.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-10 flex flex-col items-center gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <CheckCircle2 className="w-16 h-16 text-green-400" />
              </motion.div>
              <h3 className="text-white font-bold text-2xl">You're on the list! 🎉</h3>
              <p className="text-white/50 text-base">
                We'll notify you the moment JobMaxxing launches. Get ready to stop doom-applying.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 text-left">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2" htmlFor="waitlist-name">
                    Full Name
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    placeholder="Alex Rivera"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm font-medium outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2" htmlFor="waitlist-email">
                    Email Address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="alex@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm font-medium outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full glow-button py-4 rounded-xl font-semibold text-white text-base flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-white/25 text-xs mt-4">
                🔒 No spam. Only product updates when we launch.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
