import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { LogoIcon } from '../ui/LogoIcon';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled ? 'border-b border-line bg-surface/95 shadow-soft backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <Link
          to="/app/dashboard"
          className="flex h-9 items-center justify-center gap-2 bg-accent px-4 text-center text-xs font-medium text-white transition-colors duration-150 hover:bg-[#3f7de0] sm:text-sm"
        >
          <LayoutDashboard className="h-3.5 w-3.5 shrink-0" />
          New — sign up and try the dashboard →
        </Link>

        <div className="container-custom flex h-16 items-center justify-between px-6">
          <a
            href="#"
            className="flex items-center gap-2.5"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <LogoIcon size={26} />
            <span className="font-heading text-base font-bold uppercase tracking-widest text-ink">JobMaxxing</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              Login
            </Link>
            <a
              href="#waitlist"
              onClick={(e) => handleNavClick(e, '#waitlist')}
              className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#3f7de0]"
            >
              Join Waitlist
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-muted transition-colors duration-150 hover:text-ink md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[6.25rem] left-0 right-0 z-40 border-b border-line bg-surface px-6 py-6 shadow-soft md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-ink"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 border-t border-line pt-3">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="text-base font-medium text-ink">
                  Login
                </Link>
                <a
                  href="#waitlist"
                  onClick={(e) => handleNavClick(e, '#waitlist')}
                  className="rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
