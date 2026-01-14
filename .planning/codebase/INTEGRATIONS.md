# External Integrations

**Analysis Date:** 2026-01-12

## APIs & External Services

**Payment Processing:**
- Stripe - Subscription billing UI (mock only)
  - SDK/Client: Not installed (UI placeholder)
  - Auth: Not configured
  - Status: UI ready at `src/app/business/dashboard/settings/account/checkout/page.tsx`
  - Mock data: `src/lib/mock-data/billing.ts`

**Email/SMS:**
- Not integrated (mock verification flows)
  - UI ready: Email verification at `src/components/features/emailVerification.tsx`
  - UI ready: Phone verification at `src/components/features/phoneVerification.tsx`
  - Backend team will integrate actual sending

**External APIs:**
- None currently integrated
- All data from mock layer

## Data Storage

**Databases:**
- Supabase (planned, not connected)
  - Connection: Not configured (no `.env` files)
  - Client: Not installed
  - Mock layer: 14 files in `src/lib/mock-data/` structured for Supabase schema
  - Backend team handles integration

**File Storage:**
- Cloudinary (configured, not connected)
  - Configuration: `next.config.ts` line 4-6 (`images.unoptimized: true`)
  - Schema fields: `Business.logoUrl`, `Business.coverImageUrl`, `Deal.imageUrl`
  - Current: Placeholder image URLs in mock data

**Caching:**
- localStorage for session persistence
  - Keys: `costfinders_auth`, `costfinders_saved_deals`
  - No Redis or server-side caching

## Authentication & Identity

**Auth Provider:**
- Mock authentication (built-in context)
  - Implementation: `src/lib/context/authContext.tsx`
  - Token storage: userId in localStorage
  - Session management: Context state + localStorage sync
  - Backend: Supabase Auth planned (not connected)

**OAuth Integrations:**
- None (planned for Supabase integration)

**Role System:**
- Three separate auth contexts:
  - Consumer: `src/lib/context/authContext.tsx`
  - Business: `src/lib/context/businessAuthContext.tsx`
  - Admin: `src/lib/context/adminAuthContext.tsx`

## Monitoring & Observability

**Error Tracking:**
- None configured
- Recommended: Sentry for production

**Analytics:**
- None configured
- Recommended: Mixpanel or Posthog

**Logs:**
- Console output only
- Vercel will capture stdout/stderr on deployment

## CI/CD & Deployment

**Hosting:**
- Vercel (configured)
  - Deployment: Git-based (push to main)
  - Environment vars: To be configured in Vercel dashboard

**CI Pipeline:**
- Not configured
  - No GitHub Actions workflows
  - Recommended: Add test + lint workflow

## Environment Configuration

**Development:**
- Required env vars: None (mock data only)
- Secrets location: Not applicable
- Mock/stub services: All data from `src/lib/mock-data/`

**Staging:**
- Not configured
- Same mock data as development

**Production:**
- Secrets management: Vercel environment variables (to be configured)
- Required for production:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
  - `STRIPE_SECRET_KEY` (when payment integrated)

## Webhooks & Callbacks

**Incoming:**
- Stripe webhooks (UI placeholder only)
  - Endpoint: Not implemented
  - Verification: Not implemented
  - Mock: `src/lib/mock-data/billing.ts` simulates events

**Outgoing:**
- None

## Integration Readiness Summary

| Service | UI Status | Backend Status | Integration Effort |
|---------|-----------|----------------|-------------------|
| Supabase Database | ✅ Mock layer ready | ❌ Not connected | Medium |
| Supabase Auth | ✅ Context pattern ready | ❌ Not connected | Low |
| Cloudinary | ✅ Config ready | ❌ Not connected | Low |
| Stripe | ✅ UI complete | ❌ Not connected | Medium |
| Email (SendGrid etc) | ✅ UI flows ready | ❌ Not connected | Low |
| SMS (Twilio etc) | ✅ UI flows ready | ❌ Not connected | Low |

---

*Integration audit: 2026-01-12*
*Update when adding/removing external services*
