import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GradientOrbs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport or common in-app WebViews (Instagram, FB, etc.)
    const checkMobile = () => {
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Instagram|FBAN|FBAV/i.test(
        navigator.userAgent
      );
      setIsMobile(window.innerWidth < 768 || mobileUA);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Render static, smaller orbs for mobile/in-app browsers to prevent WebView memory crashes
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue orb top-left */}
        <div
          className="orb w-[250px] h-[250px] -top-20 -left-20 opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)',
            transform: 'translate3d(0,0,0)',
          }}
        />
        {/* Purple orb top-right */}
        <div
          className="orb w-[250px] h-[250px] -top-10 -right-10 opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)',
            transform: 'translate3d(0,0,0)',
          }}
        />
        {/* Teal orb center-bottom */}
        <div
          className="orb w-[200px] h-[200px] bottom-10 left-1/2 -translate-x-1/2 opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)',
            transform: 'translate3d(0,0,0)',
          }}
        />
      </div>
    );
  }

  // Fallback for desktop: Full size animated orbs
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blue orb top-left */}
      <motion.div
        className="orb w-[600px] h-[600px] -top-40 -left-40"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Purple orb top-right */}
      <motion.div
        className="orb w-[500px] h-[500px] -top-20 -right-20"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Teal orb center-bottom */}
      <motion.div
        className="orb w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Small accent orb */}
      <motion.div
        className="orb w-[200px] h-[200px] top-1/3 left-1/4"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  );
}
