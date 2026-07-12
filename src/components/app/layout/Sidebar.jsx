import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { X, LogOut } from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';
import Avatar from '../../ui/Avatar';
import { LogoIcon } from '../../ui/LogoIcon';
import { cn } from '../../ui/cn';
import { useAuth } from '../../../context/useAuth';
import { primaryNavItems, secondaryNavItems } from '../../../data/navigation';

function SidebarContent({ collapsed, onNavigate }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Account';

  const handleSignOut = async () => {
    if (onNavigate) onNavigate();
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <>
      <Link
        to="/"
        onClick={onNavigate}
        title="Back to home"
        className={cn(
          'flex items-center gap-2 px-4 py-5 transition-opacity duration-150 hover:opacity-70',
          collapsed && 'justify-center px-0'
        )}
      >
        <LogoIcon size={24} />
        {!collapsed && <span className="font-heading text-base font-semibold text-ink">JobMaxxing</span>}
      </Link>

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
              'flex min-h-9 items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-canvas',
              collapsed && 'justify-center px-0',
              isActive && 'bg-accent-soft'
            )
          }
        >
          <Avatar name={displayName} size="sm" />
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{displayName}</p>
              <p className="truncate text-xs text-muted">{user?.email}</p>
            </div>
          )}
        </NavLink>

        <button
          type="button"
          title={collapsed ? 'Sign out' : undefined}
          onClick={handleSignOut}
          className={cn(
            'flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink',
            collapsed && 'justify-center px-0'
          )}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Sign out</span>}
        </button>
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
