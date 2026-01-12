import type { Metadata } from 'next'

// Site-wide configuration
export const SITE_CONFIG = {
  name: 'CostFinders',
  url: 'https://www.costfinders.ai',
  description: 'Find and compare medspa deals, treatments, and pricing near you. Discover the best aesthetic treatment prices from verified providers.',
  social: {
    twitter: '@costfinders',
    instagram: '@costfinders',
  },
} as const

/**
 * Build a canonical URL from a path
 * @param path - Path relative to site root (e.g., '/california/irvine')
 * @returns Full canonical URL
 */
export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.url}${cleanPath}`
}

/**
 * Generate metadata for location pages (state, city, neighborhood)
 * @param city - City name (e.g., 'Irvine')
 * @param state - State name (e.g., 'California')
 * @param dealCount - Number of active deals in this location
 * @returns Next.js Metadata object
 */
export function generateLocationMetadata(
  city: string,
  state: string,
  dealCount: number
): Metadata {
  const title = `Medspa Deals in ${city}, ${state}`
  const description = `Discover ${dealCount} medspa deals and aesthetic treatment prices in ${city}, ${state}. Compare Botox, fillers, laser treatments, and more from verified providers.`
  const canonicalPath = `/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}

/**
 * Generate metadata for state-level pages
 * @param state - State name (e.g., 'California')
 * @param cityCount - Number of cities with deals
 * @param dealCount - Total deals in state
 * @returns Next.js Metadata object
 */
export function generateStateMetadata(
  state: string,
  cityCount: number,
  dealCount: number
): Metadata {
  const title = `Medspa Deals in ${state}`
  const description = `Browse ${dealCount} medspa deals across ${cityCount} cities in ${state}. Find the best prices on Botox, fillers, and aesthetic treatments.`
  const canonicalPath = `/${state.toLowerCase()}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}
