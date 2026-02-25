import type { MetadataRoute } from 'next'
import {
  getAllActiveCitySlugs,
  getAllOfferIds,
  getAllTreatmentCityCombos,
  listBusinesses,
  listCategories,
  listCities,
} from '@/lib/supabase/offers'

const SITEMAP_CONFIG = {
  URL_LIMIT: 50000,
  STATIC_CONTENT_DATE: new Date('2026-01-14'),
} as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.costfinders.ai'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const statePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/all`,
      lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const cities = await listCities()
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/all/${city.slug}`,
    lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const businesses = await listBusinesses()
  const providerPages: MetadataRoute.Sitemap = businesses.map((business) => ({
    url: `${baseUrl}/all/${(business.city || 'city')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}/provider/${business.slug}`,
    lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  const categories = await listCategories()
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/treatments/${category.slug}`,
    lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const dealData = await getAllOfferIds()
  const dealPages: MetadataRoute.Sitemap = dealData.map(({ id, updatedAt }) => ({
    url: `${baseUrl}/deals/${id}`,
    lastModified: new Date(updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const citySlugs = await getAllActiveCitySlugs()
  const cityDealsPages: MetadataRoute.Sitemap = citySlugs.map((citySlug) => ({
    url: `${baseUrl}/deals/${citySlug}`,
    lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  const treatmentCityCombos = await getAllTreatmentCityCombos()
  const treatmentCityPages: MetadataRoute.Sitemap = treatmentCityCombos.map(
    ({ treatment, city }) => ({
      url: `${baseUrl}/deals/${treatment}/${city}`,
      lastModified: SITEMAP_CONFIG.STATIC_CONTENT_DATE,
      changeFrequency: 'daily',
      priority: 0.75,
    }),
  )

  const allUrls = [
    ...staticPages,
    ...statePages,
    ...cityPages,
    ...providerPages,
    ...categoryPages,
    ...dealPages,
    ...cityDealsPages,
    ...treatmentCityPages,
  ]

  return allUrls.slice(0, SITEMAP_CONFIG.URL_LIMIT)
}
