import { Calculator } from '@phosphor-icons/react/dist/ssr'
import type { AnonymousDeal } from '@/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatMoney } from '@/lib/format'

interface PricingBreakdownProps {
  deal: AnonymousDeal
}

export function PricingBreakdown({ deal }: PricingBreakdownProps) {
  const hasPrice = deal.dealPrice > 0
  const savings = deal.originalPrice - deal.dealPrice
  const hasUnitRange = deal.minUnits || deal.maxUnits
  const showDiscount =
    hasPrice && deal.originalPrice > 0 && deal.originalPrice !== deal.dealPrice
  const exampleUnits = deal.minUnits ?? 20
  const exampleTotal = deal.dealPrice * exampleUnits
  const exampleSavings = savings * exampleUnits

  return (
    <Card variant="glass" padding="lg">
      {/* Main Pricing */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          {hasPrice ? (
            <>
              <span className="text-3xl sm:text-4xl font-bold text-brand-primary">
                ${formatMoney(deal.dealPrice)}
              </span>
              <span className="text-text-secondary">{deal.unit}</span>
            </>
          ) : (
            <span className="text-lg text-text-secondary">
              Contact for price
            </span>
          )}
        </div>

        {showDiscount && (
          <div className="flex items-center gap-3">
            <Badge variant="brand" size="md">
              {deal.discountPercent}% OFF
            </Badge>
            <span className="text-text-muted line-through">
              ${formatMoney(deal.originalPrice)}
            </span>
            <span className="text-success-text">
              Save ${formatMoney(savings)}
            </span>
          </div>
        )}
      </div>

      {/* Unit Range */}
      {hasUnitRange && (
        <div className="border-t border-glass-border pt-4 mt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
            <Calculator size={18} weight="regular" />
            <span>Unit Requirements</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {deal.minUnits && (
              <div className="bg-bg-tertiary rounded-lg p-3">
                <p className="text-xs text-text-muted">Minimum</p>
                <p className="text-lg font-semibold text-text-primary">
                  {deal.minUnits} units
                </p>
              </div>
            )}
            {deal.maxUnits && (
              <div className="bg-bg-tertiary rounded-lg p-3">
                <p className="text-xs text-text-muted">Maximum</p>
                <p className="text-lg font-semibold text-text-primary">
                  {deal.maxUnits} units
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Example Calculation */}
      {hasUnitRange && showDiscount && hasPrice && (
        <div className="border-t border-glass-border pt-4 mt-4 space-y-2">
          <p className="text-sm font-medium text-text-secondary">
            Example: {exampleUnits} units
          </p>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Regular price</span>
              <span className="text-text-muted line-through">
                ${formatMoney(deal.originalPrice * exampleUnits)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Deal price</span>
              <span className="text-text-primary font-medium">
                ${formatMoney(exampleTotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-success-text">You save</span>
              <span className="text-success-text font-medium">
                ${formatMoney(exampleSavings)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Validity */}
      <div className="border-t border-glass-border pt-4 mt-4">
        <p className="text-sm text-text-tertiary">
          Valid: {new Date(deal.validFrom).toLocaleDateString()} —{' '}
          {new Date(deal.validUntil).toLocaleDateString()}
        </p>
      </div>
    </Card>
  )
}
