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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-4 py-2.5 shadow-soft-hover">
            <Users className="h-3.5 w-3.5 text-accent" />

            <div className="flex flex-col leading-none">
              <span className="font-heading text-sm font-black text-ink">{count.toLocaleString()}</span>
              <span className="mt-0.5 text-[10px] font-medium text-muted">visitors today</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
