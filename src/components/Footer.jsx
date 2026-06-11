import { LogoIcon } from './ui/LogoIcon';

// ── Proper SVG brand icons ──────────────────────────────────────────
const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.978l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedIn = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconGitHub = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────

const links = [
  {
    heading: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'Contact', href: 'mailto:hello@jobmaxxing.in' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socials = [
  { Icon: IconX, href: 'https://x.com/twarangupta', label: 'X / Twitter' },
  { Icon: IconGitHub, href: 'https://github.com/twarangupta', label: 'GitHub' },
  { Icon: IconLinkedIn, href: 'https://www.linkedin.com/in/twarangupta/', label: 'LinkedIn' },
];

const creatorSocials = [
  {
    label: 'Instagram',
    handle: '@twarangupta',
    href: 'https://instagram.com/twarangupta',
    Icon: IconInstagram,
  },
  {
    label: 'LinkedIn',
    handle: 'twarangupta',
    href: 'https://www.linkedin.com/in/twarangupta/',
    Icon: IconLinkedIn,
  },
  {
    label: 'X / Twitter',
    handle: '@twarangupta',
    href: 'https://x.com/twarangupta',
    Icon: IconX,
  },
  {
    label: 'GitHub',
    handle: 'github.com/twarangupta',
    href: 'https://github.com/twarangupta',
    Icon: IconGitHub,
  },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(124,58,237,0.3), transparent)' }}
      />

      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2.5 mb-4"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <LogoIcon size={30} />
              <span
                className="font-black text-lg tracking-widest uppercase"
                style={{
                  background: 'linear-gradient(135deg, #F97316, #FB923C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                JobMaxxing
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              Stop Doom-Applying. Start JobMaxxing.
              <br />
              The career acceleration platform built for software developers.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.heading}>
              <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-5">{group.heading}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/25 text-xs">
            © 2026 JobMaxxing. All rights reserved. Made with ❤️ for developers.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/25 text-xs">Pre-launch · Join the waitlist</span>
          </div>
        </div>

        {/* ── Creator credit strip ── */}
        <div
          className="mt-8 pt-8 flex flex-col items-center gap-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-white/30 text-xs tracking-wide">
            Designed &amp; built by{' '}
            <span
              className="font-semibold text-sm"
              style={{
                background: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Twaran Gupta
            </span>
          </p>

          {/* Creator social links with real icons */}
          <div className="flex flex-wrap justify-center gap-3">
            {creatorSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-white/40 hover:text-white transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                }}
              >
                <s.Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
