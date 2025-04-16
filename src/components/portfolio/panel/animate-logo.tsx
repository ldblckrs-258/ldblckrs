'use client'

import Image from 'next/image'

import { motion } from 'motion/react'

import { useIsClient } from '@/hooks/use-is-client'

export default function AnimateLogo() {
  const isClient = useIsClient()

  if (!isClient) {
    return (
      <Image
        src='/stroke.svg'
        fill
        alt='solid-logo'
        className='dark:filter-[invert(1)]'
      />
    )
  }
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 500 500'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
    >
      <motion.path
        d='M194 370.877C154.613 418.935 95.0016 389.157 95 334.416C94.998 266.826 161.982 266.816 161.982 266.816C161.982 266.816 104.483 199.974 161.967 129.811C255.999 15.0387 470.102 138.395 416.517 300.62C362.931 462.844 168.682 388.47 228.966 266.816C269.155 185.713 362.185 233.03 336.138 280.34C300.952 344.249 168.681 266.816 249.06 178.954'
        stroke='currentColor'
        strokeWidth='20'
        strokeLinecap='round'
        strokeLinejoin='round'
        initial={{ strokeDasharray: 1800, strokeDashoffset: 1800 }}
        animate={{ strokeDashoffset: [1800, 0, 0, 1800] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0,
          ease: 'easeInOut',
        }}
      />
    </svg>
  )
}
