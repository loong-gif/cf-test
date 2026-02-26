'use client'

import { useAuth } from '@/lib/context/authContext'
import { ClaimCTA } from '@/components/features/claimCTA'
import { BusinessInfo } from '@/components/features/businessInfo'
import type { Business, Deal } from '@/types'

interface DealSidebarProps {
  deal: Deal
  business: Business | null
}

export function DealSidebar({ deal, business }: DealSidebarProps) {
  // NOTE: Login gating is disabled for now.
  // const { state } = useAuth()
  // const { isAuthenticated, user, isLoading } = state
  //
  // const isVerified =
  //   user?.verificationStatus === 'email_verified' ||
  //   user?.verificationStatus === 'phone_verified' ||
  //   user?.verificationStatus === 'fully_verified'
  //
  // if (isLoading) {
  //   return (
  //     <div className="rounded-2xl bg-glass-bg backdrop-blur-lg border border-glass-border shadow-glass p-6 animate-pulse">
  //       <div className="space-y-4">
  //         <div className="h-6 bg-bg-tertiary rounded w-3/4" />
  //         <div className="h-4 bg-bg-tertiary rounded w-1/2" />
  //         <div className="h-10 bg-bg-tertiary rounded w-full mt-4" />
  //       </div>
  //     </div>
  //   )
  // }
  //
  // if (isAuthenticated && isVerified && business) {
  //   return <BusinessInfo business={business} deal={deal} />
  // }

  if (business) {
    return <BusinessInfo business={business} deal={deal} />
  }

  return (
    <ClaimCTA
      dealId={deal.id}
      businessId={deal.businessId}
      dealTitle={deal.title}
    />
  )
}
