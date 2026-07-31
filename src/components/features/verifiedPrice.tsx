import { Info } from '@phosphor-icons/react/dist/ssr'
import type { ReactNode } from 'react'

interface ListedPriceBadgeProps {
  className?: string
  children?: ReactNode
}

export function ListedPriceBadge({
  className = '',
  children = 'Listed price',
}: ListedPriceBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-emerald-700/20 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ${className}`}
      title="Price data comes from provider submissions, partner feeds, or public listings. Confirm final pricing with the provider."
    >
      <Info size={14} weight="fill" aria-hidden="true" />
      {children}
    </span>
  )
}

interface PricingSourcePanelProps {
  compact?: boolean
  reportHref?: string
}

export function PricingSourcePanel({
  compact = false,
  reportHref,
}: PricingSourcePanelProps) {
  if (compact) {
    return (
      <div className="flex items-start gap-2 rounded-lg border border-emerald-700/15 bg-emerald-50/70 p-3 text-xs text-emerald-950">
        <Info
          size={17}
          weight="fill"
          className="mt-0.5 shrink-0 text-emerald-700"
        />
        <p>
          <span className="font-semibold">Listed price.</span> Data comes from
          provider submissions, partner feeds, or public listings. Confirm the
          final price and eligibility with the provider.
        </p>
      </div>
    )
  }

  return (
    <section className="rounded-2xl border border-emerald-800/15 bg-emerald-50/70 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
          <Info size={24} weight="fill" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-emerald-950">
            Understand the price source
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-emerald-900">
            We compile prices from provider submissions, partner feeds, and
            public listings. Source recency can vary, so confirm final pricing,
            eligibility, and fees with the provider before booking.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <ListedPriceBadge />
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-900">
              <Info size={15} weight="fill" aria-hidden="true" /> No hidden
              platform fees
            </span>
            {reportHref && (
              <a
                href={reportHref}
                className="text-xs font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
              >
                Report an issue with this price
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
