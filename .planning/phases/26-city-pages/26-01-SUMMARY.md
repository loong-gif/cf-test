---
phase: 26-city-pages
plan: 01
subsystem: seo
tags: [next.js, ssg, generateStaticParams, seo, location-pages]

# Dependency graph
requires:
  - phase: 25-state-pages
    provides: State landing pages, state data helpers, CityCard component
provides:
  - City landing page route with SSG
  - City data helpers (getCityBySlug, getNeighborhoodsForCity, getCityStats)
  - NeighborhoodCard component for location listings
  - Dynamic sitemap generation for cities
affects: [27-neighborhood-pages, 30-dynamic-sitemap]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Dynamic routing with generateStaticParams for cities
    - City-level SEO aggregation
    - Neighborhood hierarchy navigation

key-files:
  created:
    - src/lib/mock-data/cities.ts
    - src/app/[state]/[city]/page.tsx
    - src/components/features/neighborhoodCard.tsx
  modified:
    - src/app/sitemap.ts

key-decisions:
  - "Reused generateLocationMetadata from lib/seo/metadata.ts for city pages"
  - "Server Components only - no client-side hydration needed"
  - "Distributed stats across neighborhoods using Math.ceil division"

patterns-established:
  - "City page hierarchy: Home > State > City > Neighborhood"
  - "generateStaticParams for city-based SSG"
  - "Stats aggregation pattern for city pages"

issues-created: []

# Metrics
duration: 6min
completed: 2026-01-12
---

# Phase 26 Plan 01: City Landing Pages Summary

**Dynamic [state]/[city] routes with SSG, neighborhood listings, and aggregated deal statistics**

## Performance

- **Duration:** 6 min
- **Started:** 2026-01-12T16:15:00Z
- **Completed:** 2026-01-12T16:21:00Z
- **Tasks:** 5
- **Files modified:** 4

## Accomplishments

- Created city data helpers for aggregating neighborhoods, deals, and businesses by city
- Built dynamic [state]/[city] route with generateStaticParams generating 6 city pages
- Implemented glassmorphic NeighborhoodCard component for neighborhood listings
- Updated sitemap to dynamically include all city URLs with priority 0.7

## Files Created/Modified

- `src/lib/mock-data/cities.ts` - City data helpers with getCityBySlug, getNeighborhoodsForCity, getCityStats, slugifyNeighborhood, getAllCitiesWithState
- `src/app/[state]/[city]/page.tsx` - Dynamic city route with SSG support, hero section, neighborhood grid, breadcrumb schema
- `src/components/features/neighborhoodCard.tsx` - Reusable glassmorphic neighborhood card with stats and navigation
- `src/app/sitemap.ts` - Updated to dynamically generate city URLs

## Decisions Made

- Reused existing generateLocationMetadata for city pages (already supports city/state params)
- Server Components only - no client hydration needed for static SEO pages
- Stats distributed evenly across neighborhoods using Math.ceil for mock data

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Next Phase Readiness

- City pages complete and generating via SSG (6 cities)
- Neighborhood links point to `/${state}/${city}/${neighborhood}` routes (Phase 27 will implement)
- BreadcrumbSchema established for city-level in location hierarchy
- Ready for Phase 27: Neighborhood Pages

---
*Phase: 26-city-pages*
*Completed: 2026-01-12*
