import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';

/**
 * Uses CounterAPI (free, no signup) with a date-based key so the
 * count resets automatically each day.
 * API docs: https://api.counterapi.dev
 */
const NAMESPACE = 'jobmaxxing-app';

// Module-level flag — survives React 18 StrictMode's double-mount.
// Guarantees the counter API is called exactly once per real page load.
let hasIncremented = false;

function getTodayKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `visitors-${yyyy}-${mm}-${dd}`;
}

export default function VisitorBadge() {
  const [count, setCount] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard: only increment once per page load (prevents React 18 StrictMode double-fire)
    if (hasIncremented) return;
    hasIncremented = true;

    const key = getTodayKey();
    const url = `https://api.counterapi.dev/v1/${NAMESPACE}/${key}/up`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.count === 'number') {
          setCount(data.count);
          setTimeout(() => setVisible(true), 1200);
        }
      })
      .catch(() => {
        // Silently fail — don't show badge if API is down
      });
  }, []);

  return (
    <AnimatePresence>
      {visible && count !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            style={{
              background: 'rgba(10,10,20,0.85)',
              border: '1px solid rgba(99,102,241,0.35)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Pulsing green dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>

            <Users className="w-3.5 h-3.5 text-indigo-400" />

            <div className="flex flex-col leading-none">
              <span
                className="font-black text-sm"
                style={{
                  background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {count.toLocaleString()}
              </span>
              <span className="text-white/40 text-[10px] font-medium mt-0.5">visitors today</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
