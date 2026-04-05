import { ArrowRightIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface CallToActionProps {
  className?: string
  title: string
  description: string
}

export default function CallToAction({
  className,
  title,
  description,
}: CallToActionProps) {
  return (
    <button
      type='button'
      className={cn(
        'group relative flex cursor-pointer flex-row items-center p-1 pr-3 text-sm gap-2 rounded-full border border-slate-400/15 hover:border-slate-400/30 shadow-2xs hover:shadow-2xs overflow-hidden focus-visible:outline-hidden focus-visible:ring-slate-600 focus-visible:ring-2 focus-visible:rounded-full transition duration-100 bg-slate-400/5 hover:bg-slate-400/10',
        className
      )}
    >
      <div className='inline-flex items-center bg-brand dark:text-slate-300 text-slate-600 border border-slate-400/20 px-3 rounded-full text-xs sm:text-sm py-1 bg-slate-400/10'>
        {title}
      </div>
      <span className='dark:text-slate-400 text-slate-500 text-xs sm:text-sm'>
        {description}
      </span>
      <ArrowRightIcon className='dark:text-slate-400 text-slate-500 size-5 group-hover:translate-x-1 transition-transform duration-100' />
      <div className='absolute inset-0 -z-10 bg-linear-to-br opacity-70 group-hover:opacity-100 transition-opacity overflow-hidden rounded-full from-slate-100/30 to-slate-300/30 backdrop-blur-md' />
    </button>
  )
}
