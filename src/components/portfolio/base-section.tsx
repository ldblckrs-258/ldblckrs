import { cn } from '@/lib/utils'

export default function BaseSection({
  className,
  id,
  children,
}: {
  className?: string
  id?: string
  children: React.ReactNode
}) {
  return (
    <section
      className={cn(
        `mx-auto md:max-w-4xl border-x border-grid screen-line-before screen-line-after`,
        className
      )}
      id={id}
    >
      {children}
    </section>
  )
}
