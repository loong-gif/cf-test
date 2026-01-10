'use client'

import { useBusinessAuth } from '@/lib/context/businessAuthContext'
import { BusinessProfileForm } from '@/components/features/businessProfileForm'

export default function BusinessProfilePage() {
  const { state } = useBusinessAuth()
  const businessId = state.owner?.businessId

  if (!businessId) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No business linked to this account.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Business Profile</h1>
        <p className="text-text-secondary mt-1">
          Update your business information visible to customers
        </p>
      </div>

      <BusinessProfileForm businessId={businessId} />
    </div>
  )
}
