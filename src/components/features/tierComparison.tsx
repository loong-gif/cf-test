'use client'

import { ShieldCheck, Clock, Headset } from '@phosphor-icons/react'
import type { BusinessTier } from '@/types'
import { PricingTierCard } from './pricingTierCard'

interface TierComparisonProps {
  currentTier?: BusinessTier
  onSelectTier?: (tier: 'free' | 'paid') => void
}

const sharedFeatures = [
  {
    icon: ShieldCheck,
    title: 'Secure Platform',
    description: 'Enterprise-grade security for your data',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Instant notifications for new leads',
  },
  {
    icon: Headset,
    title: 'Customer Support',
    description: 'Help when you need it',
  },
]

export function TierComparison({ currentTier, onSelectTier }: TierComparisonProps) {
  // Determine current tier for display (unclaimed treated as no current plan)
  const effectiveCurrentTier = currentTier === 'unclaimed' ? undefined : currentTier

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
          Choose Your Plan
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Select the plan that best fits your business needs. Upgrade anytime to unlock premium features.
        </p>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <PricingTierCard
          tier="free"
          isCurrentTier={effectiveCurrentTier === 'free'}
          onSelect={() => onSelectTier?.('free')}
          highlighted={false}
        />
        <PricingTierCard
          tier="paid"
          isCurrentTier={effectiveCurrentTier === 'paid'}
          onSelect={() => onSelectTier?.('paid')}
          highlighted={effectiveCurrentTier !== 'paid'}
        />
      </div>

      {/* Shared Features */}
      <div className="pt-8 border-t border-glass-border">
        <h3 className="text-lg font-semibold text-text-primary text-center mb-6">
          All plans include
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {sharedFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} weight="light" className="text-brand-primary" />
                </div>
                <h4 className="font-medium text-text-primary mb-1">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
