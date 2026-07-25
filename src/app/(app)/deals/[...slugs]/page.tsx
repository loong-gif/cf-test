import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { AllDealsPage } from '@/components/features/deals/allDealsPage'
import { CityDealsPage } from '@/components/features/deals/cityDealsPage'
import { DealDetailPage } from '@/components/features/deals/dealDetailPage'
import { TreatmentCityPage } from '@/components/features/deals/treatmentCityPage'
import { SupabaseSetupNotice } from '@/components/features/demo/supabaseSetupNotice'
import {
  getAllDeals,
  getBusinessCountForCity,
  getDealById,
  getDealCountForCitySlug,
  getDealCountForTreatmentAndCity,
  getDealsForCitySlug,
  getDealsForTreatmentAndCity,
  getDealWithBusinessId,
  getMinPriceForCitySlug,
  getMinPriceForTreatmentAndCity,
  getTreatmentLabel,
  getUnifiedCities,
} from '@/lib/data/unified'
import {
  generateCityDealsMetadata,
  generateTreatmentCityMetadata,
} from '@/lib/seo/metadata'
import {
  buildDealsListSchema,
  buildTreatmentServiceSchema,
} from '@/lib/seo/schemas'
import { isSupabaseConfigured } from '@/lib/supabase-config'
import type { TreatmentCategory } from '@/types/deal'

export const revalidate = 3600 // ISR: regenerate every hour

// Valid treatment slugs for route matching
const VALID_TREATMENTS: Set<string> = new Set([
  'botox',
  'fillers',
  'facials',
  'laser',
  'body',
  'skincare',
])

interface DealsPageProps {
  params: Promise<{ slugs?: string[] }>
}

// Determine the route type from slugs
type RouteType =
  | { type: 'all' }
  | { type: 'city'; citySlug: string; cityName: string }
  | {
      type: 'treatment-city'
      treatmentSlug: TreatmentCategory
      treatmentName: string
      citySlug: string
      cityName: string
    }
  | { type: 'deal'; dealId: string }
  | { type: 'not-found' }

const resolveRoute = cache(async function resolveRoute(
  slugs?: string[],
): Promise<RouteType> {
  // No slugs = show every active promotion without requiring a city selection.
  if (!slugs || slugs.length === 0) {
    return { type: 'all' }
  }

  // Single slug - could be city or deal ID
  if (slugs.length === 1) {
    const slug = slugs[0]

    // Check if it's a city
    const cities = await getUnifiedCities()
    const city = cities.find((c) => c.slug === slug)
    if (city) {
      return { type: 'city', citySlug: slug, cityName: city.name }
    }

    // Check if it's a deal ID (numeric IDs from Supabase)
    const deal = await getDealById(slug)
    if (deal) {
      return { type: 'deal', dealId: slug }
    }

    // Not found
    return { type: 'not-found' }
  }

  // Two slugs - treatment/city combination
  if (slugs.length === 2) {
    const [first, second] = slugs

    // Check if first is a valid treatment category slug
    if (VALID_TREATMENTS.has(first)) {
      const treatmentSlug = first as TreatmentCategory
      // Check if second is a city
      const cities = await getUnifiedCities()
      const city = cities.find((c) => c.slug === second)
      if (city) {
        return {
          type: 'treatment-city',
          treatmentSlug,
          treatmentName: getTreatmentLabel(treatmentSlug),
          citySlug: second,
          cityName: city.name,
        }
      }
    }

    // Not found
    return { type: 'not-found' }
  }

  // More than 2 slugs - not found
  return { type: 'not-found' }
})

// Generate metadata dynamically based on route
export async function generateMetadata({
  params,
}: DealsPageProps): Promise<Metadata> {
  if (!isSupabaseConfigured) {
    return {
      title: 'Connect Supabase | CostFinders local demo',
      description:
        'Configure Supabase credentials to browse live CostFinders deals.',
    }
  }

  const { slugs } = await params
  const route = await resolveRoute(slugs)

  switch (route.type) {
    case 'city': {
      // M3: Parallelize 3 independent metadata queries (was sequential)
      const cityName = route.citySlug.replace(/-/g, ' ')
      const [dealCount, businessCount, minPrice] = await Promise.all([
        getDealCountForCitySlug(route.citySlug),
        getBusinessCountForCity(cityName),
        getMinPriceForCitySlug(route.citySlug),
      ])
      return generateCityDealsMetadata(route.cityName, route.citySlug, {
        dealCount,
        businessCount,
        minPrice: minPrice ?? undefined,
      })
    }

    case 'treatment-city': {
      // M3: Parallelize 3 independent metadata queries (was sequential)
      const cityName = route.citySlug.replace(/-/g, ' ')
      const [dealCount, businessCount, minPrice] = await Promise.all([
        getDealCountForTreatmentAndCity(route.treatmentSlug, route.citySlug),
        getBusinessCountForCity(cityName),
        getMinPriceForTreatmentAndCity(route.treatmentSlug, route.citySlug),
      ])
      return generateTreatmentCityMetadata(
        route.treatmentName,
        route.treatmentSlug,
        route.cityName,
        route.citySlug,
        { dealCount, businessCount, minPrice: minPrice ?? undefined },
      )
    }

    case 'deal': {
      const deal = await getDealById(route.dealId)
      if (deal) {
        return {
          title: `${deal.title} | CostFinders`,
          description: deal.description,
        }
      }
      return {}
    }

    default:
      return {
        title: 'Find Medspa Deals | CostFinders',
        description:
          'Discover and compare medspa deals near you. Find the best prices on Botox, fillers, and aesthetic treatments.',
      }
  }
}

export default async function DealsRoutingPage({ params }: DealsPageProps) {
  if (!isSupabaseConfigured) {
    return <SupabaseSetupNotice />
  }

  const { slugs } = await params
  const route = await resolveRoute(slugs)

  switch (route.type) {
    case 'all': {
      const deals = await getAllDeals()
      return (
        <>
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data requires dangerouslySetInnerHTML
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildDealsListSchema(deals, 'All locations'),
              ).replace(/</g, '\\u003c'),
            }}
          />
          <AllDealsPage initialDeals={deals} />
        </>
      )
    }

    case 'city': {
      const [cityDeals, cityBusinessCount] = await Promise.all([
        getDealsForCitySlug(route.citySlug),
        getBusinessCountForCity(route.citySlug.replace(/-/g, ' ')),
      ])
      return (
        <>
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data requires dangerouslySetInnerHTML
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildDealsListSchema(
                  cityDeals.map((d) => ({
                    id: d.id,
                    title: d.title,
                    description: d.description,
                    dealPrice: d.dealPrice,
                    locationArea: route.cityName,
                  })),
                  route.cityName,
                ),
              ),
            }}
          />
          <CityDealsPage
            citySlug={route.citySlug}
            cityName={route.cityName}
            initialDeals={cityDeals}
            dealCount={cityDeals.length}
            businessCount={cityBusinessCount}
          />
        </>
      )
    }

    case 'treatment-city': {
      const [treatmentCityDeals, tcBusinessCount] = await Promise.all([
        getDealsForTreatmentAndCity(route.treatmentSlug, route.citySlug),
        getBusinessCountForCity(route.citySlug.replace(/-/g, ' ')),
      ])
      return (
        <>
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data requires dangerouslySetInnerHTML
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                buildTreatmentServiceSchema(
                  route.treatmentName,
                  route.cityName,
                  {
                    dealCount: treatmentCityDeals.length,
                    minPrice:
                      treatmentCityDeals.length > 0
                        ? Math.min(
                            ...treatmentCityDeals.map((d) => d.dealPrice),
                          )
                        : undefined,
                    maxPrice:
                      treatmentCityDeals.length > 0
                        ? Math.max(
                            ...treatmentCityDeals.map((d) => d.dealPrice),
                          )
                        : undefined,
                  },
                ),
              ),
            }}
          />
          <TreatmentCityPage
            treatmentSlug={route.treatmentSlug}
            treatmentName={route.treatmentName}
            citySlug={route.citySlug}
            cityName={route.cityName}
            initialDeals={treatmentCityDeals}
            dealCount={treatmentCityDeals.length}
            businessCount={tcBusinessCount}
          />
        </>
      )
    }

    case 'deal': {
      const dealWithBiz = await getDealWithBusinessId(route.dealId)
      if (!dealWithBiz) {
        notFound()
      }
      // dealWithBiz has all AnonymousDeal fields + businessId from the raw offer
      const { businessId, ...anonymousDeal } = dealWithBiz
      const fullDeal = { ...anonymousDeal, businessId }
      return <DealDetailPage deal={anonymousDeal} fullDeal={fullDeal} />
    }
    default:
      notFound()
  }
}
