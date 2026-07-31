import {
  Clock,
  Globe,
  Info,
  MapPin,
  Phone,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ListedPriceBadge,
  PricingSourcePanel,
} from '@/components/features/verifiedPrice'
import {
  getFreshnessLabel,
  getPublicBusiness,
  isMarketplaceFreshnessError,
} from '@/lib/data/marketplace'

export const dynamic = 'force-dynamic'

export default async function BusinessProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let profile: Awaited<ReturnType<typeof getPublicBusiness>>
  try {
    profile = await getPublicBusiness(Number(id))
  } catch (error) {
    if (isMarketplaceFreshnessError(error)) {
      return (
        <main className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <Link href="/businesses" className="text-sm text-[#92400e] underline">
            Back to businesses
          </Link>
          <p className="mt-8 rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-6 text-[#78350f]">
            This profile&apos;s price data will appear after the freshness data
            migration is applied.
          </p>
        </main>
      )
    }
    throw error
  }
  if (!profile) notFound()

  const { business, promotions, regularPrices } = profile
  const mapQuery = encodeURIComponent(
    [business.name, business.address, business.city].filter(Boolean).join(', '),
  )
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <Link
        href="/businesses"
        className="text-sm font-medium text-[#92400e] underline"
      >
        Back to businesses
      </Link>
      <section className="mt-4 rounded-2xl border border-[#d4c4b0] bg-[#f2ebe2] p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold text-[#451a03]">
                {business.name}
              </h1>
              <ListedPriceBadge />
            </div>
            <p className="mt-2 text-[#78350f]">
              {business.category ?? 'Medspa provider'}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#78350f]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={17} />
                {business.address ??
                  business.city ??
                  'Location available on request'}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star size={17} weight="fill" className="text-amber-800" />
                {business.score?.toFixed(1) ?? '—'} / 5{' '}
                {business.review_count
                  ? `(${business.review_count} reviews)`
                  : ''}
              </span>
            </div>
          </div>
          <Link
            href={`/business/claim/${business.business_id}`}
            className="inline-flex h-fit items-center justify-center rounded-xl border border-amber-800 px-4 py-2.5 text-sm font-semibold text-amber-800 transition-colors hover:bg-amber-800 hover:text-white"
          >
            Claim this business
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-3">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[#d4c4b0] bg-[#faf5ee] p-5 text-sm text-[#78350f] hover:border-amber-800/30"
        >
          <MapPin size={20} className="mb-2 text-amber-800" />
          <p className="font-semibold text-[#451a03]">Address & map</p>
          <p className="mt-1">
            {business.address ?? business.city ?? 'View location'}
          </p>
        </a>
        <div className="rounded-xl border border-[#d4c4b0] bg-[#faf5ee] p-5 text-sm text-[#78350f]">
          <Clock size={20} className="mb-2 text-amber-800" />
          <p className="font-semibold text-[#451a03]">Hours</p>
          <p className="mt-1">Confirm current hours with the provider.</p>
        </div>
        <div className="rounded-xl border border-[#d4c4b0] bg-[#faf5ee] p-5 text-sm text-[#78350f]">
          {business.website ? (
            <Globe size={20} className="mb-2 text-amber-800" />
          ) : (
            <Phone size={20} className="mb-2 text-amber-800" />
          )}
          <p className="font-semibold text-[#451a03]">Contact</p>
          {business.website ? (
            <a
              href={`/go/business/${business.business_id}?from=business_profile`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-amber-800 underline"
            >
              Visit provider website
            </a>
          ) : (
            <p className="mt-1">
              Contact details are available through the provider.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#451a03]">
              Current deals
            </h2>
            <p className="mt-1 text-sm text-[#78350f]">
              Prices, eligibility, and terms at a glance.
            </p>
          </div>
          <span className="text-sm text-[#78350f]">
            {promotions.length} active
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {promotions.length ? (
            promotions.map((offer) => (
              <a
                key={offer.id}
                href={`/go/offer/${offer.id}?from=business_profile`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-5 transition-colors hover:bg-[#faf5ee]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-[#451a03]">
                      {offer.service_name ?? 'Treatment offer'}
                    </p>
                    <p className="mt-1 text-sm text-[#78350f]">
                      {offer.unit_type ?? 'per treatment'}
                      {offer.is_new_customer_required
                        ? ' · New clients only'
                        : ''}
                      {offer.eligibility ? ` · ${offer.eligibility}` : ''}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-xl font-bold text-amber-800">
                      {offer.discountSignal === 'price' &&
                      offer.discount_price != null
                        ? `$${offer.discount_price.toLocaleString()}`
                        : offer.discountSignal === 'percent'
                          ? `Save ${offer.discount_percent}%`
                          : `$${offer.discount_amount} off`}
                    </p>
                    {offer.regular_price ? (
                      <p className="text-sm text-[#92400e]">
                        Regular ${offer.regular_price.toLocaleString()}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <ListedPriceBadge />
                  <span className="text-xs text-[#78350f]">
                    {getFreshnessLabel(
                      offer.last_verified_at ?? offer.created_at,
                    )}
                  </span>
                </div>
              </a>
            ))
          ) : (
            <p className="rounded-xl border border-dashed border-[#d4c4b0] p-5 text-sm text-[#78350f]">
              No current promotions are listed. Check regular prices or contact
              the provider.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[#451a03]">
          Regular prices
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {regularPrices.length ? (
            regularPrices.map((offer) => (
              <div
                key={offer.id}
                className="rounded-xl border border-[#d4c4b0] bg-[#faf5ee] p-4"
              >
                <p className="font-medium text-[#451a03]">
                  {offer.service_name ?? 'Treatment'}
                </p>
                <p className="mt-1 font-mono text-lg font-semibold text-amber-800">
                  ${offer.regular_price?.toLocaleString()}{' '}
                  <span className="text-sm font-normal text-[#92400e]">
                    / {offer.unit_type ?? 'treatment'}
                  </span>
                </p>
                <p className="mt-2 text-xs text-[#78350f]">
                  {getFreshnessLabel(offer.last_verified_at)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-[#78350f]">
              Regular prices are not yet available for this provider.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-[#d4c4b0] bg-[#faf5ee] p-6">
          <div className="flex items-center gap-2">
            <Star size={21} weight="fill" className="text-amber-800" />
            <h2 className="text-xl font-semibold text-[#451a03]">
              Ratings & reviews
            </h2>
          </div>
          <p className="mt-3 text-sm text-[#78350f]">
            {business.score?.toFixed(1) ?? '—'} / 5 from{' '}
            {business.review_count ?? 0} public reviews. Review excerpts are not
            stored by CostFinders yet; check the provider&apos;s public listings
            before booking.
          </p>
        </div>
        <div className="rounded-2xl border border-[#d4c4b0] bg-[#faf5ee] p-6">
          <div className="flex items-center gap-2">
            <Info size={21} weight="fill" className="text-emerald-700" />
            <h2 className="text-xl font-semibold text-[#451a03]">
              Provider details
            </h2>
          </div>
          <p className="mt-3 text-sm text-[#78350f]">
            Review the provider&apos;s website and public listings for current
            credentials, specialties, and booking requirements.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <PricingSourcePanel compact />
      </div>
    </main>
  )
}
