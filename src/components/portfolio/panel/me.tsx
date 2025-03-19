import Image from 'next/image'

import { VerifiedIcon } from 'lucide-react'

import FlipSentences from '@/components/flip-sentences'
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
        <div className='flex-1'></div>
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
