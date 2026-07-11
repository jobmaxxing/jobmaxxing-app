import { cn } from './cn';

export default function Skeleton({ className }) {
  return <div className={cn('animate-pulse rounded-md bg-line/60', className)} />;
}
