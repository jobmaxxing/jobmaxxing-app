import { NavLink } from 'react-router-dom';
import { cn } from '../../ui/cn';

export default function SidebarNavItem({ item, collapsed, onClick }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        cn(
          'flex h-9 items-center gap-3 rounded-lg border-l-2 border-transparent px-3 text-sm text-muted transition-colors duration-150 hover:bg-canvas hover:text-ink',
          collapsed && 'justify-center px-0',
          isActive && 'border-accent bg-accent-soft font-semibold text-accent hover:bg-accent-soft hover:text-accent'
        )
      }
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {!collapsed && <span className="truncate">{item.label}</span>}
    </NavLink>
  );
}
