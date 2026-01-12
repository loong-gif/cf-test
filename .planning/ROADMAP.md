# Roadmap: CostFinders

## Overview

Build the complete CostFinders UI — a price transparency and lead generation platform for medical spas. The journey progresses from foundational design system through consumer deal discovery, business lead management, and admin moderation tools. All features use mock data structured for Supabase integration by a separate team.

## Milestones

- ✅ [v1.0 MVP](milestones/v1.0-ROADMAP.md) (Phases 1-10) — SHIPPED 2026-01-11
- ✅ [v1.1 UI Consistency & Polish](milestones/v1.1-ROADMAP.md) (Phases 11-15) — SHIPPED 2026-01-12
- 🚧 **v1.2 Messaging Style Guide** — Phases 16-23 (in progress)
- 📋 **v1.3 Location SEO Clusters** — Phases 24-33 (planned)

## Completed Milestones

<details>
<summary>v1.0 MVP (Phases 1-10) — SHIPPED 2026-01-11</summary>

- [x] Phase 1: Foundation (3/3 plans) — completed 2026-01-09
- [x] Phase 2: Location Discovery (2/2 plans) — completed 2026-01-09
- [x] Phase 3: Deal Browsing (4/4 plans) — completed 2026-01-09
- [x] Phase 3.1: Image Blur (1/1 plan) — completed 2026-01-09 (INSERTED)
- [x] Phase 4: Consumer Auth (5/5 plans) — completed 2026-01-09
- [x] Phase 5: Consumer Dashboard (5/5 plans) — completed 2026-01-09
- [x] Phase 6: Business Onboarding (3/3 plans) — completed 2026-01-10
- [x] Phase 7: Business Dashboard (5/5 plans) — completed 2026-01-10
- [x] Phase 8: Admin Core (4/4 plans) — completed 2026-01-12
- [x] Phase 9: Admin Platform (2/2 plans) — completed 2026-01-12
- [x] Phase 10: Monetization UI (5/5 plans) — completed 2026-01-12

**Total:** 11 phases, 39 plans, 3.8 hours execution time

See [v1.0-ROADMAP.md](milestones/v1.0-ROADMAP.md) for full details.

</details>

<details>
<summary>v1.1 UI Consistency & Polish (Phases 11-15) — SHIPPED 2026-01-12</summary>

- [x] Phase 11: Design System Audit (3/3 plans) — completed 2026-01-12
- [x] Phase 12: Shared Components (2/2 plans) — completed 2026-01-12
- [x] Phase 13: Navigation Overhaul (2/2 plans) — completed 2026-01-12
- [x] Phase 14: Module Polish (6/6 plans) — completed 2026-01-12
- [x] Phase 15: Admin Polish & QA (2/2 plans) — completed 2026-01-12

**Total:** 5 phases, 15 plans

See [v1.1-ROADMAP.md](milestones/v1.1-ROADMAP.md) for full details.

</details>

### 🚧 v1.2 Messaging Style Guide (In Progress)

**Milestone Goal:** Establish consistent voice, tone, and messaging patterns across the entire CostFinders platform

#### Phase 16: Messaging Audit

**Goal**: Review all existing copy across consumer, business, admin modules
**Depends on**: Previous milestone complete
**Research**: Unlikely (internal review)
**Plans**: 3 plans

Plans:
- [x] 16-01: Consumer module messaging audit (public + dashboard)
- [x] 16-02: Business module messaging audit (onboarding + dashboard)
- [x] 16-03: Admin module audit + consolidated findings

#### Phase 17: Voice & Tone Definition

**Goal**: Establish brand voice guidelines and writing principles
**Depends on**: Phase 16
**Research**: Likely (UX writing best practices, brand voice frameworks)
**Research topics**: UX writing guidelines, voice and tone frameworks, microcopy best practices
**Plans**: 1 plan

Plans:
- [x] 17-01: Voice & tone definition (VOICE.md, TONE.md, WRITING-RULES.md)

#### Phase 18: Error Messaging System

**Goal**: Standardize error message patterns and copy
**Depends on**: Phase 17
**Research**: Likely (error message UX patterns)
**Research topics**: Error message UX, friendly error copy patterns, recovery messaging
**Plans**: TBD

Plans:
- [ ] 18-01: TBD

#### Phase 19: Success & Confirmation States

**Goal**: Positive feedback and confirmation messaging
**Depends on**: Phase 18
**Research**: Unlikely (applying established voice)
**Plans**: TBD

Plans:
- [ ] 19-01: TBD

#### Phase 20: Empty States & Placeholders

**Goal**: Handle no-data scenarios consistently
**Depends on**: Phase 19
**Research**: Unlikely (applying established patterns)
**Plans**: TBD

Plans:
- [ ] 20-01: TBD

#### Phase 21: Form Validation Copy

**Goal**: Input validation messages and inline feedback
**Depends on**: Phase 20
**Research**: Unlikely (applying established patterns)
**Plans**: TBD

Plans:
- [ ] 21-01: TBD

#### Phase 22: Notification Templates

**Goal**: Email, SMS, in-app notification copy patterns
**Depends on**: Phase 21
**Research**: Unlikely (applying established patterns)
**Plans**: TBD

Plans:
- [ ] 22-01: TBD

#### Phase 23: Documentation & Guidelines

**Goal**: Create the messaging style guide document
**Depends on**: Phase 22
**Research**: Unlikely (compilation of established patterns)
**Plans**: TBD

Plans:
- [ ] 23-01: TBD

### 📋 v1.3 Location SEO Clusters (Planned)

**Milestone Goal:** Create SEO-optimized location-based page hierarchy for organic search visibility — state → city → neighborhood pages with structured data, sitemaps, and optimized content.

#### Phase 24: SEO Foundation

**Goal**: Meta tags, structured data schemas, sitemap infrastructure
**Depends on**: Phase 23 (or can run in parallel)
**Research**: Complete (24-RESEARCH.md)
**Plans**: 3 plans

Plans:
- [x] 24-01: Foundation setup (dependencies, root metadata, robots.ts)
- [x] 24-02: Sitemap & SEO utilities (sitemap.ts, lib/seo/)
- [ ] 24-03: Structured data components (JSON-LD schema components)

#### Phase 25: State Pages

**Goal**: State-level landing pages with city listings and aggregated deals
**Depends on**: Phase 24
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 25-01: TBD

#### Phase 26: City Pages

**Goal**: City-level pages with neighborhood breakdown and featured deals
**Depends on**: Phase 25
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 26-01: TBD

#### Phase 27: Neighborhood Pages

**Goal**: Neighborhood-level pages with all providers and deals
**Depends on**: Phase 26
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 27-01: TBD

#### Phase 28: Provider Pages

**Goal**: Individual medspa provider pages with SEO-friendly URLs
**Depends on**: Phase 27
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 28-01: TBD

#### Phase 29: Service Category Pages

**Goal**: Treatment-type pages (Botox, Fillers, etc.) by location
**Depends on**: Phase 28
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 29-01: TBD

#### Phase 30: Dynamic Sitemap

**Goal**: Programmatic sitemap generation for all location pages
**Depends on**: Phase 29
**Research**: Likely (Next.js sitemap generation, Google Search Console)
**Research topics**: Next.js sitemap.ts, sitemap index files, robots.txt configuration
**Plans**: TBD

Plans:
- [ ] 30-01: TBD

#### Phase 31: Internal Linking

**Goal**: Breadcrumbs, related links, cross-page navigation
**Depends on**: Phase 30
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 31-01: TBD

#### Phase 32: Content Optimization

**Goal**: Page titles, descriptions, heading hierarchy, content blocks
**Depends on**: Phase 31
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 32-01: TBD

#### Phase 33: Performance & Core Web Vitals

**Goal**: Image optimization, lazy loading, LCP/CLS optimization
**Depends on**: Phase 32
**Research**: Likely (Core Web Vitals, Next.js Image optimization)
**Research topics**: Core Web Vitals thresholds, Next.js Image component, font loading optimization
**Plans**: TBD

Plans:
- [ ] 33-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → ... → 23 → 24 → 25 → 26 → 27 → 28 → 29 → 30 → 31 → 32 → 33

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation | v1.0 | 3/3 | Complete | 2026-01-09 |
| 2. Location Discovery | v1.0 | 2/2 | Complete | 2026-01-09 |
| 3. Deal Browsing | v1.0 | 4/4 | Complete | 2026-01-09 |
| 3.1 Image Blur | v1.0 | 1/1 | Complete | 2026-01-09 |
| 4. Consumer Auth | v1.0 | 5/5 | Complete | 2026-01-09 |
| 5. Consumer Dashboard | v1.0 | 5/5 | Complete | 2026-01-09 |
| 6. Business Onboarding | v1.0 | 3/3 | Complete | 2026-01-10 |
| 7. Business Dashboard | v1.0 | 5/5 | Complete | 2026-01-10 |
| 8. Admin Core | v1.0 | 4/4 | Complete | 2026-01-12 |
| 9. Admin Platform | v1.0 | 2/2 | Complete | 2026-01-12 |
| 10. Monetization UI | v1.0 | 5/5 | Complete | 2026-01-12 |
| 11. Design System Audit | v1.1 | 3/3 | Complete | 2026-01-12 |
| 12. Shared Components | v1.1 | 2/2 | Complete | 2026-01-12 |
| 13. Navigation Overhaul | v1.1 | 2/2 | Complete | 2026-01-12 |
| 14. Module Polish | v1.1 | 6/6 | Complete | 2026-01-12 |
| 15. Admin Polish & QA | v1.1 | 2/2 | Complete | 2026-01-12 |
| 16. Messaging Audit | v1.2 | 3/3 | Complete | 2026-01-12 |
| 17. Voice & Tone Definition | v1.2 | 1/1 | Complete | 2026-01-12 |
| 18. Error Messaging System | v1.2 | 0/? | Not started | - |
| 19. Success & Confirmation States | v1.2 | 0/? | Not started | - |
| 20. Empty States & Placeholders | v1.2 | 0/? | Not started | - |
| 21. Form Validation Copy | v1.2 | 0/? | Not started | - |
| 22. Notification Templates | v1.2 | 0/? | Not started | - |
| 23. Documentation & Guidelines | v1.2 | 0/? | Not started | - |
| 24. SEO Foundation | v1.3 | 2/3 | In progress | - |
| 25. State Pages | v1.3 | 0/? | Not started | - |
| 26. City Pages | v1.3 | 0/? | Not started | - |
| 27. Neighborhood Pages | v1.3 | 0/? | Not started | - |
| 28. Provider Pages | v1.3 | 0/? | Not started | - |
| 29. Service Category Pages | v1.3 | 0/? | Not started | - |
| 30. Dynamic Sitemap | v1.3 | 0/? | Not started | - |
| 31. Internal Linking | v1.3 | 0/? | Not started | - |
| 32. Content Optimization | v1.3 | 0/? | Not started | - |
| 33. Performance & CWV | v1.3 | 0/? | Not started | - |
