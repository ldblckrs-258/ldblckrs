'use client'

import React, { JSX, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element
  value: string
  isActive?: boolean
  onClick: (value: string) => void
}) {
  return (
    <button
      className={cn(
        'relative flex size-8 items-center justify-center rounded-full transition-all [&_svg]:size-4 cursor-pointer',
        isActive
          ? 'text-slate-950 bg-slate-100 dark:text-slate-50 dark:bg-slate-800'
          : 'text-slate-400 hover:text-slate-950 dark:text-slate-500 dark:hover:text-slate-50'
      )}
      role='radio'
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId='theme-option'
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className='absolute inset-0 rounded-full border border-slate-200 dark:border-slate-700'
        />
      )}
    </button>
  )
}

const THEME_OPTIONS = [
  {
    icon: <SunIcon />,
    value: 'light',
  },
  {
    icon: <MonitorIcon />,
    value: 'system',
  },
  {
    icon: <MoonStarIcon />,
    value: 'dark',
  },
]

function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className='flex h-8 w-24' />
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='inline-flex items-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200 ring-inset dark:bg-slate-950 dark:ring-slate-700'
      role='radiogroup'
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  )
}

export default ModeToggle
