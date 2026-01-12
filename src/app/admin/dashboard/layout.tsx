'use client'

import { AuthenticatedDashboardLayout } from '@/components/layout/authenticatedDashboardLayout'
import { AdminDashboardSidebar } from '@/components/layout/adminDashboardSidebar'
import { AdminAuthProvider, useAdminAuth } from '@/lib/context/adminAuthContext'

function AdminDashboardContent({ children }: { children: React.ReactNode }) {
  const { state } = useAdminAuth()

  return (
    <AuthenticatedDashboardLayout
      sidebar={<AdminDashboardSidebar />}
      isLoading={state.isLoading}
      isAuthenticated={state.isAuthenticated}
      redirectPath="/admin"
    >
      {children}
    </AuthenticatedDashboardLayout>
  )
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      <AdminDashboardContent>{children}</AdminDashboardContent>
    </AdminAuthProvider>
  )
}
