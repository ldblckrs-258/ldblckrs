import { NextResponse } from 'next/server'
import { MetadataRoute } from 'next'

import { NAV_LINKS } from '@/static/config/navigation'
import ME from '@/static/data/me'

export function GET(): Response {
  const baseUrl = 'https://ldblckrs.id.vn'
  const lastUpdated = new Date()

  // Create sitemap entries for each section of the single-page application
  const sectionEntries = NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Add API endpoints to sitemap
  const apiEntries = [
    {
      url: `${baseUrl}/api/jsonld`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api/manifest.json`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Add social media profiles to sitemap
  const socialEntries = ME.socials.map((social) => ({
    url: social.url,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...sectionEntries,
    ...apiEntries,
    ...socialEntries,
  ]
  
  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
