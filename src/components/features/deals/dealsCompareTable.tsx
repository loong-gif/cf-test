import { ArrowSquareOut, ShieldCheck, Star } from '@phosphor-icons/react'
import Link from 'next/link'
import type { AnonymousDeal } from '@/types/deal'

interface DealsCompareTableProps {
  deals: AnonymousDeal[]
}

function effectiveUnitPrice(deal: AnonymousDeal): string {
  if (deal.itemUnitPrice != null && deal.itemUnitPrice > 0) {
    return `$${deal.itemUnitPrice.toLocaleString()}`
  }
  return '—'
}

export function DealsCompareTable({ deals }: DealsCompareTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#d4c4b0] bg-[#faf5ee]">
      <table className="min-w-[860px] w-full text-left text-sm">
        <caption className="sr-only">
          Compare medspa deals by provider, price, savings, rating, and unit.
        </caption>
        <thead className="border-b border-[#d4c4b0] bg-[#f2ebe2] text-xs uppercase tracking-wide text-[#78350f]">
          <tr>
            <th className="px-4 py-3 font-semibold">Provider</th>
            <th className="px-4 py-3 font-semibold">Location</th>
            <th className="px-4 py-3 font-semibold">Final price</th>
            <th className="px-4 py-3 font-semibold">Savings</th>
            <th className="px-4 py-3 font-semibold">Rating</th>
            <th className="px-4 py-3 font-semibold">Unit</th>
            <th className="px-4 py-3 font-semibold">Avg. unit price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#d4c4b0]/70">
          {deals.map((deal) => (
            <tr key={deal.id} className="transition-colors hover:bg-[#f2ebe2]">
              <td className="px-4 py-4 font-medium text-[#451a03]">
                {deal.businessId ? (
                  <Link
                    href={`/businesses/${deal.businessId}`}
                    className="inline-flex items-center gap-1.5 hover:text-amber-800 hover:underline"
                  >
                    {deal.businessName ?? 'View provider'}
                    <ArrowSquareOut size={14} aria-hidden="true" />
                  </Link>
                ) : (
                  (deal.businessName ?? 'Provider details available on offer')
                )}
              </td>
              <td className="px-4 py-4 text-[#78350f]">
                {deal.locationArea || '—'}
              </td>
              <td className="px-4 py-4">
                <Link
                  href={`/deals/${deal.id}`}
                  className="font-mono font-bold text-amber-800 hover:underline"
                >
                  {deal.dealPrice > 0
                    ? `$${deal.dealPrice.toLocaleString()}`
                    : 'Ask provider'}
                </Link>
              </td>
              <td className="px-4 py-4 font-semibold text-emerald-700">
                {deal.discountPercent > 0
                  ? `Save ${deal.discountPercent}%`
                  : '—'}
              </td>
              <td className="px-4 py-4 text-[#78350f]">
                <span className="inline-flex items-center gap-1">
                  <Star size={15} weight="fill" className="text-amber-800" />
                  {deal.businessRating > 0
                    ? deal.businessRating.toFixed(1)
                    : '—'}
                </span>
              </td>
              <td className="px-4 py-4 text-[#78350f]">
                {deal.unit || 'per treatment'}
              </td>
              <td className="px-4 py-4 font-mono text-[#451a03]">
                {effectiveUnitPrice(deal)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-2 border-t border-[#d4c4b0] px-4 py-3 text-xs text-[#78350f]">
        <ShieldCheck size={16} weight="fill" className="text-emerald-700" />
        Prices are reviewed regularly. Confirm treatment eligibility and final
        terms with the provider.
      </div>
    </div>
  )
}
