'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Star, ChartBar } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LeadPricingCard } from '@/components/features/leadPricingCard'
import { LeadCreditsDisplay } from '@/components/features/leadCreditsDisplay'
import { CreditPurchaseModal } from '@/components/features/creditPurchaseModal'
import {
  getLeadPricing,
  getCreditPackages,
  getBusinessCredits,
  getCreditUsageHistory,
  type CreditPackage,
  type BusinessCredits,
} from '@/lib/mock-data/leadPricing'

// Mock: In real app, get tier from business context
const CURRENT_TIER = 'free' as const

export default function LeadPricingPage() {
  const [credits, setCredits] = useState<BusinessCredits>(getBusinessCredits())
  const [selectedPackage, setSelectedPackage] = useState<CreditPackage | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentPricing = getLeadPricing(CURRENT_TIER)
  const paidPricing = getLeadPricing('paid')
  const creditPackages = getCreditPackages()
  const usageHistory = getCreditUsageHistory()

  const handleBuyCredits = (pkg: CreditPackage) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  const handlePurchaseComplete = (newCredits: BusinessCredits) => {
    setCredits(newCredits)
  }

  // Get max usage for chart scaling
  const maxUsage = Math.max(...usageHistory.map((h) => h.used), 1)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/business/dashboard/leads"
          className="p-2 rounded-xl bg-glass-bg border border-glass-border hover:border-glass-border-hover transition-colors"
        >
          <ArrowLeft size={20} weight="bold" className="text-text-secondary" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Lead Pricing & Credits</h1>
          <p className="text-text-secondary mt-1">Manage your lead costs and credit balance</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Section 1: Your Pricing */}
        <LeadPricingCard
          tierPricing={currentPricing}
          currentTier={CURRENT_TIER}
          paidTierPricing={paidPricing}
          onUpgrade={() => {
            // Navigate to upgrade page
            window.location.href = '/business/dashboard/settings/upgrade'
          }}
        />

        {/* Section 2: Your Credits */}
        <LeadCreditsDisplay
          credits={credits}
          usageHistory={usageHistory}
          onBuyMore={() => {
            // Scroll to packages section
            document.getElementById('credit-packages')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      {/* Credit Usage Chart */}
      <Card variant="glass" padding="lg">
        <div className="flex items-center gap-2 mb-6">
          <ChartBar size={20} weight="fill" className="text-brand-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Credit Usage History</h2>
        </div>

        <div className="flex items-end gap-2 h-32">
          {usageHistory.map((month) => (
            <div key={month.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center justify-end h-24">
                <div
                  className="w-full max-w-[40px] bg-brand-primary/80 rounded-t-lg transition-all duration-300"
                  style={{
                    height: `${(month.used / maxUsage) * 100}%`,
                    minHeight: month.used > 0 ? '8px' : '0px',
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-text-primary">{month.used}</p>
                <p className="text-xs text-text-muted">{month.month}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Section 3: Buy Credits */}
      <div id="credit-packages">
        <h2 className="text-xl font-bold text-text-primary mb-4">Buy Credits</h2>
        <p className="text-text-secondary mb-6">
          Purchase credit packages for bulk savings on lead costs
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {creditPackages.map((pkg) => (
            <Card
              key={pkg.id}
              variant="glass"
              padding="none"
              className={`relative overflow-hidden ${pkg.isBestValue ? 'ring-2 ring-brand-primary' : ''}`}
            >
              {/* Best Value Badge */}
              {pkg.isBestValue && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star size={12} weight="fill" />
                    Best Value
                  </div>
                </div>
              )}

              <div className="p-5">
                {/* Credits Amount */}
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-text-primary">{pkg.credits}</p>
                  <p className="text-sm text-text-secondary">credits</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-text-primary">${pkg.price}</p>
                  <p className="text-sm text-text-muted">
                    ${pkg.pricePerLead.toFixed(2)}/lead
                  </p>
                </div>

                {/* Savings Badge */}
                {pkg.savingsPercent > 0 && (
                  <div className="flex justify-center mb-4">
                    <Badge variant="success" size="sm">
                      Save {pkg.savingsPercent}%
                    </Badge>
                  </div>
                )}

                {/* Purchase Button */}
                <Button
                  variant={pkg.isBestValue ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full"
                  onClick={() => handleBuyCredits(pkg)}
                >
                  Purchase
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      <CreditPurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
        currentCredits={credits}
        onPurchaseComplete={handlePurchaseComplete}
      />
    </div>
  )
}
