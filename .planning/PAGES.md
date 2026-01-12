# CostFinders - Page Directory

> Complete list of all pages organized by user type.
> Mock auth - no password validation (any password works).
> Last updated: 2026-01-12

---

## Consumer

### Test Credentials

| Email | Notes |
|-------|-------|
| `sarah@example.com` | Fully verified, has favorites |
| `mike@example.com` | Email verified only |
| `new@example.com` | Unverified account |

→ Login at: `/dashboard` (or sign up with any email)

### Public Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage - hero section, location selector, mock data stats |
| `/deals` | Deal listing - filterable/sortable grid of medspa deals |
| `/deals/[id]` | Deal detail - full deal info, pricing breakdown, booking sidebar |

### Consumer Dashboard

| Route | Description |
|-------|-------------|
| `/dashboard` | Consumer home - quick links, verification status, account stats |
| `/dashboard/favorites` | Saved deals - user's favorited/bookmarked deals |
| `/dashboard/claims` | Deal claims - consumer's claimed/redeemed deals |
| `/dashboard/settings` | Account settings - profile, preferences, notifications |

---

## Business

### Test Credentials

| Email | Notes |
|-------|-------|
| `owner@luxeskin.com` | Verified, linked to Luxe Skin Studio |
| `owner@rejuvenate.com` | Verified, linked to Rejuvenate MedSpa |
| `owner@eliteaesthetics.com` | Verified, linked to Elite Aesthetics |
| `owner@beautylab.com` | Verified, linked to The Beauty Lab |
| `pending@medspa.com` | Pending verification/claim |
| `new@business.com` | Unverified, no claim |

→ Login at: `/business` → "Sign In" (or sign up with any email)

### Entry Points

| Route | Description |
|-------|-------------|
| `/business` | Business landing - value props, search/claim or create new business |
| `/business/create` | Create business - auth flow + new business registration form |
| `/business/claim/[businessId]` | Claim flow - verify ownership of existing business listing |

### Business Dashboard

| Route | Description |
|-------|-------------|
| `/business/dashboard` | Overview - key metrics (views, leads, deals), performance stats |
| `/business/dashboard/deals` | Manage deals - list all deals, create/edit/archive actions |
| `/business/dashboard/deals/new` | Create deal - new deal creation form |
| `/business/dashboard/deals/[dealId]/edit` | Edit deal - modify existing deal details |
| `/business/dashboard/deals/sponsored` | Sponsored deals - boost visibility, ad management |
| `/business/dashboard/leads` | Lead inbox - consumer inquiries and booking requests |
| `/business/dashboard/leads/[claimId]` | Lead detail - single lead/claim information |
| `/business/dashboard/leads/pricing` | Lead pricing - cost per lead, budget settings |
| `/business/dashboard/messages` | Messages - communication thread with consumers |
| `/business/dashboard/profile` | Business profile - edit public-facing business information |
| `/business/dashboard/analytics` | Analytics - performance metrics, charts, insights |
| `/business/dashboard/settings` | Settings hub - navigation to account and integrations |
| `/business/dashboard/settings/account` | Account settings - business account preferences |
| `/business/dashboard/settings/account/checkout` | Checkout/billing - payment methods, subscriptions |
| `/business/dashboard/settings/integrations` | Integrations - third-party service connections |

---

## Admin

### Test Credentials

| Email | Notes |
|-------|-------|
| `admin@costfinders.com` | Super admin |
| `moderator@costfinders.com` | Content moderator |
| `support@costfinders.com` | Support role |

→ Login at: `/admin`

### Admin Dashboard

| Route | Description |
|-------|-------------|
| `/admin` | Admin login - authentication for platform administrators |
| `/admin/dashboard` | Overview - platform metrics, pending moderation queue |
| `/admin/dashboard/businesses` | Business management - approve/manage all businesses |
| `/admin/dashboard/deals` | Deal moderation - review/approve submitted deals |
| `/admin/dashboard/users` | User management - consumer account administration |
| `/admin/dashboard/content` | Content hub - taxonomy management navigation |
| `/admin/dashboard/content/categories` | Categories - manage treatment categories |
| `/admin/dashboard/content/treatments` | Treatments - manage treatment types |
| `/admin/dashboard/content/locations` | Locations - manage cities/regions |
| `/admin/dashboard/data` | Data management - import/export, bulk operations |
| `/admin/dashboard/monetization` | Revenue overview - platform monetization metrics |
| `/admin/dashboard/monetization/business/[businessId]` | Business billing - individual business revenue details |
| `/admin/dashboard/reports` | Reports - analytics exports, platform insights |

---

## Summary

| User Type | Page Count |
|-----------|------------|
| Consumer (Public + Dashboard) | 7 |
| Business | 16 |
| Admin | 13 |
| **Total** | **36 pages** |

---

## File Structure

```
src/app/
├── page.tsx                          # /
├── deals/
│   ├── page.tsx                      # /deals
│   └── [id]/page.tsx                 # /deals/[id]
├── dashboard/
│   ├── page.tsx                      # /dashboard
│   ├── favorites/page.tsx            # /dashboard/favorites
│   ├── claims/page.tsx               # /dashboard/claims
│   └── settings/page.tsx             # /dashboard/settings
├── business/
│   ├── page.tsx                      # /business
│   ├── create/page.tsx               # /business/create
│   ├── claim/[businessId]/page.tsx   # /business/claim/[businessId]
│   └── dashboard/
│       ├── page.tsx                  # /business/dashboard
│       ├── deals/
│       │   ├── page.tsx              # /business/dashboard/deals
│       │   ├── new/page.tsx          # /business/dashboard/deals/new
│       │   ├── sponsored/page.tsx    # /business/dashboard/deals/sponsored
│       │   └── [dealId]/edit/page.tsx
│       ├── leads/
│       │   ├── page.tsx              # /business/dashboard/leads
│       │   ├── pricing/page.tsx      # /business/dashboard/leads/pricing
│       │   └── [claimId]/page.tsx
│       ├── messages/page.tsx         # /business/dashboard/messages
│       ├── profile/page.tsx          # /business/dashboard/profile
│       ├── analytics/page.tsx        # /business/dashboard/analytics
│       └── settings/
│           ├── page.tsx              # /business/dashboard/settings
│           ├── account/
│           │   ├── page.tsx          # /business/dashboard/settings/account
│           │   └── checkout/page.tsx
│           └── integrations/page.tsx
└── admin/
    ├── page.tsx                      # /admin
    └── dashboard/
        ├── page.tsx                  # /admin/dashboard
        ├── businesses/page.tsx       # /admin/dashboard/businesses
        ├── deals/page.tsx            # /admin/dashboard/deals
        ├── users/page.tsx            # /admin/dashboard/users
        ├── content/
        │   ├── page.tsx              # /admin/dashboard/content
        │   ├── categories/page.tsx
        │   ├── treatments/page.tsx
        │   └── locations/page.tsx
        ├── data/page.tsx             # /admin/dashboard/data
        ├── monetization/
        │   ├── page.tsx              # /admin/dashboard/monetization
        │   └── business/[businessId]/page.tsx
        └── reports/page.tsx          # /admin/dashboard/reports
```
