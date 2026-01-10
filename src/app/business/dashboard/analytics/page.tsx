'use client'

import { useBusinessAuth } from '@/lib/context/businessAuthContext'
import { AnalyticsDashboard } from '@/components/features/analytics/analyticsDashboard'

export default function AnalyticsPage() {
  const { state } = useBusinessAuth()
  const businessId = state.owner?.businessId

  if (!businessId) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No business linked to your account.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Analytics</h1>
        <p className="text-text-secondary mt-1">
          Track your deal performance and customer engagement
        </p>
      </div>

      {/* Dashboard */}
      <AnalyticsDashboard />
    </div>
  )
}
