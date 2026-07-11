import { cn } from './cn';

export default function Card({ children, className, hover = false, as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn(
        'rounded-xl border border-line bg-surface shadow-soft',
        hover && 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-hover',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
