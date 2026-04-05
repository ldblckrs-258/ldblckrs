import LinesPattern from '@/components/patterns/line-pattern'
import AboutSection from '@/components/portfolio/about'
import ExperienceSection from '@/components/portfolio/experience'
import Footer from '@/components/portfolio/footer'
import OverviewSection from '@/components/portfolio/overview'
import PanelSection from '@/components/portfolio/panel'
import ProjectSection from '@/components/portfolio/projects'
import TechStackSection from '@/components/portfolio/tech-stack'

export default function Home() {
  return (
    <div className='relative min-h-screen w-full py-2 overflow-x-hidden'>
      <PanelSection />
      <LinesPattern className='relative h-4' />
      <OverviewSection />
      <LinesPattern className='relative h-4' />
      <AboutSection />
      <LinesPattern className='relative h-4' />
      <TechStackSection />
      <LinesPattern className='relative h-4' />
      <ExperienceSection />
      <LinesPattern className='relative h-4' />
      <ProjectSection />
      <LinesPattern className='relative h-4' />
      <Footer />
    </div>
  )
}
