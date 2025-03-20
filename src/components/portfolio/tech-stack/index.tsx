import TECH_STACK from '@/static/data/tech-stack'

import BaseSection from '../base-section'
import TechStackItem from './tech-stack-item'

export default function TechStackSection() {
  return (
    <BaseSection>
      <div className='px-4 screen-line-after'>
        <h1 className='text-3xl font-semibold'>Tech Stack</h1>
      </div>
      <div className='p-4 flex flex-wrap gap-5'>
        {TECH_STACK.map((techStack, index) => (
          <TechStackItem
            key={index.toString()}
            title={techStack.title}
            href={techStack.href}
            icon={techStack.icon}
            iconDark={techStack.iconDark}
          />
        ))}
      </div>
    </BaseSection>
  )
}
