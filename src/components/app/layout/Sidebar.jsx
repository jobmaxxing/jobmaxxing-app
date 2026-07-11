import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';
import Avatar from '../../ui/Avatar';
import { LogoIcon } from '../../ui/LogoIcon';
import { cn } from '../../ui/cn';
import { primaryNavItems, secondaryNavItems } from '../../../data/navigation';

function SidebarContent({ collapsed, onNavigate }) {
  return (
    <>
      <div className={cn('flex items-center gap-2 px-4 py-5', collapsed && 'justify-center px-0')}>
        <LogoIcon size={24} />
        {!collapsed && <span className="font-heading text-base font-semibold text-ink">JobMaxxing</span>}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {primaryNavItems.map((item) => (
          <SidebarNavItem key={item.path} item={item} collapsed={collapsed} onClick={onNavigate} />
        ))}
      </nav>

      <div className="space-y-1 border-t border-line px-3 py-3">
        {secondaryNavItems.map((item) => (
          <SidebarNavItem key={item.path} item={item} collapsed={collapsed} onClick={onNavigate} />
        ))}

        <NavLink
          to="/app/profile"
          onClick={onNavigate}
          title={collapsed ? 'Profile' : undefined}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-canvas',
              collapsed && 'justify-center px-0',
              isActive && 'bg-accent-soft'
            )
          }
        >
          <Avatar name="Alex Kim" size="sm" />
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">Alex Kim</p>
              <p className="truncate text-xs text-muted">alex@jobmaxxing.io</p>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
}

export default function Sidebar({ mobileOpen, onMobileClose }) {
  const [hovered, setHovered] = useState(false);
  const collapsed = !hovered;

  return (
    <>
      {/* Desktop: spacer reserves layout space at the collapsed rail width */}
      <div className="hidden h-screen w-[72px] shrink-0 md:block" />

      {/* Desktop: rail that floats over content and expands on hover, so the page doesn't reflow */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'fixed inset-y-0 left-0 z-30 hidden h-screen flex-col border-r border-line bg-surface transition-[width] duration-200 ease-in-out md:flex',
          collapsed ? 'w-[72px] shadow-none' : 'w-60 shadow-soft-hover'
        )}
      >
        <SidebarContent collapsed={collapsed} />
      </aside>

      {/* Mobile: off-canvas drawer, always mounted, toggled via CSS transitions */}
      <div
        aria-hidden={!mobileOpen}
        onClick={onMobileClose}
        className={cn(
          'fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 md:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />
      <aside
        className={cn(
          'fixed inset-y-0 z-50 flex w-64 flex-col border-r border-line bg-surface transition-[left] duration-200 ease-in-out md:hidden',
          mobileOpen ? 'left-0' : '-left-64'
        )}
      >
        <div className="flex items-center justify-end px-3 pt-3">
          <button
            type="button"
            onClick={onMobileClose}
            className="rounded-lg p-1.5 text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <SidebarContent collapsed={false} onNavigate={onMobileClose} />
      </aside>
    </>
  );
}
