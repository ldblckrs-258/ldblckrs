import { Markdown } from '@/components/markdown'
import ME from '@/static/data/me'

import BaseSection from '../base-section'

export default function AboutSection() {
  return (
    <BaseSection id='about'>
      <div className='px-4 screen-line-after'>
        <h1 className='text-3xl font-semibold'>About Me</h1>
      </div>
      <div className='p-4 font-mono text-sm space-y-4 tracking-wider leading-[22px]'>
        <Markdown>{ME.about}</Markdown>
      </div>
    </BaseSection>
  )
}
