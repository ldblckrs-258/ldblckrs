import type { Metadata } from 'next'
import { JetBrains_Mono, Roboto_Condensed } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  title: 'Lê Đức Bảo | Personal Portfolio',
  description: 'Lê Đức Bảo | Personal Portfolio',
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
        </ThemeProvider>
        <WebOverlay />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
