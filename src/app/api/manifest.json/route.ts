import { NextResponse } from 'next/server'
import { MetadataRoute } from 'next'

import ME from '@/static/data/me'

// This endpoint generates a Web App Manifest for PWA support
export function GET(): Response {
  const manifest: MetadataRoute.Manifest = {
    name: `${ME.fullName} | Software Engineer & Web Developer`,
    short_name: 'LDB Portfolio',
    description: `Personal portfolio of ${ME.fullName}, a Software Engineer specializing in Web development with a focus on Frontend development.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: ME.avatar,
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: ME.avatar,
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
    orientation: 'portrait',
    lang: 'en-US',
  }
  
  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  })
}
