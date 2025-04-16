import { MetadataRoute } from 'next'

import ME from '@/static/data/me'

// This endpoint provides JSON-LD structured data for better SEO
// It helps search engines understand the content of the website
export async function GET(): Promise<Response> {
  // Create a Person schema for the portfolio owner
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: ME.fullName,
    givenName: ME.firstName,
    familyName: ME.lastName,
    gender: ME.gender,
    birthDate: ME.birthdate,
    jobTitle: ME.jobTitles.join(', '),
    email: ME.email,
    telephone: ME.phoneNumber,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ME.address,
    },
    image: `https://ldblckrs.id.vn${ME.avatar}`,
    url: 'https://ldblckrs.id.vn',
    sameAs: ME.socials.map((social) => social.url),
  }

  // Create a WebSite schema for the portfolio
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${ME.fullName} | Portfolio`,
    url: 'https://ldblckrs.id.vn',
    description: `Personal portfolio of ${ME.fullName}, a Software Engineer specializing in Web development with a focus on Frontend development.`,
    author: {
      '@type': 'Person',
      name: ME.fullName,
    },
    inLanguage: 'en-US',
  }

  // Return both schemas as a JSON-LD array
  return new Response(JSON.stringify([personSchema, websiteSchema]), {
    headers: {
      'Content-Type': 'application/ld+json',
    },
  })
}
