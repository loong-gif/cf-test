'use client'

import { AuthenticatedDashboardLayout } from '@/components/layout/authenticatedDashboardLayout'
import { DashboardSidebar } from '@/components/layout/dashboardSidebar'
import { useAuth } from '@/lib/context/authContext'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { state } = useAuth()

  return (
    <AuthenticatedDashboardLayout
      sidebar={<DashboardSidebar />}
      isLoading={state.isLoading}
      isAuthenticated={state.isAuthenticated}
      redirectPath="/"
    >
      {children}
    </AuthenticatedDashboardLayout>
  )
}
