# Roadmap: CostFinders

## Overview

Build the complete CostFinders UI — a price transparency and lead generation platform for medical spas. The journey progresses from foundational design system through consumer deal discovery, business lead management, and admin moderation tools. All features use mock data structured for Supabase integration by a separate team.

## Milestones

- ✅ [v1.0 MVP](milestones/v1.0-ROADMAP.md) (Phases 1-10) — SHIPPED 2026-01-11
- 🚧 **v1.1 UI Consistency & Polish** — Phases 11-15 (in progress)

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

### 🚧 v1.1 UI Consistency & Polish (In Progress)

**Milestone Goal:** Unify the design system, navigation, and shared components across all modules for a cohesive user experience

#### Phase 11: Design System Audit

**Goal**: Review existing styles, document inconsistencies, establish unified token system
**Depends on**: v1.0 complete
**Research**: Unlikely (internal patterns)
**Plans**: 3 plans

Plans:
- [x] 11-01: Audit & document inconsistencies (DESIGN-AUDIT.md, DESIGN-TOKENS-REFERENCE.md)
- [x] 11-02: Extend CSS design tokens (semantic colors in @theme, semanticClasses export)
- [x] 11-03: Update core UI components (badge.tsx, input.tsx to use semantic tokens)

#### Phase 12: Shared Components ✅

**Goal**: Create unified headers, footers, navigation components for all modules
**Depends on**: Phase 11
**Research**: Unlikely (internal patterns)
**Plans**: 2 plans

Plans:
- [x] 12-01: Create shared navigation components (BaseSidebar, AuthenticatedDashboardLayout)
- [x] 12-02: Migrate role-specific components to use shared base (consumer, business, admin)

#### Phase 13: Navigation Overhaul ✅

**Goal**: Add breadcrumb navigation and back buttons for improved page hierarchy
**Depends on**: Phase 12
**Research**: Unlikely (internal patterns)
**Plans**: 2 plans

Plans:
- [x] 13-01: Create PageHeader component + route configuration
- [x] 13-02: Integrate into layouts + clean up ad-hoc navigation

#### Phase 14: Module Polish

**Goal**: Apply unified system to deal browsing, consumer flows, business portal
**Depends on**: Phase 13
**Research**: Unlikely (internal patterns)
**Plans**: 6 plans

Plans:
- [ ] 14-01: Migrate auth & form components to semantic tokens
- [ ] 14-02: Migrate consumer deal components to semantic tokens
- [ ] 14-03: Migrate business onboarding components to semantic tokens
- [ ] 14-04: Migrate monetization & payment components to semantic tokens
- [ ] 14-05: Migrate consumer & business dashboard pages to semantic tokens
- [ ] 14-06: Migrate business deal & lead management components to semantic tokens

#### Phase 15: Admin Polish & QA

**Goal**: Apply unified system to admin tools, comprehensive cross-module QA
**Depends on**: Phase 14
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 15-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 3.1 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15

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
| 14. Module Polish | v1.1 | 0/6 | Not started | - |
| 15. Admin Polish & QA | v1.1 | 0/? | Not started | - |
