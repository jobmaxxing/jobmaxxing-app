import { motion } from 'framer-motion';
import { cn } from './cn';

const variants = {
  primary: 'bg-accent text-white hover:bg-[#3f7de0]',
  secondary: 'border border-line bg-surface text-ink hover:bg-canvas',
  ghost: 'bg-transparent text-muted hover:bg-canvas hover:text-ink',
};

const sizes = {
  sm: 'gap-1.5 px-3 py-1.5 text-sm',
  md: 'gap-2 px-4 py-2 text-sm',
};

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
