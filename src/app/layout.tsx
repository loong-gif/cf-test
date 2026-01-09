import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { AuthProvider } from '@/lib/context/authContext'
import { ClaimsProvider } from '@/lib/context/claimsContext'
import { LocationProvider } from '@/lib/context/locationContext'
import { GlobalHeader } from '@/components/layout/globalHeader'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CostFinders',
  description: 'Find and compare medspa pricing in your area',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <LocationProvider>
          <AuthProvider>
            <ClaimsProvider>
              <GlobalHeader />
              {children}
            </ClaimsProvider>
          </AuthProvider>
        </LocationProvider>
      </body>
    </html>
  )
}
