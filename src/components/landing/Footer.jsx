import { LogoIcon } from '../ui/LogoIcon';

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
    <footer className="relative overflow-hidden border-t border-line">
      <div className="container-custom px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="mb-4 flex items-center gap-2.5"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <LogoIcon size={30} />
              <span className="font-heading text-lg font-black uppercase tracking-widest text-ink">JobMaxxing</span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted">
              Stop Doom-Applying. Start JobMaxxing.
              <br />
              The career acceleration platform built for software developers.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-150 hover:text-ink"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.heading}>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">{group.heading}</h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm text-muted transition-colors duration-150 hover:text-ink"
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
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">© 2026 JobMaxxing. All rights reserved. Made with ❤️ for developers.</p>
          <span className="text-xs text-muted">Pre-launch · Join the waitlist</span>
        </div>

        {/* Creator credit strip */}
        <div className="mt-8 flex flex-col items-center gap-5 border-t border-line pt-8">
          <p className="text-xs tracking-wide text-muted">
            Designed &amp; built by <span className="text-sm font-semibold text-ink">Twaran Gupta</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {creatorSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-xs font-medium text-muted transition-colors duration-150 hover:text-ink"
              >
                <s.Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
