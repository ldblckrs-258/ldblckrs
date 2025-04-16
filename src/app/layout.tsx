import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto_Condensed } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ChatPopup } from '@/components/chat'
import { HeaderMotion } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import WebOverlay from '@/components/web-overlay'

import './globals.css'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lê Đức Bảo | Software Engineer & Web Developer',
  description:
    'Personal portfolio of Lê Đức Bảo, a Software Engineer specializing in Web development with a focus on Frontend development using Next.js, React, TypeScript, and other modern technologies.',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Lê Đức Bảo', url: 'https://ldblckrs.id.vn' }],
  creator: 'Lê Đức Bảo',
  publisher: 'Lê Đức Bảo',
  metadataBase: new URL('https://ldblckrs.id.vn'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': 'https://ldblckrs.id.vn',
    },
  },
  applicationName: 'Lê Đức Bảo Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  manifest: '/api/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ldblckrs.id.vn',
    title: 'Lê Đức Bảo | Software Engineer & Web Developer',
    description:
      'Personal portfolio of Lê Đức Bảo, a Software Engineer specializing in Web development with a focus on Frontend development.',
    siteName: 'Lê Đức Bảo Portfolio',
    images: [
      {
        url: '/screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Lê Đức Bảo Portfolio Screenshot',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lê Đức Bảo | Software Engineer & Web Developer',
    description:
      'Personal portfolio of Lê Đức Bảo, a Software Engineer specializing in Web development with a focus on Frontend development.',
    images: [
      {
        url: '/screenshot.png',
        alt: 'Lê Đức Bảo Portfolio Screenshot',
        width: 1200,
        height: 630,
      },
    ],
    creator: '@ldb._dev01d',
    site: '@ldb._dev01d',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${robotoCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <body className='antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <HeaderMotion />
          {children}
          <Toaster richColors closeButton expand />
          <ChatPopup />
        </ThemeProvider>
        <WebOverlay />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
