import { cn } from '@/lib/utils'

export default function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-foreground:var(--color-slate-950)]/5 dark:[--pattern-foreground:var(--color-white)]/10',
        className
      )}
    />
  )
}
