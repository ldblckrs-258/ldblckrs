import Link from 'next/link'

import CallToAction from '@/components/call-action-button'
import { Markdown } from '@/components/markdown'
import ME from '@/static/data/me'

import BaseSection from '../base-section'

export default function Footer() {
  return (
    <BaseSection id='about'>
      <div className='font-mono text-xs sm:text-sm flex items-center gap-3 flex-col text-center pt-6 pb-4 text-muted-foreground'>
        <Link
          href={ME.socials.find((s) => s.name === 'Github')?.url || ''}
          target='_blank'
          rel='noreferrer'
        >
          <CallToAction
            title='Source code'
            description='Check out my GitHub profile!'
          />
        </Link>
        <Markdown>
          Inspired by [chanhdai.com](https://www.chanhdai.com/).
        </Markdown>
      </div>
    </BaseSection>
  )
}
