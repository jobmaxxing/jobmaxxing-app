import { cn } from './cn';

const sizes = {
  sm: 'h-7 w-7 text-xs',
  md: 'h-9 w-9 text-sm',
  lg: 'h-14 w-14 text-lg',
};

export default function Avatar({ name = '', src, size = 'md', className }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (src) {
    return <img src={src} alt={name} className={cn('rounded-full object-cover', sizes[size], className)} />;
  }

  return (
    <div className={cn('flex items-center justify-center rounded-full bg-accent-soft font-medium text-accent', sizes[size], className)}>
      {initials || '?'}
    </div>
  );
}
