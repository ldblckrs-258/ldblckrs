'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useIsClient } from '@/hooks/use-is-client'
import ME from '@/static/data/me'

export default function SocialShortcut() {
  const { theme } = useTheme()
  const isClient = useIsClient()

  return (
    <div className='flex items-center justify-end gap-1 pt-0.5 pr-0.5'>
      {ME.socials.map((social, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-center p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600'
              >
                <Image
                  src={
                    theme === 'dark' && social?.logoDark && isClient
                      ? social.logoDark
                      : social.logo
                  }
                  alt={social.name}
                  width={20}
                  height={20}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {social.name}: {social.username}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}
