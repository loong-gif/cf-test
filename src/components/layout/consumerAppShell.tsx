'use client'

import { usePathname } from 'next/navigation'
import { GlobalHeader } from '@/components/layout/globalHeader'
import { SiteFooter } from '@/components/layout/siteFooter'
import { AuthProvider } from '@/lib/context/authContext'
import { ClaimsProvider } from '@/lib/context/claimsContext'

export function ConsumerAppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showFooter = !pathname.startsWith('/dashboard')

  return (
    <AuthProvider>
      <ClaimsProvider>
        <GlobalHeader />
        {children}
        {showFooter ? <SiteFooter /> : null}
      </ClaimsProvider>
    </AuthProvider>
  )
}
