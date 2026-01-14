'use client'

import { Coins, Warning, Plus, ChartBar } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { BusinessCredits, CreditUsageHistory } from '@/lib/mock-data/leadPricing'

interface LeadCreditsDisplayProps {
  credits: BusinessCredits
  usageHistory?: CreditUsageHistory[]
  onBuyMore?: () => void
}

export function LeadCreditsDisplay({
  credits,
  usageHistory,
  onBuyMore,
}: LeadCreditsDisplayProps) {
  const usagePercent = credits.totalPurchased > 0
    ? Math.round((credits.used / credits.totalPurchased) * 100)
    : 0
  const isLowCredits = credits.available < 5

  // Calculate this month and last month usage from history
  const thisMonthUsage = usageHistory?.[usageHistory.length - 1]?.used ?? 0
  const lastMonthUsage = usageHistory?.[usageHistory.length - 2]?.used ?? 0

  return (
    <Card variant="glass" padding="lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
            <Coins size={24} weight="fill" className="text-brand-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Lead Credits</h3>
            <p className="text-sm text-text-secondary">Your credit balance</p>
          </div>
        </div>
        {isLowCredits && (
          <Badge variant="warning" size="sm">
            Low Balance
          </Badge>
        )}
      </div>

      {/* Credit Balance */}
      <div className="bg-glass-bg rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-text-secondary">Available Credits</span>
          <span className="text-3xl font-bold text-text-primary">{credits.available}</span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-glass-bg-hover rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-brand-primary rounded-full transition-all duration-300"
            style={{ width: `${100 - usagePercent}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-text-muted">
          <span>{credits.used} used</span>
          <span>{credits.totalPurchased} total purchased</span>
        </div>
      </div>

      {/* Low Credit Warning */}
      {isLowCredits && (
        <div className="bg-warning/5 border border-warning/20 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <Warning size={20} weight="fill" className="text-warning-text flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-text-primary">Running low on credits</p>
              <p className="text-xs text-text-secondary mt-1">
                You have only {credits.available} credits left. Purchase more to continue receiving leads without interruption.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Usage Summary */}
      {usageHistory && usageHistory.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-glass-bg rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <ChartBar size={14} weight="fill" className="text-text-muted" />
              <span className="text-xs text-text-muted">This Month</span>
            </div>
            <p className="text-lg font-semibold text-text-primary">{thisMonthUsage} leads</p>
          </div>
          <div className="bg-glass-bg rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <ChartBar size={14} weight="light" className="text-text-muted" />
              <span className="text-xs text-text-muted">Last Month</span>
            </div>
            <p className="text-lg font-semibold text-text-primary">{lastMonthUsage} leads</p>
          </div>
        </div>
      )}

      {/* Buy More Button */}
      {onBuyMore && (
        <button
          type="button"
          onClick={onBuyMore}
          className="w-full py-3 px-4 bg-glass-bg hover:bg-glass-bg-hover border border-glass-border rounded-xl text-sm font-semibold text-text-primary transition-all flex items-center justify-center gap-2"
        >
          <Plus size={18} weight="bold" />
          Buy More Credits
        </button>
      )}
    </Card>
  )
}
