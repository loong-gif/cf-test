import type { MetadataRoute } from 'next'
import { getStates } from '@/lib/mock-data/states'
import { getAllCitiesWithState } from '@/lib/mock-data/cities'

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

  // Note: Neighborhood pages will be added in Phase 27 when neighborhood routes are implemented

  return [...staticPages, ...statePages, ...cityPages]
}
