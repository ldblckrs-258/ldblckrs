import LinesPattern from '@/components/patterns/line-pattern'
import AboutSection from '@/components/portfolio/about'
import OverviewSection from '@/components/portfolio/overview'
import PanelSection from '@/components/portfolio/panel'

export default function Home() {
  return (
    <div className='relative min-h-screen w-full py-2'>
      <PanelSection />
      <LinesPattern className='relative h-4' />
      <OverviewSection />
      <LinesPattern className='relative h-4' />
      <AboutSection />
    </div>
  )
}
