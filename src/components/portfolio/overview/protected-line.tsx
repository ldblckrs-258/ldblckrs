'use client'

import { useState } from 'react'

import { Markdown } from '@/components/markdown'
import { useIsClient } from '@/hooks/use-is-client'

export default function ProtectedLine({
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
  const isClient = useIsClient()
  return (
    <div className="flex items-center gap-4 font-mono text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
      {icon}
      {href ? (
        <a href={href} className='link-decoration'>
          {isClient ? content : '#'}
        </a>
      ) : markdown ? (
        <Markdown>{isClient ? content : '[Protected Content]'}</Markdown>
      ) : (
        <span>{isClient ? content : '[Protected Content]'}</span>
      )}
    </div>
  )
}
