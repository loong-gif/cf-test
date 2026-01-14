// SEO utility library barrel export

// Metadata utilities
export {
  SITE_CONFIG,
  buildCanonicalUrl,
  generateLocationMetadata,
  generateStateMetadata,
} from './metadata'

// Structured data schema builders
export {
  buildWebsiteSchema,
  buildOrganizationSchema,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from './schemas'

// Re-export types for convenience
export type { Metadata } from 'next'
export type {
  WithContext,
  WebSite,
  Organization,
  BreadcrumbList,
} from 'schema-dts'
