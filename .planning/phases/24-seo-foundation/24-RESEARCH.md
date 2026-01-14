# Phase 24: SEO Foundation - Research

**Researched:** 2026-01-12
**Domain:** Next.js App Router SEO, JSON-LD Structured Data, Location Pages
**Confidence:** HIGH

<research_summary>
## Summary

Researched the Next.js App Router metadata ecosystem for building SEO-optimized location-based pages. The standard approach uses Next.js's built-in metadata API (`generateMetadata`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`) combined with `next-seo` for JSON-LD structured data and `schema-dts` for TypeScript type safety.

Key findings for location-based SEO in 2025:
- Google's March 2025 core update rewards freshness and entity-level context — static "Locations" pages lose visibility
- JSON-LD structured data must match visible HTML content (Google's entity reconciliation double-checks parity)
- Dynamic canonical tags are critical to prevent city/state pages from cannibalizing each other
- LocalBusiness schema is essential for brick-and-mortar visibility in Google Maps and local search

**Primary recommendation:** Use Next.js native metadata API for meta tags + `next-seo` for JSON-LD components + `schema-dts` for type safety. Generate dynamic OG images per location. Implement sitemap index pattern for scalability.
</research_summary>

<standard_stack>
## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js Metadata API | Built-in (16.x) | generateMetadata, sitemap.ts, robots.ts | Native, SSR-optimized, streaming support |
| next-seo | 6.x | JSON-LD components (LocalBusinessJsonLd, OrganizationJsonLd) | 94.4 benchmark score, TypeScript, Schema.org compliant |
| schema-dts | 1.x | TypeScript types for JSON-LD | Google-maintained, full Schema.org vocabulary |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/og (ImageResponse) | Built-in | Dynamic OG image generation | Per-location branded images |
| next-sitemap | 4.x | Sitemap index + splitting | If >50k URLs or need sitemap index automation |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| next-seo | Manual JSON-LD scripts | next-seo handles escaping, type inference, edge cases |
| next-sitemap | Native sitemap.ts | Native lacks sitemap index auto-generation |
| schema-dts | No types | Lose IDE autocomplete and type safety for schemas |

**Installation:**
```bash
npm install next-seo schema-dts
# Optional for sitemap index automation:
npm install next-sitemap
```
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── [state]/
│   │   ├── page.tsx                    # State landing page
│   │   ├── opengraph-image.tsx         # Dynamic OG for state
│   │   └── [city]/
│   │       ├── page.tsx                # City landing page
│   │       ├── opengraph-image.tsx     # Dynamic OG for city
│   │       └── [neighborhood]/
│   │           └── page.tsx            # Neighborhood page
│   ├── sitemap.ts                      # Main sitemap (or index)
│   ├── robots.ts                       # Robots configuration
│   └── layout.tsx                      # Root metadata defaults
├── lib/
│   ├── seo/
│   │   ├── metadata.ts                 # Shared metadata generators
│   │   ├── schemas.ts                  # JSON-LD schema builders
│   │   └── sitemap.ts                  # Sitemap URL generators
│   └── data/
│       └── locations.ts                # Location data fetching
└── components/
    └── seo/
        ├── LocalBusinessSchema.tsx     # LocalBusiness JSON-LD wrapper
        └── BreadcrumbSchema.tsx        # BreadcrumbList JSON-LD
```

### Pattern 1: Dynamic Metadata with generateMetadata
**What:** Async function that generates page-specific metadata from route params
**When to use:** All dynamic location pages (state, city, neighborhood)
**Example:**
```typescript
// app/[state]/[city]/page.tsx
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ state: string; city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params
  const location = await getLocation(state, city)

  return {
    title: `MedSpa Deals in ${location.cityName}, ${location.stateAbbr} | CostFinders`,
    description: `Compare ${location.dealCount}+ medspa deals in ${location.cityName}. Save 20-70% on Botox, fillers, and more.`,
    openGraph: {
      title: `${location.cityName} MedSpa Deals`,
      description: `Find the best medspa prices in ${location.cityName}, ${location.stateAbbr}`,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://costfinders.com/${state}/${city}`,
    },
  }
}
```

### Pattern 2: LocalBusiness JSON-LD with next-seo
**What:** Structured data for individual provider/medspa pages
**When to use:** Provider detail pages, business listings
**Example:**
```typescript
// components/seo/LocalBusinessSchema.tsx
import { LocalBusinessJsonLd } from 'next-seo'

interface Props {
  business: {
    name: string
    address: Address
    phone: string
    geo: { lat: number; lng: number }
    images: string[]
    rating?: { value: number; count: number }
    hours: OpeningHours[]
  }
}

export function LocalBusinessSchema({ business }: Props) {
  return (
    <LocalBusinessJsonLd
      type="HealthAndBeautyBusiness"
      id={`https://costfinders.com/provider/${business.slug}`}
      name={business.name}
      description={`${business.name} offers medspa treatments in ${business.address.city}`}
      url={`https://costfinders.com/provider/${business.slug}`}
      telephone={business.phone}
      address={{
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: 'US',
      }}
      geo={{
        latitude: business.geo.lat,
        longitude: business.geo.lng,
      }}
      images={business.images}
      aggregateRating={business.rating ? {
        ratingValue: business.rating.value,
        reviewCount: business.rating.count,
      } : undefined}
      openingHours={business.hours}
    />
  )
}
```

### Pattern 3: Dynamic OG Image Generation
**What:** Generate location-specific social sharing images at build/request time
**When to use:** All location pages for better social CTR
**Example:**
```typescript
// app/[state]/[city]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { state: string; city: string } }) {
  const location = await getLocation(params.state, params.city)

  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
      }}>
        <div style={{ fontSize: 64, fontWeight: 'bold' }}>
          MedSpa Deals in {location.cityName}
        </div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.8 }}>
          {location.dealCount}+ deals • Save 20-70%
        </div>
      </div>
    ),
    { ...size }
  )
}
```

### Pattern 4: Programmatic Sitemap with Split Files
**What:** Generate sitemap dynamically, split for large sites
**When to use:** When you have many location pages (>1000)
**Example:**
```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default async function sitemap(): MetadataRoute.Sitemap {
  const states = await getStates()
  const cities = await getCities()

  const stateUrls = states.map(state => ({
    url: `https://costfinders.com/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cityUrls = cities.map(city => ({
    url: `https://costfinders.com/${city.stateSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...stateUrls, ...cityUrls]
}
```

### Anti-Patterns to Avoid
- **Static metadata on dynamic routes:** Use generateMetadata, not static exports
- **Duplicate titles/descriptions:** Each location page needs unique metadata
- **Missing canonical URLs:** Always set canonical to prevent self-cannibalization
- **JSON-LD not matching visible content:** Google cross-checks structured data against page content
- **Hardcoded base URLs:** Use environment variables or Next.js's metadataBase
</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| JSON-LD generation | Manual script tags with string templates | next-seo components | HTML entity escaping, type inference, Schema.org compliance |
| Schema types | Interface definitions from scratch | schema-dts | Google-maintained, full vocabulary, auto-complete |
| Sitemap generation | Custom XML builder | sitemap.ts or next-sitemap | Next.js handles caching, content-type, XML formatting |
| OG image generation | Server-side canvas/sharp | ImageResponse from next/og | Optimized, edge-compatible, JSX-based |
| Robots.txt | Static file | robots.ts | Dynamic rules based on environment |
| Meta tag management | Manual head tags | generateMetadata | Streaming, deduplication, inheritance |

**Key insight:** Next.js 13+ has comprehensive built-in SEO primitives. The metadata API handles streaming, caching, and deduplication automatically. next-seo fills the JSON-LD gap that Next.js doesn't cover natively. Fighting these patterns leads to edge cases (escaping issues, duplicate tags, cache invalidation problems).
</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: No Sitemap Index for Large Sites
**What goes wrong:** Sitemap exceeds 50k URLs or 50MB limit
**Why it happens:** generateSitemaps doesn't auto-create sitemap index
**How to avoid:** Use next-sitemap with sitemapSize config, or create manual sitemap index route
**Warning signs:** Google Search Console shows sitemap errors, incomplete indexing

### Pitfall 2: Location Page Cannibalization
**What goes wrong:** State and city pages compete for same keywords
**Why it happens:** Missing canonical tags, overlapping content
**How to avoid:** Dynamic canonical URLs per page, unique content per location level
**Warning signs:** Search Console shows "Duplicate without user-selected canonical"

### Pitfall 3: Structured Data / HTML Mismatch
**What goes wrong:** Rich results disappear or show warnings
**Why it happens:** JSON-LD data differs from visible page content
**How to avoid:** Generate JSON-LD from same data source as rendered content
**Warning signs:** Rich Results Test shows "values don't match page content"

### Pitfall 4: Static Metadata on Dynamic Routes
**What goes wrong:** All location pages have same title/description
**Why it happens:** Exporting static `metadata` object instead of `generateMetadata`
**How to avoid:** Always use async generateMetadata for [slug] routes
**Warning signs:** Identical meta tags across different URLs in view source

### Pitfall 5: Missing generateStaticParams for SSG
**What goes wrong:** Location pages render as SSR instead of static
**Why it happens:** Dynamic routes without generateStaticParams aren't pre-rendered
**How to avoid:** Export generateStaticParams returning all location slugs
**Warning signs:** Pages have `x-nextjs-cache: DYNAMIC` header, slower TTFB

### Pitfall 6: Hardcoded Domain in Metadata
**What goes wrong:** Wrong URLs in staging/preview environments
**Why it happens:** Hardcoding "https://costfinders.com" everywhere
**How to avoid:** Use Next.js metadataBase in root layout, reference relative URLs
**Warning signs:** Canonical URLs point to production from preview deployments
</common_pitfalls>

<code_examples>
## Code Examples

### Root Layout with metadataBase
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://costfinders.com'
  ),
  title: {
    default: 'CostFinders - Compare MedSpa Prices',
    template: '%s | CostFinders',
  },
  description: 'Find and compare the best medspa deals near you.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CostFinders',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### robots.ts with Environment Awareness
```typescript
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://costfinders.com'
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    rules: isProduction ? {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/dashboard/'],
    } : {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### generateStaticParams for Location Pages
```typescript
// app/[state]/[city]/page.tsx
export async function generateStaticParams() {
  const cities = await getAllCities()

  return cities.map(city => ({
    state: city.stateSlug,
    city: city.slug,
  }))
}
```

### BreadcrumbList Schema for Location Hierarchy
```typescript
// components/seo/BreadcrumbSchema.tsx
import type { BreadcrumbList, WithContext } from 'schema-dts'

interface Props {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: Props) {
  const schema: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Type-Safe LocalBusiness with schema-dts
```typescript
// lib/seo/schemas.ts
import type { LocalBusiness, WithContext } from 'schema-dts'

export function buildLocalBusinessSchema(business: BusinessData): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.lat,
      longitude: business.lng,
    },
    priceRange: business.priceRange,
  }
}
```
</code_examples>

<sota_updates>
## State of the Art (2025-2026)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| next-seo for all meta tags | Native generateMetadata + next-seo for JSON-LD only | Next.js 13 (2023) | Use built-in API for meta, next-seo only for structured data |
| Static sitemap.xml file | Dynamic sitemap.ts with caching | Next.js 13 (2023) | Auto-regeneration, better DX |
| Sharp/Canvas for OG images | ImageResponse from next/og | Next.js 13 (2023) | Edge-compatible, JSX-based, simpler |
| Manual JSON-LD strings | TypeScript types with schema-dts | 2024 | Type safety, autocomplete, fewer errors |
| Single locations page | Dynamic location page hierarchy | Google March 2025 update | Static pages lose visibility, entity context matters |

**New tools/patterns to consider:**
- **Streaming metadata:** generateMetadata can be async without blocking UI render
- **Sitemap images:** Next.js sitemap.ts supports image URLs per entry
- **AI Overview optimization:** JSON-LD helps with Google's generative search results

**Deprecated/outdated:**
- **next-seo NextSeo component for meta tags:** Use generateMetadata instead (Next.js 13+)
- **getStaticProps/getServerSideProps for metadata:** App Router uses generateMetadata
- **Manual Head component manipulation:** Replaced by metadata exports
</sota_updates>

<open_questions>
## Open Questions

1. **Sitemap Index Automation**
   - What we know: Native generateSitemaps doesn't create index automatically
   - What's unclear: Best pattern for projects with 10k+ location URLs
   - Recommendation: Start with native sitemap.ts, migrate to next-sitemap if >50k URLs

2. **ISR vs SSG for Location Pages**
   - What we know: Both work, ISR allows revalidation without rebuild
   - What's unclear: Optimal revalidation period for location deal data
   - Recommendation: Use SSG with generateStaticParams, add revalidate if data changes frequently
</open_questions>

<sources>
## Sources

### Primary (HIGH confidence)
- /vercel/next.js via Context7 - generateMetadata, sitemap.ts, opengraph-image.tsx patterns
- /garmeeh/next-seo via Context7 - LocalBusinessJsonLd, OrganizationJsonLd components
- /google/schema-dts via Context7 - WithContext type usage

### Secondary (MEDIUM confidence)
- [Next.js SEO Best Practices 2025](https://www.averagedevs.com/blog/nextjs-seo-best-practices) - Verified patterns against official docs
- [Location Pages SEO 2025](https://www.h10marketing.co.uk/are-location-pages-for-seo-relevant-in-2025) - Google algorithm update context
- [generateSitemaps Discussion](https://github.com/vercel/next.js/discussions/61025) - Sitemap index workarounds
- [next-sitemap npm](https://www.npmjs.com/package/next-sitemap) - Sitemap index automation

### Tertiary (LOW confidence - needs validation)
- None - all findings verified against official sources
</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Next.js App Router Metadata API
- Ecosystem: next-seo, schema-dts, next-sitemap
- Patterns: Location-based SEO, dynamic metadata, structured data
- Pitfalls: Cannibalization, sitemap limits, static/dynamic confusion

**Confidence breakdown:**
- Standard stack: HIGH - verified with Context7, official docs
- Architecture: HIGH - patterns from Next.js examples
- Pitfalls: HIGH - documented in GitHub discussions, verified in official docs
- Code examples: HIGH - from Context7/official sources

**Research date:** 2026-01-12
**Valid until:** 2026-02-12 (30 days - Next.js metadata API stable)
</metadata>

---

*Phase: 24-seo-foundation*
*Research completed: 2026-01-12*
*Ready for planning: yes*
