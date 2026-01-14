import { buildWebsiteSchema } from '@/lib/seo'

/**
 * WebsiteSchema - Server Component for WebSite JSON-LD structured data
 * Emits Schema.org WebSite markup for search engine rich results
 */
export function WebsiteSchema() {
  const schema = buildWebsiteSchema()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
