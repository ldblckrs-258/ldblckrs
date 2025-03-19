import Image from 'next/image'

import { Navigation } from '@/components/header/navigation'
import ModeToggle from '@/components/mode-toggle'
import GridPattern from '@/components/patterns/grid-pattern'
import ME from '@/static/data/me'

import SocialShortcut from './socialShortcut'

export default function Thumbnail() {
  return (
    <div className='relate w-full h-[200px] flex-center flex-col screen-line-before screen-line-after'>
      <GridPattern className='absolute -z-1 bg-[size:24px_24px] sm:bg-[size:33px_33px] [mask-image:radial-gradient(400px_circle_at_top,white,transparent)] sm:[mask-image:radial-gradient(550px_circle_at_top,white,transparent)]' />
      <div className='relative size-[80px] lg:size[100px]'>
        <Image
          src='/stroke.svg'
          fill
          alt='solid-logo'
          className='dark:filter-[invert(1)]'
        />
      </div>

      <h1 className='font-mono font-semibold text-2xl lg:text-3xl'>
        {ME.username}
      </h1>
      <div className='absolute top-[1px] right-0 sm:bg-background flex-center gap-2 sm:pl-2'>
        <Navigation className='max-sm:hidden' />
        <ModeToggle />
      </div>
      <div className='absolute right-0 bottom-0'>
        <SocialShortcut />
      </div>
    </div>
  )
}
