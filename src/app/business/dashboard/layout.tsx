'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useBusinessAuth } from '@/lib/context/businessAuthContext'
import { BusinessDashboardSidebar } from '@/components/layout/businessDashboardSidebar'

export default function BusinessDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { state } = useBusinessAuth()

  // Redirect to /business if not authenticated or no businessId linked
  useEffect(() => {
    if (!state.isLoading) {
      if (!state.isAuthenticated) {
        router.push('/business')
      } else if (!state.owner?.businessId) {
        // Authenticated but no business linked - redirect to claim flow
        router.push('/business')
      }
    }
  }, [state.isLoading, state.isAuthenticated, state.owner?.businessId, router])

  // Show loading state while checking auth
  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-8 w-8 text-brand-primary" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render dashboard until authenticated with linked business
  if (!state.isAuthenticated || !state.owner?.businessId) {
    return null
  }

  return (
    <div className="min-h-screen">
      <BusinessDashboardSidebar />
      {/* Main content with left padding for sidebar on desktop */}
      <main className="md:pl-16 pt-20 pb-20 md:pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-6">
          {children}
        </div>
      </main>
    </div>
  )
}
