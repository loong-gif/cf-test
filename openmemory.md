# CostFinders — OpenMemory Guide

> Living project index. Last verified: 2026-08-22 (commit 5667570).

## Overview

CostFinders: price-transparency + lead-gen platform for medical spas.
Next.js 16 (App Router) + React 19 + TS + Tailwind v4 (Warm Sand design system).
Backend: Supabase (Postgres + Auth + Realtime + Storage). Hosting: Vercel.
~304 TS/TSX files, ~50k LOC. Three roles in one app: consumer, business, admin.

## User Defined Namespaces

- [Leave blank - user populates]

## Architecture

- `src/app/(public)/` — marketing + SEO pages (home, deals, prices, memberships, businesses, guides, [state]/[city] cluster, treatments, sign-in)
- `src/app/(app)/` — authenticated consumer (dashboard, favorites, claims, messages, notifications, settings, deals/[...slugs])
- `src/app/business/` — business landing, claim/create flows, dashboard (deals, leads, messages, analytics, pricing, settings)
- `src/app/admin/` — admin login + dashboard (moderation, users, content CRUD, leads relay, monetization, reports)
- `src/app/go/` — outbound click tracking redirects (logs to `public_outbound_clicks`)
- `src/components/` — layered: `ui/` → `patterns/` → `features/` → `layout/` (import direction enforced by convention)
- `src/lib/actions/` — 23 server action files (auth, claims, messaging, admin, deal management…)
- `src/lib/data/` — live Supabase data layer (`unified.ts`, `offers.ts`, `marketplace.ts`, `guide-stats.ts`)
- `src/lib/mock-data/` — legacy mock dataset (still used by business/admin dashboards + [state]/[city]/[neighborhood] SEO pages)
- `src/lib/context/` — authContext / businessAuthContext / adminAuthContext / claimsContext (all real Supabase Auth)

## Key Patterns

- **Data fetch**: server components query via `src/lib/data/*` with React `cache()` dedup; RPC-first with JS fallback (`get_city_deal_counts`, `get_business_count_for_city`)
- **Missing credentials**: `src/lib/supabase.ts` + `src/lib/supabase-browser.ts` use local-demo fallback URLs/keys so auth providers and `npm run build` work without env vars; public data pages still render `SupabaseSetupNotice` when `isSupabaseConfigured` is false
- **Claim flow**: `claimCTA` (auth wall) → `claimDealModal` → `createClaimAction` (server derives business_id, max 3 active claims, dedupe) → reveal via `getBusinessRevealAction`; auto-creates messaging conversation + best-effort Resend emails
- **Realtime**: messaging via Supabase channels + broadcast typing indicators; notifications use realtime + 60s polling fallback
- **Rendering**: most public pages are `force-dynamic` (ISR documented but currently disabled); guides use `revalidate = 86400`; [state]/[city] cluster uses `generateStaticParams`
- **Design tokens**: CSS vars in `globals.css` `@theme` (bg-base #e8ddd0, accent #92400e, text #451a03); Phosphor icons only; Sora font referenced but NOT loaded (no next/font, no font files)

## Data-Source Map (verified 2026-08-22)

- **Consumer dashboard**: fully LIVE (favorites, claims, messages, notifications, settings)
- **Business**: LIVE = deals CRUD, leads, profile, messages | MOCK = overview metrics, analytics, pricing, billing/checkout, sponsored
- **Admin**: LIVE = businesses, deals, users, leads relay, content categories/locations | MOCK = monetization, reports, data tools, content treatments
- **Public**: LIVE = /prices, /memberships, /businesses, /deals | MOCK = [state]/[city]/[neighborhood] + provider pages
- `/compare_price` → permanent redirect to `/prices`
- Analytics: `category_selected` fires on `/deals` category tabs and city deals filter
- No `middleware.ts` — all auth gates are client-side redirects

## Known Gaps (verified 2026-08-22)

- Anonymity model: open transparency — business names public on cards/compare/directory; claim CTA emphasizes lock-in price + connect with business (not "hidden details")
- Neighborhood/provider SEO pages + sitemap sections run on mock-data, not live Supabase
- No footer, no /privacy, no /terms anywhere
- No mobile nav on public pages (header nav hidden on <md, no hamburger)
- `BlurredImage`: clears blur/overlay when `unlocked`; uses passed `alt`
- `createClaimAction` revalidates `/dashboard/claims` (was `/account/claims`)
- `category_selected` analytics fires from `/deals` category tabs and city deals filter
- Copy drift: Title Case headings/buttons widespread vs sentence-case messaging guide
- Business/admin dashboard overview metrics are hardcoded mock numbers
- Phone verification is a no-op (Twilio deferred); email via Resend is env-gated
- Guide pages 404 when live deal count is 0 (fragile vs data pipeline hiccups)
- `prefers-reduced-motion` does not cover `.animate-hero-fade-in`

## Testing

- `npm run lint` (Biome; ~20 known issues, mostly a11y labels in admin content pages)
- `npm run test:auth`, `npm run test:marketplace` (tsx unit tests, 18 passing)
- k6 load scripts in `tests/load/`; Playwright available for visual checks
- Local demo without credentials: `/` + `/deals` show setup notice; `/business` landing renders; dashboards prerender (auth inactive until credentials configured)
