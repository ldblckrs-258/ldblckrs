import LinesPattern from '@/components/patterns/line-pattern'
import AboutSection from '@/components/portfolio/about'

export default function Home() {
  return (
    <div className='relative min-h-screen w-full py-2'>
      <AboutSection />
      <LinesPattern className='relative h-4' />
    </div>
  )
}
