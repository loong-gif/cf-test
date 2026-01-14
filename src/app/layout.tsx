import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { AuthProvider } from '@/lib/context/authContext'
import { BusinessAuthProvider } from '@/lib/context/businessAuthContext'
import { ClaimsProvider } from '@/lib/context/claimsContext'
import { LocationProvider } from '@/lib/context/locationContext'
import { GlobalHeader } from '@/components/layout/globalHeader'
import { WebsiteSchema, OrganizationSchema } from '@/components/seo'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.costfinders.ai'
  ),
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
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <WebsiteSchema />
        <OrganizationSchema />
        <LocationProvider>
          <AuthProvider>
            <BusinessAuthProvider>
              <ClaimsProvider>
                <GlobalHeader />
                {children}
              </ClaimsProvider>
            </BusinessAuthProvider>
          </AuthProvider>
        </LocationProvider>
      </body>
    </html>
  )
}
