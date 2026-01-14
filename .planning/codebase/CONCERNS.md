# Codebase Concerns

**Analysis Date:** 2026-01-12

## Tech Debt

**Console.log statements in production code:**
- Issue: 4 console.log statements need removal before production
- Files:
  - `src/app/business/dashboard/settings/account/page.tsx` (lines 76, 87, 92)
  - `src/app/admin/dashboard/data/page.tsx` (line 195)
- Why: Debug logging during development
- Impact: Exposes internal state to browser console
- Fix approach: Remove all console.log calls, add proper logging service if needed

**localStorage used for authentication:**
- Issue: Auth state persisted in localStorage instead of httpOnly cookies
- Files:
  - `src/lib/context/authContext.tsx` (STORAGE_KEY constant)
  - `src/lib/context/businessAuthContext.tsx`
- Why: Simplified mock implementation
- Impact: XSS vulnerability in production, tokens accessible to JS
- Fix approach: Switch to httpOnly cookies when integrating Supabase Auth

## Known Bugs

**None identified**
- Codebase scanned for TODO/FIXME comments: 0 found
- All planned features implemented per PROJECT.md

## Security Considerations

**Client-side auth guards only:**
- Risk: Dashboard routes rely on context checks, no server middleware
- Files:
  - `src/app/dashboard/layout.tsx`
  - `src/app/business/dashboard/layout.tsx`
  - `src/app/admin/dashboard/layout.tsx`
- Current mitigation: Mock data only, no real sensitive data
- Recommendations: Add Next.js middleware with Supabase session verification

**No input sanitization:**
- Risk: Form inputs not sanitized before storage
- Files: All form components in `src/components/features/`
- Current mitigation: Mock data layer (no real database)
- Recommendations: Add sanitization library (DOMPurify) when connecting backend

## Performance Bottlenecks

**No significant bottlenecks identified**
- Mock data queries are O(n) array operations
- All operations synchronous and fast
- Production consideration: Add database indexing when migrating to Supabase

## Fragile Areas

**Context provider nesting order:**
- File: `src/app/layout.tsx`
- Why fragile: Provider order matters (LocationProvider → AuthProvider → BusinessAuthProvider → ClaimsProvider)
- Common failures: Moving providers can break hook access
- Safe modification: Don't reorder without understanding dependencies
- Test coverage: None

**Mock data array mutations:**
- Files: `src/lib/mock-data/deals.ts`, `src/lib/mock-data/claims.ts`
- Why fragile: In-memory arrays modified during session
- Common failures: Data doesn't persist across page reloads
- Safe modification: All modifications are intentional for session behavior
- Note: Backend integration will replace with real persistence

## Scaling Limits

**Browser localStorage:**
- Current capacity: 5-10MB typical browser limit
- Limit: Large favorites/claims lists could hit storage quota
- Symptoms at limit: Silent failures on storage operations
- Scaling path: Move to server-side storage with Supabase

## Dependencies at Risk

**No critical dependency risks identified**
- All dependencies are actively maintained
- React 19 and Next.js 16 are latest stable
- Phosphor Icons actively maintained

## Missing Critical Features

**No test infrastructure:**
- Problem: Zero test files, no test framework configured
- Current workaround: Manual testing
- Blocks: CI/CD pipeline, regression prevention
- Implementation complexity: Low (add Vitest + testing-library)

**No error boundaries:**
- Problem: Component errors crash entire page
- Current workaround: Careful development
- Blocks: Graceful error recovery in production
- Implementation complexity: Low (add React error boundaries)

**No .env.example file:**
- Problem: New developers don't know required environment variables
- Current workaround: Documentation in CLAUDE.md
- Blocks: Smooth onboarding
- Implementation complexity: Very low (create template file)

## Test Coverage Gaps

**All code untested:**
- What's not tested: Everything (0% coverage)
- Risk: Regressions undetected, refactoring risky
- Priority: High
- Difficulty to test: Low (mock data layer simplifies testing)

**Priority testing targets:**
1. `src/lib/context/authContext.tsx` - Critical auth logic
2. `src/lib/context/businessAuthContext.tsx` - Business auth flow
3. `src/lib/mock-data/utils.ts` - Data transformation functions
4. `src/components/features/signUpForm.tsx` - Form validation

## Documentation Gaps

**No README.md:**
- Problem: No setup instructions or project overview
- Impact: Onboarding friction for new developers
- Recommendation: Create README with setup steps, mock data explanation

**No inline API documentation:**
- Problem: Context providers lack JSDoc comments
- Impact: Must read implementation to understand usage
- Recommendation: Add JSDoc to public context exports

---

*Concerns audit: 2026-01-12*
*Update as issues are fixed or new ones discovered*
