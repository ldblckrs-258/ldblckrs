import MeInfo from './me'
import Thumbnail from './thumbnail'

export default function AboutSection() {
  return (
    <section className='mx-auto md:max-w-4xl border-x border-grid' id='about'>
      <Thumbnail />
      <MeInfo />
    </section>
  )
}
