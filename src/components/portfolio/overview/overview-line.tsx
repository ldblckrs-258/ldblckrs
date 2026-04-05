import { Markdown } from '@/components/markdown'

export default function OverviewLine({
  icon,
  content,
  markdown,
  href,
}: {
  icon: React.ReactNode
  content: string
  href?: string
  markdown?: boolean
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
      {icon}
      {href ? (
        <a href={href} className='link-decoration'>
          {content}
        </a>
      ) : markdown ? (
        <Markdown>{content}</Markdown>
      ) : (
        <span>{content}</span>
      )}
    </div>
  )
}
