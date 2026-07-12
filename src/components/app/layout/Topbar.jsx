import { Search, Bell, Menu } from 'lucide-react';
import Avatar from '../../ui/Avatar';
import { useAuth } from '../../../context/useAuth';

export default function Topbar({ onMenuClick }) {
  const { user } = useAuth();
  const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Account';

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-surface/95 px-4 py-4 backdrop-blur-sm sm:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search companies, roles"
            className="w-64 rounded-lg border border-line bg-canvas py-2 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-soft"
          />
        </div>

        <button
          type="button"
          className="relative rounded-lg p-2 text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>

        <Avatar name={displayName} size="sm" />
      </div>
    </header>
  );
}
