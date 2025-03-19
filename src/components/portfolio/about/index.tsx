import { Markdown } from '@/components/markdown'
import ME from '@/static/data/me'

export default function AboutSection() {
  return (
    <section
      className='mx-auto md:max-w-4xl border-x border-grid screen-line-before screen-line-after'
      id='about'
    >
      <div className='px-4 screen-line-after'>
        <h1 className='text-3xl font-semibold'>About</h1>
      </div>
      <div className='p-4 font-mono text-sm space-y-4 tracking-wider leading-[22px]'>
        <Markdown>{ME.about}</Markdown>
      </div>
    </section>
  )
}
