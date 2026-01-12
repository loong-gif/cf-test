'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { AuthenticatedDashboardLayout } from '@/components/layout/authenticatedDashboardLayout'
import { BusinessDashboardSidebar } from '@/components/layout/businessDashboardSidebar'
import { useBusinessAuth } from '@/lib/context/businessAuthContext'

export default function BusinessDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { state } = useBusinessAuth()

  // Business-specific: redirect if no businessId linked
  useEffect(() => {
    if (!state.isLoading && state.isAuthenticated && !state.owner?.businessId) {
      router.push('/business')
    }
  }, [state.isLoading, state.isAuthenticated, state.owner?.businessId, router])

  // Don't render if authenticated but no business linked
  const effectivelyAuthenticated = state.isAuthenticated && !!state.owner?.businessId

  return (
    <AuthenticatedDashboardLayout
      sidebar={<BusinessDashboardSidebar />}
      isLoading={state.isLoading}
      isAuthenticated={effectivelyAuthenticated}
      redirectPath="/business"
    >
      {children}
    </AuthenticatedDashboardLayout>
  )
}
