import { buildOrganizationSchema } from '@/lib/seo'

/**
 * OrganizationSchema - Server Component for Organization JSON-LD structured data
 * Emits Schema.org Organization markup for search engine rich results
 *
 * Description optimized for Orange County keywords:
 * - "medspa prices", "Orange County", "Botox", "lip fillers"
 * - "Newport Beach", "Irvine" (high-volume local keywords)
 */
export function OrganizationSchema() {
  const schema = buildOrganizationSchema()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
