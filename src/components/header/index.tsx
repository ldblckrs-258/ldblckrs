'use client'

import { UserIcon, VerifiedIcon } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

import ModeToggle from '../mode-toggle'
import Pattern from '../pattern'
import { Navigation } from './navigation'

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
        <Pattern className='absolute -z-1 w-full h-full' />
        <div className='mx-auto md:max-w-5xl'>
          <div className='flex items-center gap-3 border-x border-grid py-2 px-4 bg-background'>
            <div className='rounded-full flex-center border border-slate-200 dark:border-slate-700 p-1.5 bg-slate-100 dark:bg-slate-900'>
              <UserIcon className='text-slate-500' size={24} />
            </div>

            <div className='flex flex-1 items-center font-heading text-lg font-semibold font-mono gap-2'>
              Lê Đức Bảo
              <VerifiedIcon className='size-5 text-sky-600' />
            </div>
            <div className='flex-center gap-4'>
              <Navigation />
              <ModeToggle />
            </div>
            <div className='translate-x-px sm:hidden'></div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
