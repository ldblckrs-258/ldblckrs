'use client'

import Image from 'next/image'

import { VerifiedIcon } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

import ME from '@/static/data/me'

import ModeToggle from '../mode-toggle'
import LinesPattern from '../patterns/line-pattern'
import { NavScrollspy } from './nav-scroll-spy'

export function HeaderMotion() {
  const { scrollY } = useScroll()

  const _top = useTransform(scrollY, [100, 400], [-80, 0])
  const top = useSpring(_top, { bounce: 0 })

  return (
    <motion.header
      className='fixed inset-x-0 top-0 z-50 bg-background pt-2'
      style={{ translateY: top }}
    >
      <div className='relative border-y border-grid'>
        <LinesPattern
          className='-z-1 w-full h-full'
          color='oklch(0.929 0.013 255.508)' // slate-300
        />
        <div className='mx-auto md:max-w-4xl'>
          <div className='w-full flex items-center gap-3 border-x border-grid py-2 px-4 bg-background'>
            <div className='rounded-full flex-center border border-slate-200 dark:border-slate-700 p-0.5 bg-slate-100 dark:bg-slate-900'>
              <Image
                src={ME.avatar}
                alt='Avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-1 items-center font-heading sm:text-lg font-semibold font-mono gap-2'>
              {ME.fullName}
              <VerifiedIcon className='size-5 text-sky-600' />
            </div>
            <div className='flex-center gap-4'>
              <NavScrollspy className='max-sm:hidden' />
              <ModeToggle />
            </div>
            <div className='translate-x-px sm:hidden'></div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
