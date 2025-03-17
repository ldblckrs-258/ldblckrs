import Image from 'next/image'

import { VerifiedIcon } from 'lucide-react'

import FlipSentences from '@/components/flip-sentences'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import ME from '@/static/data/me'

export default function MeInfo() {
  return (
    <div className='w-full screen-line-after flex'>
      <div className='h-full border-r border-grid'>
        <div className='flex-center p-1 border border-border rounded-full'>
          <Image
            src={ME.avatar}
            alt={ME.username}
            width={120}
            height={120}
            className='rounded-full'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex-1'>
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
                        src={social.logo}
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
        </div>
        <div className='border-t border-grid w-full flex items-center gap-2 px-4 py-1'>
          <span className='text-3xl font-semibold tracking-wider'>
            {ME.fullName}
          </span>
          <VerifiedIcon className='size-6 text-sky-600' />
        </div>
        <div className='border-t border-grid w-full flex items-center gap-2 px-4 py-1'>
          <FlipSentences sentences={ME.jobTitles} />
        </div>
      </div>
    </div>
  )
}
