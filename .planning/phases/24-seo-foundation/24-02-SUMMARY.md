---
phase: 24-seo-foundation
plan: 02
subsystem: seo
tags: [sitemap, metadata, schema-dts, json-ld, seo]

# Dependency graph
requires:
  - phase: 24-01
    provides: SEO dependencies (next-seo, schema-dts), root metadata
provides:
  - Programmatic sitemap with static + location pages
  - SEO utility library (lib/seo/) with metadata helpers
  - JSON-LD schema builders (WebSite, Organization, Breadcrumb, LocalBusiness)
affects: [24-03-structured-data, state-pages, city-pages, provider-pages]

# Tech tracking
tech-stack:
  added: []
  patterns: [sitemap.ts with slugify helper, schema-dts typed JSON-LD builders]

key-files:
  created: [src/app/sitemap.ts, src/lib/seo/metadata.ts, src/lib/seo/schemas.ts, src/lib/seo/index.ts]
  modified: []

key-decisions:
  - "Used Orange County cities (11 cities) for initial SEO location coverage"
  - "Sitemap includes /california state page + 11 city pages for future routes"
  - "Schema builders use WithContext<T> for type-safe JSON-LD output"

patterns-established:
  - "sitemap.ts: Inline slugify helper for URL-safe city names"
  - "SITE_CONFIG: Centralized site metadata (name, url, description, social)"
  - "generateLocationMetadata: Reusable metadata factory for location pages"
  - "buildBreadcrumbSchema: Position-aware breadcrumb builder"

issues-created: []

# Metrics
duration: 6min
completed: 2026-01-12
---

# Phase 24-02: Sitemap & SEO Utilities Summary

**Created programmatic sitemap.ts with 11 Orange County city pages and comprehensive SEO utility library with metadata helpers and JSON-LD schema builders**

## Performance

- **Duration:** 6 min
- **Started:** 2026-01-12T12:45:00Z
- **Completed:** 2026-01-12T12:51:00Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- Created sitemap.ts generating 14 URLs (2 static + 1 state + 11 cities)
- Built SEO metadata utilities: SITE_CONFIG, generateLocationMetadata, generateStateMetadata
- Built JSON-LD schema builders: WebSite, Organization, Breadcrumb, LocalBusiness
- Barrel exports in index.ts for clean imports

## Task Commits

Each task was committed atomically:

1. **Task 1: Create sitemap.ts** - `51a0ccb` (feat)
2. **Task 2: Create SEO utility library** - `26f417d` (feat)

## Files Created/Modified

- `src/app/sitemap.ts` - Programmatic sitemap with static pages + Orange County cities
- `src/lib/seo/metadata.ts` - SITE_CONFIG, buildCanonicalUrl, generateLocationMetadata, generateStateMetadata
- `src/lib/seo/schemas.ts` - buildWebsiteSchema, buildOrganizationSchema, buildBreadcrumbSchema, buildLocalBusinessSchema
- `src/lib/seo/index.ts` - Barrel exports for all utilities and types

## Decisions Made

- Used Orange County cities (Costa Mesa, Foothill Ranch, Irvine, Laguna Beach, Laguna Hills, Laguna Woods, Lake Forest, Mission Viejo, Newport Beach, Santa Ana, Tustin) instead of generic mock data
- Sitemap URLs use /california/{city-slug} pattern for future state/city routes
- Schema builders return plain objects (not JSX) for flexible usage in JSON-LD scripts

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added generateStateMetadata function**
- **Found during:** Task 2 (SEO utility library creation)
- **Issue:** Plan mentioned location metadata but state pages also need dedicated metadata
- **Fix:** Added generateStateMetadata() for state-level pages with city/deal counts
- **Files modified:** src/lib/seo/metadata.ts
- **Verification:** TypeScript compiles correctly

**2. [Rule 2 - Missing Critical] Added buildLocalBusinessSchema function**
- **Found during:** Task 2 (Schema builders)
- **Issue:** Provider pages will need LocalBusiness schema for medspa SEO
- **Fix:** Added buildLocalBusinessSchema() with HealthAndBeautyBusiness type
- **Files modified:** src/lib/seo/schemas.ts
- **Verification:** TypeScript compiles correctly

---

**Total deviations:** 2 auto-added (missing critical for future functionality), 0 deferred
**Impact on plan:** Both additions enhance future phase readiness. No scope creep.

## Issues Encountered

None

## Verification Results

- [x] `npm run build` succeeds without errors
- [x] http://localhost:3000/sitemap.xml returns valid XML
- [x] src/lib/seo/ contains metadata.ts, schemas.ts, index.ts
- [x] Schema builder functions export proper WithContext types

## Next Phase Readiness

- Sitemap ready and serving at /sitemap.xml
- SEO utilities ready for use in location pages (Phase 25-27)
- Ready for Plan 24-03 (structured data JSON-LD components)

---
*Phase: 24-seo-foundation*
*Completed: 2026-01-12*
