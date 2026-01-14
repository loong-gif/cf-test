import type {
  WithContext,
  WebSite,
  Organization,
  BreadcrumbList,
  ListItem,
} from 'schema-dts'

import { SITE_CONFIG } from './metadata'

/**
 * Build WebSite structured data schema
 * @returns JSON-LD WebSite object for the main site
 */
export function buildWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/deals?q={search_term_string}`,
      },
      // @ts-expect-error - query-input is valid Schema.org property
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Build Organization structured data schema
 * @returns JSON-LD Organization object for CostFinders
 */
export function buildOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      `https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }
}

/**
 * Build BreadcrumbList structured data schema
 * @param items - Array of breadcrumb items with name and url
 * @returns JSON-LD BreadcrumbList object
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  const itemListElement: ListItem[] = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

/**
 * Build LocalBusiness structured data for a medspa provider
 * @param provider - Provider details
 * @returns JSON-LD LocalBusiness object
 */
export function buildLocalBusinessSchema(provider: {
  name: string
  description?: string
  address: {
    streetAddress: string
    city: string
    state: string
    postalCode: string
  }
  telephone?: string
  url?: string
  priceRange?: string
  rating?: {
    value: number
    count: number
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: provider.name,
    description: provider.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: provider.address.streetAddress,
      addressLocality: provider.address.city,
      addressRegion: provider.address.state,
      postalCode: provider.address.postalCode,
      addressCountry: 'US',
    },
    telephone: provider.telephone,
    url: provider.url,
    priceRange: provider.priceRange || '$$',
    ...(provider.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: provider.rating.value,
        reviewCount: provider.rating.count,
      },
    }),
  }
}
