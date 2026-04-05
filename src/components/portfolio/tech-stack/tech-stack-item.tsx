'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useIsClient } from '@/hooks/use-is-client'
import { TechStack } from '@/types/tech-stack'

interface TechStackItemProps extends TechStack {
  className?: string
}

export default function TechStackItem({
  key,
  title,
  href,
  icon,
  iconDark,
  className = '',
}: TechStackItemProps) {
  const { theme } = useTheme()
  const isClient = useIsClient()

  return (
    <TooltipProvider key={key}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex-center hover:scale-105 ${className} transition-transform duration-300`}
          >
            <Image
              src={theme === 'dark' && iconDark && isClient ? iconDark : icon}
              alt={title}
              width={36}
              height={36}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-sm'>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
