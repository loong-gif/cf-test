import Link from 'next/link'
import {
  getPublicDeals,
  isMarketplaceFreshnessError,
} from '@/lib/data/marketplace'
import { offerItemName } from '@/types/supabase'

export const dynamic = 'force-dynamic'

function DealsUnavailable() {
  return (
    <p className="mt-8 rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-6 text-[#78350f]">
      Recently verified deals will appear here after the freshness data
      migration is applied.
    </p>
  )
}

export default async function DealsPage() {
  let deals: Awaited<ReturnType<typeof getPublicDeals>>
  try {
    deals = await getPublicDeals()
  } catch (error) {
    if (isMarketplaceFreshnessError(error)) {
      return (
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#451a03]">Deals</h1>
          <DealsUnavailable />
        </main>
      )
    }
    throw error
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#451a03]">Deals</h1>
      <p className="mt-2 text-[#78350f]">
        Recently verified deals from local medspa providers.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((offer) => (
          <article
            key={offer.id}
            className="rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-5"
          >
            <p className="text-sm text-[#92400e]">
              {offer.master_business_info?.name ?? 'Local provider'} ·{' '}
              {offer.master_business_info?.city ?? 'Location unavailable'}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#451a03]">
              {offerItemName(offer) || 'Deal'}
            </h2>
            <p className="mt-3 text-2xl font-bold text-[#92400e]">
              ${offer.regular_price?.toLocaleString()}
              {offer.discountSignal === 'price' ? (
                <>
                  <span className="text-base font-normal"> → </span>$
                  {offer.discount_price?.toLocaleString()}
                </>
              ) : offer.discountSignal === 'percent' ? (
                <span className="text-base font-normal">
                  {' '}
                  · Save {offer.discount_percent}%
                </span>
              ) : (
                <span className="text-base font-normal">
                  {' '}
                  · ${offer.discount_amount} off
                </span>
              )}
            </p>
            {offer.offer_raw_text ? (
              <p className="mt-3 line-clamp-2 text-xs text-[#78350f]">
                {offer.offer_raw_text}
              </p>
            ) : null}
            <div className="mt-5 flex gap-3 text-sm">
              <Link
                className="text-[#92400e] underline"
                href={`/businesses/${offer.business_id}`}
              >
                Business
              </Link>
              <a
                className="text-[#92400e] underline"
                href={`/go/offer/${offer.id}?from=deals`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View offer source
              </a>
            </div>
          </article>
        ))}
      </div>

      {deals.length === 0 && (
        <p className="mt-8 rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-6 text-[#78350f]">
          No recently verified deals are available yet.
        </p>
      )}
    </main>
  )
}
