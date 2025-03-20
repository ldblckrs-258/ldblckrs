import * as AccordionPrimitive from '@radix-ui/react-accordion'

import EXPERIENCES from '@/static/data/experiences'

import BaseSection from '../base-section'
import { ExperienceItem } from './experience-item'

export default function ExperienceSection() {
  const defaultValue = EXPERIENCES.flatMap((exp) =>
    exp.positions.filter((pos) => pos.expanded).map((pos) => pos.id)
  )

  return (
    <BaseSection id='experience'>
      <div className='px-4 screen-line-after'>
        <h1 className='text-3xl font-semibold'>Experience</h1>
      </div>
      <div className='p-4 font-mono text-sm space-y-4 tracking-wider leading-[22px]'>
        <AccordionPrimitive.Root
          type='multiple'
          defaultValue={defaultValue}
          asChild
        >
          <div className='px-4 space-y-4'>
            {EXPERIENCES.map((experience, index) => {
              return (
                <ExperienceItem
                  key={index}
                  experience={experience}
                  lastItem={index === EXPERIENCES.length - 1}
                />
              )
            })}
          </div>
        </AccordionPrimitive.Root>
      </div>
    </BaseSection>
  )
}
