import type { MetadataRoute } from 'next'
import { getStates } from '@/lib/mock-data/states'
import { getAllCitiesWithState } from '@/lib/mock-data/cities'
import { getAllNeighborhoodsWithCityAndState } from '@/lib/mock-data/neighborhoods'
import { getAllProvidersWithCityAndState } from '@/lib/mock-data/providers'
import { getAllCategorySlugs } from '@/lib/mock-data/categories'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.costfinders.ai'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Dynamic state pages from supported states
  const states = getStates()
  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Dynamic city pages
  const citiesWithState = getAllCitiesWithState()
  const cityPages: MetadataRoute.Sitemap = citiesWithState.map(
    ({ stateSlug, citySlug }) => ({
      url: `${baseUrl}/${stateSlug}/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  )

  // Dynamic neighborhood pages
  const neighborhoodsWithContext = getAllNeighborhoodsWithCityAndState()
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoodsWithContext.map(
    ({ stateSlug, citySlug, neighborhoodSlug }) => ({
      url: `${baseUrl}/${stateSlug}/${citySlug}/${neighborhoodSlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  )

  // Dynamic provider pages
  const providersWithContext = getAllProvidersWithCityAndState()
  const providerPages: MetadataRoute.Sitemap = providersWithContext.map(
    ({ business, stateSlug, citySlug }) => ({
      url: `${baseUrl}/${stateSlug}/${citySlug}/provider/${business.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    })
  )

  // Dynamic category/treatment pages
  const categorySlugs = getAllCategorySlugs()
  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...statePages,
    ...cityPages,
    ...neighborhoodPages,
    ...providerPages,
    ...categoryPages,
  ]
}
