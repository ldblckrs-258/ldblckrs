import he from 'he'
import parsePhoneNumber from 'libphonenumber-js'
import {
  BriefcaseBusinessIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react'

import ME from '@/static/data/me'

import OverviewLine from './overview-line'
import ProtectedLine from './protected-line'

export default function OverviewSection() {
  const phoneNumberFormatted = parsePhoneNumber(
    he.decode(ME.phoneNumber)
  )?.formatInternational()

  return (
    <section className='mx-auto md:max-w-4xl border-x border-grid p-4 space-y-2 screen-line-before screen-line-after'>
      <OverviewLine
        icon={<BriefcaseBusinessIcon />}
        content={ME.work}
        markdown
      />
      <OverviewLine icon={<MapPinIcon />} content={ME.address} />
      <ProtectedLine
        icon={<PhoneIcon />}
        content={phoneNumberFormatted || ME.phoneNumber}
        href={`tel:${he.decode(ME.phoneNumber)}`}
      />
      <ProtectedLine
        icon={<MailIcon />}
        content={ME.email}
        href={`mailto:${he.decode(ME.email)}`}
      />
    </section>
  )
}
