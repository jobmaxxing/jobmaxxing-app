import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Construction } from 'lucide-react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-canvas font-sans">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-center gap-2.5 border-b border-line bg-accent-soft px-4 py-3.5 text-center text-sm font-medium text-accent-ink sm:px-8">
          <Construction className="h-4 w-4 shrink-0" />
          JobMaxxing is still in active development — everything shown here is sample data, not real accounts or activity.
        </div>
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
