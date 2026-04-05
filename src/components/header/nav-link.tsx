import React from 'react'

import Link from 'next/link'

export function NavLink({
  href,
  ...props
}: React.ComponentProps<'a'> & {
  href: string
}) {
  const shouldUseNextLink = href.startsWith('/')

  if (shouldUseNextLink) {
    return <Link href={href} {...props} />
  }

  return <a href={href} {...props} />
}
