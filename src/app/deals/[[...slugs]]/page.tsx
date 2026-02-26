import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getAllActiveCitySlugs,
  getAllTreatmentCityCombos,
  getBusinessCountForCitySlug,
  getCityBySlug,
  getDealCountForCitySlug,
  getDealCountForTreatmentAndCity,
  getMinPriceForCitySlug,
  getMinPriceForTreatmentAndCity,
  getOfferById,
  getOffersByCategoryAndCity,
  getOffersByCitySlug,
  listCategories,
  listCities,
} from '@/lib/supabase/offers'
import {
  generateCityDealsMetadata,
  generateTreatmentCityMetadata,
} from '@/lib/seo/metadata'
import type { TreatmentCategory } from '@/types'
import { DealsRedirect } from '@/components/features/deals/dealsRedirect'
import { CityDealsPage } from '@/components/features/deals/cityDealsPage'
import { TreatmentCityPage } from '@/components/features/deals/treatmentCityPage'
import { DealDetailPage } from '@/components/features/deals/dealDetailPage'

interface DealsPageProps {
  params: Promise<{ slugs?: string[] }>
}

// Determine the route type from slugs
type RouteType =
  | { type: 'redirect' }
  | { type: 'city'; citySlug: string; cityName: string }
  | { type: 'treatment-city'; treatmentSlug: TreatmentCategory; treatmentName: string; citySlug: string; cityName: string }
  | { type: 'deal'; dealId: string }
  | { type: 'not-found' }

async function resolveRoute(slugs?: string[]): Promise<RouteType> {
  // No slugs = redirect to detected city
  if (!slugs || slugs.length === 0) {
    return { type: 'redirect' }
  }

  // Single slug - could be city or deal ID
  if (slugs.length === 1) {
    const slug = slugs[0]

    // Check if it's a city
    const city = await getCityBySlug(slug)
    if (city) {
      return { type: 'city', citySlug: slug, cityName: city.name }
    }

    // Check if it's a deal ID (deal IDs start with "deal-")
    const deal = await getOfferById(slug)
    if (deal) {
      return { type: 'deal', dealId: slug }
    }

    // Not found
    return { type: 'not-found' }
  }

  // Two slugs - treatment/city combination
  if (slugs.length === 2) {
    const [first, second] = slugs

    // Check if first is a treatment category
    const categories = await listCategories()
    const category = categories.find((cat) => cat.slug === first)
    if (category) {
      // Check if second is a city
      const city = await getCityBySlug(second)
      if (city) {
        return {
          type: 'treatment-city',
          treatmentSlug: category.slug,
          treatmentName: category.name,
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
}

// Generate static params for all routes
export async function generateStaticParams() {
  const cities = await getAllActiveCitySlugs()
  const treatmentCityCombos = await getAllTreatmentCityCombos()
  const deals = await getOffersByCitySlug(cities[0] ?? '')

  const params: Array<{ slugs: string[] }> = [
    // Empty slugs for redirect page (handled client-side)
    // { slugs: [] }, // Optional catch-all handles this

    // City pages: /deals/houston
    ...cities.map((city) => ({ slugs: [city] })),

    // Treatment+city pages: /deals/botox/houston
    ...treatmentCityCombos.map((combo) => ({
      slugs: [combo.treatment, combo.city],
    })),

    // Deal detail pages: /deals/123
    ...deals.map((deal) => ({ slugs: [deal.id] })),
  ]

  return params
}

// Generate metadata dynamically based on route
export async function generateMetadata({
  params,
}: DealsPageProps): Promise<Metadata> {
  const { slugs } = await params
  const route = await resolveRoute(slugs)

  switch (route.type) {
    case 'city': {
      const dealCount = await getDealCountForCitySlug(route.citySlug)
      const businessCount = await getBusinessCountForCitySlug(route.citySlug)
      const minPrice = await getMinPriceForCitySlug(route.citySlug)
      return generateCityDealsMetadata(route.cityName, route.citySlug, {
        dealCount,
        businessCount,
        minPrice,
      })
    }

    case 'treatment-city': {
      const dealCount = await getDealCountForTreatmentAndCity(
        route.treatmentSlug,
        route.citySlug
      )
      const businessCount = await getBusinessCountForCitySlug(route.citySlug)
      const minPrice = await getMinPriceForTreatmentAndCity(
        route.treatmentSlug,
        route.citySlug
      )
      return generateTreatmentCityMetadata(
        route.treatmentName,
        route.treatmentSlug,
        route.cityName,
        route.citySlug,
        { dealCount, businessCount, minPrice }
      )
    }

    case 'deal': {
      const deal = await getOfferById(route.dealId)
      if (deal) {
        return {
          title: `${deal.anonymous.title} | CostFinders`,
          description: deal.anonymous.description,
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
  const { slugs } = await params
  const route = await resolveRoute(slugs)

  switch (route.type) {
    case 'redirect':
      const cities = await listCities()
      const defaultCity = cities[0]
      return (
        <DealsRedirect
          defaultCitySlug={defaultCity?.slug}
          defaultCityName={defaultCity?.name}
        />
      )

    case 'city':
      const cityDeals = await getOffersByCitySlug(route.citySlug)
      const cityCategories = await listCategories()
      const allCities = await getAllActiveCitySlugs()
      const otherCities = (await Promise.all(
        allCities
          .filter((slug) => slug !== route.citySlug)
          .slice(0, 4)
          .map(async (slug) => {
            const city = await getCityBySlug(slug)
            return city ? { slug, name: city.name } : null
          }),
      ))
        .filter(Boolean) as Array<{ slug: string; name: string }>
      const cityDealCount = await getDealCountForCitySlug(route.citySlug)
      const cityBusinessCount = await getBusinessCountForCitySlug(route.citySlug)
      return (
        <CityDealsPage
          citySlug={route.citySlug}
          cityName={route.cityName}
          deals={cityDeals}
          dealCount={cityDealCount}
          businessCount={cityBusinessCount}
          categories={cityCategories}
          otherCities={otherCities}
        />
      )

    case 'treatment-city':
      const treatmentDeals = await getOffersByCategoryAndCity(
        route.treatmentSlug,
        route.citySlug,
      )
      const treatmentCategories = (await listCategories()).filter(
        (category) => category.slug !== route.treatmentSlug,
      )
      const otherTreatmentCities = (await Promise.all(
        (await getAllActiveCitySlugs())
          .filter((slug) => slug !== route.citySlug)
          .slice(0, 4)
          .map(async (slug) => {
            const city = await getCityBySlug(slug)
            return city ? { slug, name: city.name } : null
          }),
      ))
        .filter(Boolean) as Array<{ slug: string; name: string }>
      const treatmentDealCount = treatmentDeals.length
      const treatmentBusinessCount = await getBusinessCountForCitySlug(
        route.citySlug,
      )
      return (
        <TreatmentCityPage
          treatmentSlug={route.treatmentSlug}
          treatmentName={route.treatmentName}
          citySlug={route.citySlug}
          cityName={route.cityName}
          deals={treatmentDeals}
          dealCount={treatmentDealCount}
          businessCount={treatmentBusinessCount}
          categories={treatmentCategories}
          otherCities={otherTreatmentCities}
        />
      )

    case 'deal':
      const deal = await getOfferById(route.dealId)
      if (!deal) {
        notFound()
      }
      return (
        <DealDetailPage
          deal={deal.anonymous}
          fullDeal={deal.deal}
          business={deal.business}
        />
      )

    case 'not-found':
    default:
      notFound()
  }
}
