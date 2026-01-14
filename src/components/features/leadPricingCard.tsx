'use client'

import { Users, CurrencyDollar, ArrowUp } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { TierPricing, BusinessTier } from '@/lib/mock-data/leadPricing'
import { calculateTierSavings } from '@/lib/mock-data/leadPricing'

interface LeadPricingCardProps {
  tierPricing: TierPricing
  currentTier: BusinessTier
  paidTierPricing?: TierPricing
  onUpgrade?: () => void
}

export function LeadPricingCard({
  tierPricing,
  currentTier,
  paidTierPricing,
  onUpgrade,
}: LeadPricingCardProps) {
  const isOnFreeTier = currentTier === 'free'
  const savings = calculateTierSavings()

  return (
    <Card variant="glass" padding="lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
            <CurrencyDollar size={24} weight="fill" className="text-brand-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Your Lead Pricing</h3>
            <p className="text-sm text-text-secondary">
              {isOnFreeTier ? 'Free Tier' : 'Professional Tier'}
            </p>
          </div>
        </div>
        {!isOnFreeTier && (
          <Badge variant="success" size="sm">
            Best Rate
          </Badge>
        )}
      </div>

      {/* Current Pricing */}
      <div className="bg-glass-bg rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users size={20} weight="fill" className="text-text-secondary" />
            <span className="text-sm text-text-secondary">Per lead cost</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-text-primary">
              ${tierPricing.pricePerLead.toFixed(2)}
            </span>
            <span className="text-sm text-text-secondary">/lead</span>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-2">{tierPricing.description}</p>
      </div>

      {/* Savings Comparison (only for free tier) */}
      {isOnFreeTier && paidTierPricing && (
        <>
          <div className="border-t border-glass-border my-4" />

          <div className="bg-success/5 border border-success/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <ArrowUp size={20} weight="bold" className="text-success-text" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary mb-1">
                  Save {savings.percent}% with Professional
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  Upgrade to pay only ${paidTierPricing.pricePerLead.toFixed(2)} per lead instead of ${tierPricing.pricePerLead.toFixed(2)}
                </p>

                {/* Savings Comparison */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-glass-bg rounded-lg p-2 text-center">
                    <p className="text-xs text-text-muted">Free Tier</p>
                    <p className="text-sm font-semibold text-text-primary">
                      ${tierPricing.pricePerLead.toFixed(2)}/lead
                    </p>
                  </div>
                  <div className="bg-success/10 rounded-lg p-2 text-center">
                    <p className="text-xs text-success-text">Professional</p>
                    <p className="text-sm font-semibold text-success-text">
                      ${paidTierPricing.pricePerLead.toFixed(2)}/lead
                    </p>
                  </div>
                </div>

                {onUpgrade && (
                  <button
                    type="button"
                    onClick={onUpgrade}
                    className="w-full py-2.5 px-4 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Upgrade to Save {savings.percent}%
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Professional tier message */}
      {!isOnFreeTier && (
        <div className="text-center">
          <p className="text-sm text-text-secondary">
            You&apos;re enjoying the lowest per-lead rate available.
          </p>
        </div>
      )}
    </Card>
  )
}
