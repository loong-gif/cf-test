---
phase: 27-neighborhood-pages
plan: 01
subsystem: seo
tags: [next.js, ssg, generateStaticParams, seo, location-pages]

# Dependency graph
requires:
  - phase: 26-city-pages
    provides: City landing pages, city data helpers, NeighborhoodCard component
provides:
  - Neighborhood landing page route with SSG
  - Neighborhood data helpers (getNeighborhoodBySlug, getDealsForNeighborhood, getNeighborhoodStats)
  - Dynamic sitemap generation for neighborhoods
affects: [28-provider-pages]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Dynamic routing with generateStaticParams for neighborhoods
    - Neighborhood-level SEO aggregation
    - Deal grid display at neighborhood level

key-files:
  created:
    - src/lib/mock-data/neighborhoods.ts
    - src/app/[state]/[city]/[neighborhood]/page.tsx
  modified:
    - src/app/sitemap.ts

key-decisions:
  - "Server Component for page, DealCard client component used directly (Next.js handles boundary)"
  - "Breadcrumb hierarchy: Home > State > City > Neighborhood"
  - "Neighborhood stats calculated dynamically from business locationArea field"

patterns-established:
  - "Neighborhood page shows deals instead of further navigation drill-down"
  - "generateStaticParams for neighborhood-based SSG"
  - "Final level in location hierarchy"

issues-created: []

# Metrics
duration: 6min
completed: 2026-01-12
---

# Phase 27 Plan 01: Neighborhood Landing Pages Summary

**Dynamic [state]/[city]/[neighborhood] routes with SSG, provider listings, and aggregated deal statistics**

## Performance

- **Duration:** 6 min
- **Started:** 2026-01-12T17:00:00Z
- **Completed:** 2026-01-12T17:06:00Z
- **Tasks:** 4
- **Files modified:** 3

## Accomplishments

- Created neighborhood data helpers for retrieving deals and stats by neighborhood
- Built dynamic [state]/[city]/[neighborhood] route with generateStaticParams generating 16 neighborhood pages
- Implemented deal card grid display using existing DealCard component
- Updated sitemap to dynamically include all 16 neighborhood URLs with priority 0.6

## Files Created/Modified

- `src/lib/mock-data/neighborhoods.ts` - Neighborhood data helpers with getNeighborhoodBySlug, getDealsForNeighborhood, getNeighborhoodStats, getAllNeighborhoodsWithCityAndState
- `src/app/[state]/[city]/[neighborhood]/page.tsx` - Dynamic neighborhood route with SSG support, hero section, deal grid, breadcrumb schema
- `src/app/sitemap.ts` - Updated to dynamically generate neighborhood URLs

## Decisions Made

- Server Component approach for page with DealCard client component integrated directly
- Breadcrumb navigation showing full hierarchy: Home > State > City > Neighborhood
- Neighborhood is final level in location hierarchy - shows deals, not further navigation

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Next Phase Readiness

- Neighborhood pages complete and generating via SSG (16 neighborhoods)
- Deal cards display with proper glassmorphic styling
- BreadcrumbSchema established for neighborhood-level in location hierarchy
- Ready for Phase 28: Provider Pages

---
*Phase: 27-neighborhood-pages*
*Completed: 2026-01-12*
