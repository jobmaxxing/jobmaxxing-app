import { cn } from './cn';

const variants = {
  neutral: 'border border-line bg-canvas text-muted',
  success: 'bg-success-soft text-success',
  danger: 'bg-danger-soft text-danger',
  info: 'bg-accent-soft text-accent',
  live: 'bg-success-soft text-success',
};

const dotColors = {
  neutral: 'bg-muted',
  success: 'bg-success',
  danger: 'bg-danger',
  info: 'bg-accent',
  live: 'bg-success',
};

export default function Badge({ children, variant = 'neutral', dot = false, className }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}>
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
}
