import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { CollapsibleList } from '@/components/collapsible-list'
import PROJECTS from '@/static/data/projects'

import BaseSection from '../base-section'
import { ProjectItem } from './project-item'

export default function ProjectSection() {
  return (
    <BaseSection id='projects'>
      <div className='px-4 screen-line-after'>
        <h1 className='text-3xl font-semibold'>Projects</h1>
      </div>
      <AccordionPrimitive.Root
        type='single'
        defaultValue='personal-portfolio'
        collapsible
      >
        <CollapsibleList
          items={PROJECTS}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </AccordionPrimitive.Root>
    </BaseSection>
  )
}
