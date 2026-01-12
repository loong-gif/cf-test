# Architecture

**Analysis Date:** 2026-01-12

## Pattern Overview

**Overall:** Multi-Role Web Application (Next.js App Router)

**Key Characteristics:**
- Single app serving three user types (Consumer, Business, Admin)
- UI-only with mock data layer (backend integration deferred)
- Context-based authentication per role
- Glassmorphic design system throughout

## Layers

**UI Layer (Primitives):**
- Purpose: Design system building blocks
- Contains: Button, Card, Input, Badge, Modal, Tooltip
- Location: `src/components/ui/`
- Depends on: External libraries only
- Used by: Patterns and Features layers

**Patterns Layer (Compositions):**
- Purpose: Reusable UI combinations without business logic
- Contains: CategoryFilter, PriceRangeFilter, BlurredImage, SaveButton
- Location: `src/components/patterns/`
- Depends on: UI layer, external libraries
- Used by: Features layer

**Features Layer (Domain):**
- Purpose: Business logic and domain-specific components
- Contains: DealCard, SignUpForm, LeadList, DealModeration, etc.
- Location: `src/components/features/`
- Depends on: UI, Patterns, Contexts, Mock Data
- Used by: Page routes

**Layout Layer (Shell):**
- Purpose: Navigation and app structure
- Contains: GlobalHeader, DashboardSidebar, BusinessDashboardSidebar, AdminDashboardSidebar
- Location: `src/components/layout/`
- Depends on: All other layers
- Used by: Route layouts

## Data Flow

**Consumer Deal Browse Flow:**

1. User visits `/deals`
2. LocationContext provides current city
3. Page fetches from `src/lib/mock-data/utils.ts`
4. Deals transformed via `toAnonymousDeal()` (removes businessId)
5. DealsGrid renders DealCard components
6. User interaction triggers auth modal if unauthenticated

**Business Dashboard Flow:**

1. User visits `/business/dashboard`
2. Layout checks `useBusinessAuth()` context
3. If not authenticated → redirect to `/business`
4. If no linked business → prompt to claim/create
5. Dashboard renders with business-specific data

**State Management:**
- Context API for auth state (Consumer, Business, Admin separate)
- localStorage for persistence (user IDs, favorites, claims)
- Mock data arrays for all entities (modified in-memory)

## Key Abstractions

**Context Provider:**
- Purpose: Role-based authentication and state
- Examples: `AuthProvider`, `BusinessAuthProvider`, `AdminAuthProvider`, `LocationProvider`, `ClaimsProvider`
- Location: `src/lib/context/`
- Pattern: React Context with localStorage persistence

**AnonymousDeal:**
- Purpose: Consumer-safe deal representation (businessId hidden)
- Location: `src/lib/mock-data/utils.ts`
- Pattern: Data transformation function

**Mock Data Layer:**
- Purpose: Simulate Supabase database structure
- Examples: `deals.ts`, `businesses.ts`, `consumers.ts`
- Location: `src/lib/mock-data/`
- Pattern: Static arrays + query functions

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: Every page load
- Responsibilities: Wrap with context providers, load fonts, set metadata

**Public Routes:**
- Location: `src/app/page.tsx`, `src/app/deals/`
- Triggers: Unauthenticated users
- Responsibilities: Browse deals, view details, prompt registration

**Consumer Dashboard:**
- Location: `src/app/dashboard/`
- Triggers: Authenticated consumers
- Responsibilities: Favorites, claims, settings

**Business Dashboard:**
- Location: `src/app/business/dashboard/`
- Triggers: Authenticated business owners
- Responsibilities: Deal management, leads, messaging, analytics

**Admin Dashboard:**
- Location: `src/app/admin/dashboard/`
- Triggers: Authenticated admins
- Responsibilities: Moderation, user management, monetization

## Error Handling

**Strategy:** Try/catch in context providers, error state in UI

**Patterns:**
- Context providers set `error` state on failures
- Forms validate before submission
- Mock data functions return empty arrays/null on not found
- No global error boundary (TODO for production)

## Cross-Cutting Concerns

**Logging:**
- Console.log for development debugging
- 4 instances need removal before production

**Validation:**
- Form-level validation in components
- No schema validation library (all manual)

**Authentication:**
- Context-based auth check
- No middleware protection (UI-only guards)
- localStorage persistence with cleanup

---

*Architecture analysis: 2026-01-12*
*Update when major patterns change*
