# Testing Patterns

**Analysis Date:** 2026-01-12

## Test Framework

**Runner:**
- None configured

**Assertion Library:**
- None configured

**Run Commands:**
```bash
# No test scripts defined in package.json
# npm test would need to be added
```

## Test File Organization

**Location:**
- No test files exist in `src/`
- No `__tests__/` directories
- No `tests/` directory at root

**Naming:**
- Not established (no existing tests)
- Recommended: `*.test.ts` alongside source files

**Structure:**
- Not established

## Test Structure

**Suite Organization:**
Not established. Recommended pattern:

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('ComponentName', () => {
  describe('functionName', () => {
    beforeEach(() => {
      // reset state
    })

    it('should handle expected input', () => {
      // arrange
      // act
      // assert
    })

    it('should throw on invalid input', () => {
      expect(() => functionCall()).toThrow('error')
    })
  })
})
```

**Patterns:**
- Not established (recommend arrange/act/assert)

## Mocking

**Framework:**
- Not established (recommend Vitest `vi` mock utilities)

**Patterns:**
- Mock data layer exists: `src/lib/mock-data/`
- Components already use mock data (facilitates testing)

**What to Mock:**
- localStorage operations
- Context providers
- External navigation (Next.js router)

**What NOT to Mock:**
- Mock data layer (already fake data)
- Pure utility functions

## Fixtures and Factories

**Test Data:**
- Extensive mock data available in `src/lib/mock-data/`
- Can be used directly for tests:
  - `consumers.ts` - Test users with various verification states
  - `deals.ts` - Test deals with different categories/statuses
  - `businesses.ts` - Test businesses with different tiers

**Location:**
- Recommended: Create factories in `tests/factories/` or use existing mock data

## Coverage

**Requirements:**
- None established
- Recommended: 80% for critical paths (auth, claims, data transforms)

**Configuration:**
- Not configured
- Recommended: Add Vitest with built-in coverage

**View Coverage:**
```bash
# After configuring Vitest:
# npm run test:coverage
# open coverage/index.html
```

## Test Types

**Unit Tests:**
- Not implemented
- Priority targets:
  - Context providers (`src/lib/context/`)
  - Data transformations (`toAnonymousDeal()`)
  - Form validation logic

**Integration Tests:**
- Not implemented
- Priority targets:
  - Auth flow (sign up → verify → access dashboard)
  - Claim flow (view deal → create account → claim)

**E2E Tests:**
- Not implemented
- Recommended: Playwright for critical user journeys
- Priority: Deal browse → account creation → claim completion

## Common Patterns

**Async Testing:**
```typescript
// Recommended pattern for async context operations
it('should handle async operation', async () => {
  const { result } = renderHook(() => useAuth())
  await act(async () => {
    await result.current.signIn('test@example.com', 'password')
  })
  expect(result.current.isAuthenticated).toBe(true)
})
```

**Error Testing:**
```typescript
// Recommended pattern for validation errors
it('should show error on invalid email', () => {
  render(<SignUpForm />)
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'invalid' } })
  fireEvent.click(screen.getByText('Sign Up'))
  expect(screen.getByText('Invalid email format')).toBeInTheDocument()
})
```

**Snapshot Testing:**
- Not recommended for this codebase
- Prefer explicit assertions for glassmorphic styling

## Recommendations for Implementation

**Phase 1: Foundation**
1. Install Vitest: `npm install -D vitest @testing-library/react @testing-library/jest-dom`
2. Create `vitest.config.ts` with React preset
3. Add test script to `package.json`

**Phase 2: Critical Path Tests**
1. Test auth contexts (`authContext.test.ts`, `businessAuthContext.test.ts`)
2. Test data transforms (`utils.test.ts` for `toAnonymousDeal`)
3. Test form validations

**Phase 3: Component Tests**
1. Test feature components with user interactions
2. Test conditional rendering based on auth state

**Priority Files for Testing:**
- `src/lib/context/authContext.tsx` - Consumer authentication
- `src/lib/context/businessAuthContext.tsx` - Business authentication
- `src/lib/mock-data/utils.ts` - Data transformations
- `src/components/features/signUpForm.tsx` - Form validation
- `src/components/features/dealCard.tsx` - Rendering logic

---

*Testing analysis: 2026-01-12*
*Update when test infrastructure is added*
