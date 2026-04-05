import { NextResponse } from 'next/server'
import { MetadataRoute } from 'next'

export function GET(): Response {
  const robots: MetadataRoute.Robots = {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ldblckrs.id.vn/api/sitemap.xml',
  }
  
  return NextResponse.json(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
