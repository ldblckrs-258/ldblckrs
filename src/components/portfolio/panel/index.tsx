import MeInfo from './me'
import Thumbnail from './thumbnail'

export default function PanelSection() {
  return (
    <section className='mx-auto md:max-w-4xl border-x border-grid'>
      <Thumbnail />
      <MeInfo />
    </section>
  )
}
