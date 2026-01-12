# Roadmap: CostFinders

## Overview

Build the complete CostFinders UI — a price transparency and lead generation platform for medical spas. The journey progresses from foundational design system through consumer deal discovery, business lead management, and admin moderation tools. All features use mock data structured for Supabase integration by a separate team.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Project setup, glassmorphic design system, mock data layer ✓
- [x] **Phase 2: Location Discovery** - Location-first browsing with auto-detect and manual override ✓
- [x] **Phase 3: Deal Browsing** - Anonymous deal cards, filters, and comparison experience ✓
- [x] **Phase 3.1: Image Blur** - INSERTED: Heavy blur + lock icon on deal images for anonymous users ✓
- [x] **Phase 4: Consumer Auth** - Account creation with email/SMS verification UI, business reveal ✓
- [x] **Phase 5: Consumer Dashboard** - Favorites, claims, status tracking, deal alerts, profile ✓
- [x] **Phase 6: Business Onboarding** - Claim existing profile and create new business flows ✓
- [x] **Phase 7: Business Dashboard** - Deal management, lead inbox, messaging, analytics, profile, settings ✓
- [x] **Phase 8: Admin Core** - Deal moderation, user management, content management ✓
- [ ] **Phase 9: Admin Platform** - Reporting, metrics, data management tools
- [ ] **Phase 10: Monetization UI** - Tiers, subscription billing, sponsored placements, pricing settings

## Phase Details

### Phase 1: Foundation
**Goal**: Establish project structure, glassmorphic design system, and mock data layer aligned with Supabase schema
**Depends on**: Nothing (first phase)
**Research**: Unlikely (established Next.js patterns, Tailwind v4 setup)
**Status**: Complete

Plans:
- [x] 01-01: Project setup with Next.js 16, TypeScript, Tailwind v4, Phosphor icons ✓
- [x] 01-02: Glassmorphic design system — tokens, base components (Button, Card, Input, etc.) ✓
- [x] 01-03: Mock data layer — types, fixtures structured for Supabase schema ✓

### Phase 2: Location Discovery
**Goal**: Location-first discovery with auto-detection and manual city/area selection
**Depends on**: Phase 1
**Research**: Unlikely (standard geolocation APIs, internal patterns)
**Status**: Complete

Plans:
- [x] 02-01: Location detection service (browser geolocation, context provider, expanded mock data) ✓
- [x] 02-02: Location selection UI — city picker, area filter, "near me" toggle ✓

### Phase 3: Deal Browsing
**Goal**: Core deal discovery UX — browse, filter, compare anonymous deals
**Depends on**: Phase 2
**Research**: Unlikely (internal UI patterns, established filter/sort patterns)
**Status**: Complete

Plans:
- [x] 03-01: Deal card component — anonymous display, pricing visible, business hidden ✓
- [x] 03-02: Browse page with grid/list views, treatment type filters ✓
- [x] 03-03: Advanced filters — price range, location radius, sort options ✓
- [x] 03-04: Deal detail view — full pricing breakdown, treatment info, claim CTA ✓

### Phase 3.1: Image Blur (INSERTED)
**Goal**: Add heavy blur + lock icon overlay to deal images for anonymous users
**Depends on**: Phase 3
**Research**: Unlikely (CSS blur effects, overlay patterns)
**Status**: Complete

Plans:
- [x] 03.1-01: Blurred image component with lock overlay for DealCard and detail page ✓

### Phase 4: Consumer Auth
**Goal**: Account creation flow with email/SMS verification UI, triggering business reveal
**Depends on**: Phase 3
**Research**: Likely (auth patterns, verification UI flows)
**Research topics**: Supabase Auth UI patterns, SMS verification mock flows, session handling
**Status**: Complete

Plans:
- [x] 04-01: Sign up / sign in forms with email + password ✓
- [x] 04-02: Sign-in form and auth modal wrapper ✓
- [x] 04-03: Email verification UI flow (mock) ✓
- [x] 04-04: Phone verification UI flow (mock) ✓
- [x] 04-05: Business reveal on verification ✓

### Phase 5: Consumer Dashboard
**Goal**: Consumer account features — favorites, claims, tracking, alerts, profile
**Depends on**: Phase 4
**Research**: Unlikely (internal CRUD patterns, dashboard UI)
**Status**: Complete

Plans:
- [x] 05-01: Dashboard shell with sidebar navigation and home page ✓
- [x] 05-02: Saved deals / favorites list ✓
- [x] 05-03: Claim deal flow — preferred time request form ✓
- [x] 05-04: Claim status tracking (Pending → Contacted → Booked → Completed) ✓
- [x] 05-05: User profile and settings page ✓

### Phase 6: Business Onboarding
**Goal**: Business claim existing profile or create new business flows
**Depends on**: Phase 1
**Research**: Unlikely (form patterns, verification UI)
**Status**: Complete

Plans:
- [x] 06-01: Business auth context, search modal, entry page ✓
- [x] 06-02: Claim existing business flow ✓
- [x] 06-03: Create new business flow + verification UI ✓

### Phase 7: Business Dashboard
**Goal**: Business portal — deal management, leads, messaging, analytics, profile editing
**Depends on**: Phase 6
**Research**: Unlikely (dashboard patterns, messaging UI)
**Status**: Complete

Plans:
- [x] 07-01: Business dashboard shell with navigation ✓
- [x] 07-02: Deal management — create, edit, pause deals ✓
- [x] 07-03: Lead inbox with claim details ✓
- [x] 07-04: In-platform messaging + analytics dashboard ✓
- [x] 07-05: Business profile editing + settings + integrations placeholder ✓

### Phase 8: Admin Core
**Goal**: Admin moderation and management tools
**Depends on**: Phase 5, Phase 7
**Research**: Unlikely (admin dashboard patterns)
**Status**: Complete

Plans:
- [x] 08-01: Admin dashboard shell with role-based navigation ✓
- [x] 08-02: Deal moderation (approve, reject, request changes) ✓
- [x] 08-03: User management (consumers and businesses) ✓
- [x] 08-04: Content management (categories, locations, treatments) ✓

### Phase 9: Admin Platform
**Goal**: Platform reporting, metrics, and data management
**Depends on**: Phase 8
**Research**: Unlikely (reporting UI, table patterns)
**Plans**: TBD

Plans:
- [x] 09-01: Platform reporting and metrics dashboard ✓
- [ ] 09-02: Data management tools UI

### Phase 10: Monetization UI
**Goal**: Business tier system, billing UI, sponsored placements, pricing configuration
**Depends on**: Phase 7, Phase 9
**Research**: Likely (Stripe-ready patterns, subscription UI)
**Research topics**: Stripe Elements patterns (UI only), subscription tier UX, pricing tables
**Plans**: TBD

Plans:
- [ ] 10-01: Business tier system UI (Unclaimed → Free → Paid)
- [ ] 10-02: Subscription billing UI (Stripe-ready checkout, payment method management)
- [ ] 10-03: Sponsored placements configuration
- [ ] 10-04: Per-lead pricing settings
- [ ] 10-05: Admin overrides for monetization settings

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 3.1 → 4 → 5 → 6 → 7 → 8 → 9 → 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 3/3 | Complete | 2026-01-09 |
| 2. Location Discovery | 2/2 | Complete | 2026-01-09 |
| 3. Deal Browsing | 4/4 | Complete | 2026-01-09 |
| 3.1 Image Blur | 1/1 | Complete | 2026-01-09 |
| 4. Consumer Auth | 5/5 | Complete | 2026-01-09 |
| 5. Consumer Dashboard | 5/5 | Complete | 2026-01-09 |
| 6. Business Onboarding | 3/3 | Complete | 2026-01-10 |
| 7. Business Dashboard | 5/5 | Complete | 2026-01-10 |
| 8. Admin Core | 4/4 | Complete | 2026-01-12 |
| 9. Admin Platform | 1/2 | In progress | - |
| 10. Monetization UI | 0/5 | Not started | - |
