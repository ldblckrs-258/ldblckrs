import React from 'react'

import Image from 'next/image'

import { Experience } from '@/types/experiences'

import { PositionItem } from './position-item'

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className='screen-line-after space-y-4 py-4'>
      <div className='flex items-center space-x-2'>
        <span className='flex size-6 shrink-0 items-center justify-center'>
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={24}
              height={24}
              className='rounded-full'
            />
          ) : (
            <span className='flex size-2 rounded-full bg-slate-300 dark:bg-slate-600' />
          )}
        </span>

        <h3 className='font-heading text-lg font-semibold'>
          {experience.company}
        </h3>

        {experience?.current && (
          <span className='relative flex items-center justify-center'>
            <span className='absolute inline-flex size-3 animate-ping rounded-full bg-success-foreground opacity-50'></span>
            <span className='relative inline-flex size-2 rounded-full bg-success-foreground'></span>
          </span>
        )}
      </div>

      <div className='relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-border'>
        {experience.positions.map((position, index) => {
          return <PositionItem key={index} position={position} />
        })}
      </div>
    </div>
  )
}
