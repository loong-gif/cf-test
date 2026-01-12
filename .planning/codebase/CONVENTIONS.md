# Coding Conventions

**Analysis Date:** 2026-01-12

## Naming Patterns

**Files:**
- camelCase for all files (`dealCard.tsx`, `authContext.tsx`, `useGeolocation.ts`)
- No barrel files (index.ts) - import directly from source files
- `.tsx` for React components, `.ts` for utilities/types

**Functions:**
- camelCase for all functions (`handleClick`, `getDealsForBusiness`)
- `handle{Event}` for event handlers (`handleSubmit`, `handleFilterChange`)
- `use{Name}` for custom hooks (`useAuth`, `useLocation`, `useGeolocation`)

**Variables:**
- camelCase for variables (`searchQuery`, `isLoading`, `filteredDeals`)
- `is{Condition}` for booleans (`isAuthenticated`, `isOpen`, `isActive`)
- UPPER_SNAKE_CASE for constants (`STORAGE_KEY`, `SAVED_DEALS_KEY`)

**Types:**
- PascalCase for interfaces and types (`Consumer`, `Deal`, `BusinessOwner`)
- No `I` prefix for interfaces (`User` not `IUser`)
- `{Name}Props` for component props (`DealCardProps`, `ButtonProps`)

## Code Style

**Formatting:**
- Biome with `biome.json` configuration
- 2-space indentation
- Single quotes for strings
- No semicolons (omitted)
- 80 character line length soft target

**Linting:**
- Biome recommended rules enabled
- ESLint with `eslint-config-next`
- Organized imports enabled
- CSS linting disabled (Tailwind handles styling)

## Import Organization

**Order:**
1. React imports (`'use client'` directive first)
2. External packages (`next/link`, `@phosphor-icons/react`)
3. Internal components (`@/components/ui/`, `@/components/patterns/`)
4. Utilities and contexts (`@/lib/context/`, `@/lib/mock-data/`)
5. Types (`@/types`)

**Grouping:**
- Blank line between groups
- Related imports grouped together

**Path Aliases:**
- `@/` maps to `src/` (defined in `tsconfig.json`)
- Always use alias (`@/components/ui/button`) not relative (`../../ui/button`)

## Error Handling

**Patterns:**
- Try/catch in context providers with error state
- Form validation before submission
- Guard clauses for early returns

**Error Types:**
- Set `error` state in contexts for UI display
- No custom error classes
- Console.error for development debugging

## Logging

**Framework:**
- Console.log for development only
- No production logging library configured

**Patterns:**
- Debug logging in mock data functions
- Error logging in catch blocks
- TODO: Remove console.logs before production

## Comments

**When to Comment:**
- Section markers in components (`{/* Image Section */}`)
- Explain business logic (`// Return null if no areas available`)
- Document mock data behavior

**JSDoc/TSDoc:**
- Used in design tokens (`src/lib/design-tokens.ts`)
- Not required for internal functions

**TODO Comments:**
- None found (codebase is clean)
- Format if adding: `// TODO: description`

## Function Design

**Size:**
- Keep under 100 lines for components
- Extract helper functions for complex logic

**Parameters:**
- Destructure props directly: `function DealCard({ deal, onClick }: DealCardProps)`
- Use options object for 4+ parameters

**Return Values:**
- Early returns for guard clauses
- Explicit return for JSX components
- Return null for conditional rendering

## Module Design

**Exports:**
- Named exports for all components (`export function DealCard`)
- No default exports (aligns with Next.js pages which use default)
- Export types alongside components when related

**Barrel Files:**
- Not used - direct imports enforced
- Exception: `src/lib/mock-data/index.ts` re-exports data for convenience

## Layer Import Rules

| Layer | Can Import From |
|-------|----------------|
| `ui/` | External libraries only |
| `patterns/` | `ui/`, external libraries |
| `features/` | `ui/`, `patterns/`, `lib/`, external libraries |
| `layout/` | All layers |

**Violation Resolution:**
- If upward import needed, extract shared code to lower layer
- Never import features from other features (use shared patterns)

---

*Convention analysis: 2026-01-12*
*Update when patterns change*
