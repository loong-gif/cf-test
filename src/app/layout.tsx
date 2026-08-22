import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'
import { OrganizationSchema, WebsiteSchema } from '@/components/seo'
import { getSupabaseOrigin } from '@/lib/public-runtime-config'
import { publicSiteUrl, supabaseUrl } from '@/lib/supabase-config'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora-loaded',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope-loaded',
  display: 'swap',
})

const supabaseOrigin = getSupabaseOrigin(supabaseUrl)

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#e8ddd0',
}

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: {
    default: 'CostFinders - Compare MedSpa Prices',
    template: '%s | CostFinders',
  },
  description:
    'Find and compare the best medspa deals near you. Save 20-70% on Botox, fillers, facials, and laser treatments.',
  applicationName: 'CostFinders',
  generator: 'Next.js',
  keywords: [
    'medspa deals',
    'botox prices',
    'medspa comparison',
    'aesthetic treatments',
    'filler prices',
    'laser treatments',
    'medspa near me',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CostFinders',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CostFinders - Compare MedSpa Prices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@costfinders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
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
    <html lang="en">
      <head>
        {supabaseOrigin ? (
          <>
            <link rel="preconnect" href={supabaseOrigin} />
            <link rel="dns-prefetch" href={supabaseOrigin} />
          </>
        ) : null}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${sora.variable} ${manrope.variable} font-sans antialiased`}
      >
        <WebsiteSchema />
        <OrganizationSchema />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
