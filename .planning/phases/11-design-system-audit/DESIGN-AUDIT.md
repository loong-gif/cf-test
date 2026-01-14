# Design System Audit

> Generated: 2026-01-12
> Phase: 11-design-system-audit
> Purpose: Comprehensive inventory of design token violations and inconsistencies

---

## Executive Summary

The CostFinders codebase has **193 hardcoded color violations** across 8 semantic color categories. The design system defines CSS variables and Tailwind utilities for semantic colors (`--color-success`, `--color-warning`, `--color-error`, `--color-info`), but these are not consistently used throughout the codebase.

### Violation Statistics

| Category | Count | Priority |
|----------|-------|----------|
| Green (success) | 84 | HIGH |
| Red (error/danger) | 47 | HIGH |
| Amber (warning) | 38 | HIGH |
| Blue (info) | 11 | MEDIUM |
| Purple (accent) | 8 | LOW |
| Yellow (warning alt) | 3 | MEDIUM |
| Pink (accent) | 1 | LOW |
| Teal (accent) | 1 | LOW |
| **Total** | **193** | - |

### Root Cause Analysis

1. **Missing Tailwind utilities**: The `@theme inline` block in `globals.css` does not expose semantic colors (`success`, `warning`, `error`, `info`) as Tailwind utilities
2. **Badge component**: Uses hardcoded Tailwind colors instead of CSS variable-based tokens
3. **Inconsistent patterns**: Different files use different approaches for the same semantic meaning
4. **No linting enforcement**: No rules prevent hardcoded colors from being introduced

---

## Color Token Violations

### Red Colors (Error/Danger) - 47 instances

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/components/ui/button.tsx` | 20 | `bg-red-600 hover:bg-red-700` | danger button | `bg-error hover:bg-error/90` |
| `src/components/ui/badge.tsx` | 23 | `bg-red-500/10 border-red-500/20 text-red-400` | error badge | `bg-error/10 border-error/20 text-error` |
| `src/components/ui/input.tsx` | 38 | `border-red-500/50 focus:border-red-500` | error state | `border-error/50 focus:border-error` |
| `src/components/ui/input.tsx` | 48 | `text-red-400` | error message | `text-error` |
| `src/components/features/mockPaymentForm.tsx` | 101 | `bg-red-500` | mastercard logo | Keep (brand color) |
| `src/components/features/locationSelector.tsx` | 82 | `bg-red-500/10 border-red-500/20` | error container | `bg-error/10 border-error/20` |
| `src/components/features/locationSelector.tsx` | 86 | `text-red-400` | error icon | `text-error` |
| `src/components/features/locationSelector.tsx` | 88 | `text-red-400` | error text | `text-error` |
| `src/components/features/signInForm.tsx` | 121 | `text-red-400 bg-red-500/10` | error message | `text-error bg-error/10` |
| `src/components/features/claimDealModal.tsx` | 204 | `text-red-400 bg-red-400/10` | error message | `text-error bg-error/10` |
| `src/components/features/createBusinessForm.tsx` | 245 | `text-red-400` | required indicator | `text-error` |
| `src/components/features/createBusinessForm.tsx` | 263 | `border-red-500/50 focus:border-red-500` | error state | `border-error/50 focus:border-error` |
| `src/components/features/createBusinessForm.tsx` | 276 | `text-red-400` | error message | `text-error` |
| `src/components/features/billingHistory.tsx` | 164-167 | `bg-red-500/10 text-red-400` | payment failed | `bg-error/10 text-error` |
| `src/components/features/businessProfileForm.tsx` | 363, 381, 394 | various red-* | error states | `text-error`, `border-error/*` |
| `src/components/features/signUpForm.tsx` | 140 | `text-red-400 bg-red-500/10` | error message | `text-error bg-error/10` |
| `src/components/features/dealManagement/dealList.tsx` | 372 | `text-red-400 hover:text-red-300` | delete action | `text-error hover:text-error/80` |
| `src/components/features/paymentMethods.tsx` | 29 | `bg-red-500` | mastercard logo | Keep (brand color) |
| `src/components/features/paymentMethods.tsx` | 153 | `hover:text-red-400` | delete hover | `hover:text-error` |
| `src/components/features/claimBusinessFlow.tsx` | 311 | `text-red-400 bg-red-500/10` | error message | `text-error bg-error/10` |
| `src/components/features/dealManagement/dealForm.tsx` | 302, 308, 477, 483, 547, 548 | various red-* | error states | semantic tokens |
| `src/components/features/admin/businessTable.tsx` | 167 | `text-red-400` | destructive action | `text-error` |
| `src/components/patterns/saveButton.tsx` | 51 | `text-red-500` | saved/unsaved heart | Keep (intentional brand) |
| `src/components/features/admin/consumerTable.tsx` | 102 | `text-red-400` | destructive action | `text-error` |
| `src/app/business/create/page.tsx` | 241 | `text-red-400 bg-red-500/10` | error message | `text-error bg-error/10` |
| `src/app/admin/dashboard/reports/page.tsx` | 44, 248 | `text-red-400` | negative trend | `text-error` |
| `src/app/dashboard/settings/page.tsx` | 79-80, 118 | `bg-red-500/10 text-red-400` | sign out | `bg-error/10 text-error` |
| `src/app/dashboard/page.tsx` | 42 | `bg-red-500/10 text-red-400` | expired status | `bg-error/10 text-error` |
| `src/app/business/dashboard/page.tsx` | 31 | `text-red-400` | negative metric | `text-error` |
| `src/app/admin/dashboard/monetization/page.tsx` | 534, 540 | `text-red-400` | debit indicator | `text-error` |
| `src/app/admin/dashboard/data/page.tsx` | 143 | `text-red-400` | failure icon | `text-error` |
| `src/app/admin/dashboard/monetization/business/[businessId]/page.tsx` | 51-52 | `bg-red-500/10 text-red-400` | error state | `bg-error/10 text-error` |
| `src/app/business/dashboard/settings/account/page.tsx` | 282 | `text-red-400 hover:text-red-300 hover:bg-red-500/10` | cancel action | semantic tokens |

### Green Colors (Success) - 84 instances

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/components/ui/badge.tsx` | 21 | `bg-green-500/10 border-green-500/20 text-green-400` | success badge | `bg-success/10 border-success/20 text-success` |
| `src/components/features/businessInfo.tsx` | 104-107 | `bg-green-500/10 text-green-500` | verified status | `bg-success/10 text-success` |
| `src/components/features/pricingTierCard.tsx` | 108 | `text-green-400` | feature check | `text-success` |
| `src/components/features/claimDealModal.tsx` | 118-119 | `bg-green-500/10 text-green-500` | success icon | `bg-success/10 text-success` |
| `src/components/features/phoneVerification.tsx` | 148 | `text-green-400 bg-green-500/10` | success message | `text-success bg-success/10` |
| `src/components/features/mockPaymentForm.tsx` | 244 | `text-green-400` | secure indicator | `text-success` |
| `src/components/features/signInForm.tsx` | 115 | `text-green-400 bg-green-500/10` | success message | `text-success bg-success/10` |
| `src/components/features/admin/consumerTable.tsx` | 114 | `text-green-400` | positive action | `text-success` |
| `src/components/features/emailVerification.tsx` | 117, 177 | `text-green-400 bg-green-500/10` | success message | `text-success bg-success/10` |
| `src/components/features/admin/businessBillingOverride.tsx` | 355, 451 | `text-green-400` | credit indicator | `text-success` |
| `src/components/features/profileForm.tsx` | 95, 117, 148 | `text-green-500` | verified status | `text-success` |
| `src/app/dashboard/page.tsx` | 21, 86-87 | `bg-green-500/10 text-green-400` | active status | `bg-success/10 text-success` |
| `src/components/features/dealManagement/dealForm.tsx` | 539-540 | `bg-green-500/10 text-green-400` | success message | `bg-success/10 text-success` |
| `src/components/features/creditPurchaseModal.tsx` | 85, 133, 151-152 | various green-* | success states | semantic tokens |
| `src/components/features/claimCard.tsx` | 106-113 | various green-* | claimed status | semantic tokens |
| `src/components/features/dealModeration/dealModerationCard.tsx` | 221 | `bg-green-600 hover:bg-green-700` | approve button | `bg-success hover:bg-success/90` |
| `src/components/features/pricingBreakdown.tsx` | 35, 88-89 | `text-green-400` | savings display | `text-success` |
| `src/app/admin/dashboard/reports/page.tsx` | 44, 248 | `text-green-400` | positive trend | `text-success` |
| `src/components/features/businessProfileForm.tsx` | 478 | `text-green-500` | verified status | `text-success` |
| `src/components/features/leadPricingCard.tsx` | 69-92 | various green-* | positive indicator | semantic tokens |
| `src/components/features/admin/businessTable.tsx` | 179, 293, 363 | `text-green-400` | positive states | `text-success` |
| `src/components/features/claimBusinessFlow.tsx` | 490-491 | `bg-green-500/20 text-green-400` | success state | `bg-success/20 text-success` |
| `src/app/admin/dashboard/monetization/page.tsx` | 160, 217-218, 547 | various green-* | positive metrics | semantic tokens |
| `src/components/features/claimCTA.tsx` | 61-62 | `bg-green-500/10 text-green-500` | success state | `bg-success/10 text-success` |
| `src/app/business/create/page.tsx` | 309-310 | `bg-green-500/20 text-green-400` | success state | `bg-success/20 text-success` |
| `src/app/admin/dashboard/businesses/page.tsx` | 188 | `bg-green-500/10 text-green-400` | success toast | `bg-success/10 text-success` |
| `src/app/business/page.tsx` | 103 | `text-green-400` | positive indicator | `text-success` |
| `src/components/features/sponsoredDealConfig.tsx` | 276 | `text-green-400` | trend indicator | `text-success` |
| `src/app/business/dashboard/page.tsx` | 29 | `text-green-400` | positive metric | `text-success` |
| `src/app/admin/dashboard/deals/page.tsx` | 116 | `bg-green-500/10 text-green-400` | success toast | `bg-success/10 text-success` |
| `src/components/features/leadManagement/leadDetail.tsx` | 291-292, 305-306 | various green/blue | contact icons | semantic tokens |
| `src/app/business/dashboard/deals/sponsored/page.tsx` | 417 | `text-green-400` | trend indicator | `text-success` |
| `src/app/admin/dashboard/users/page.tsx` | 165 | `bg-green-500/10 text-green-400` | success toast | `bg-success/10 text-success` |
| `src/app/admin/dashboard/content/locations/page.tsx` | 167 | `bg-green-500/10 text-green-400` | success toast | `bg-success/10 text-success` |
| `src/app/admin/dashboard/monetization/business/[businessId]/page.tsx` | 123-124 | `bg-green-500/10 text-green-400` | positive metric | `bg-success/10 text-success` |
| `src/app/business/dashboard/settings/account/page.tsx` | 121-124, 160 | various green-* | success states | semantic tokens |
| `src/app/dashboard/settings/page.tsx` | 59-60 | `bg-green-500/10 text-green-400` | notification setting | `bg-success/10 text-success` |
| `src/app/business/dashboard/settings/account/checkout/page.tsx` | 58-59, 109, 144-145 | various green-* | success states | semantic tokens |
| `src/app/business/dashboard/settings/integrations/page.tsx` | 148 | `text-green-500` | connected status | `text-success` |
| `src/app/admin/dashboard/content/treatments/page.tsx` | 37 | `bg-green-500/10 text-green-400` | category color | Keep (category-specific) |
| `src/app/admin/dashboard/content/categories/page.tsx` | 165 | `bg-green-500/10 text-green-400` | success toast | `bg-success/10 text-success` |

### Amber/Yellow Colors (Warning) - 41 instances

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/components/ui/badge.tsx` | 22 | `bg-amber-500/10 border-amber-500/20 text-amber-400` | warning badge | `bg-warning/10 border-warning/20 text-warning` |
| `src/app/deals/[id]/page.tsx` | 99, 148-149 | `text-amber-400 bg-amber-400/10` | star rating | Keep (decorative) |
| `src/components/features/mockPaymentForm.tsx` | 102 | `bg-amber-500` | mastercard logo | Keep (brand color) |
| `src/components/features/businessInfo.tsx` | 47, 56 | `text-amber-400` | star rating | Keep (decorative) |
| `src/components/features/leadCreditsDisplay.tsx` | 71-73 | `bg-amber-500/5 text-amber-400` | low credits warning | `bg-warning/5 text-warning` |
| `src/components/features/alertPreferences.tsx` | 103 | `text-amber-500` | warning text | `text-warning` |
| `src/app/admin/dashboard/businesses/page.tsx` | 44, 50, 213-214 | various amber-* | highlight/pending | `bg-warning/10 text-warning` |
| `src/components/features/dealModeration/dealModerationCard.tsx` | 171-172 | `bg-amber-500/10 text-amber-400` | moderation notes | `bg-warning/10 text-warning` |
| `src/components/features/admin/businessBillingOverride.tsx` | 332-333 | `bg-amber-500/10 text-amber-400` | warning indicator | `bg-warning/10 text-warning` |
| `src/components/features/leadManagement/leadList.tsx` | 136 | `text-amber-400` | low credits | `text-warning` |
| `src/app/admin/dashboard/data/page.tsx` | 141 | `text-amber-400` | warning icon | `text-warning` |
| `src/components/features/claimCTA.tsx` | 140-141 | `bg-amber-400/10 text-amber-400` | locked indicator | `bg-warning/10 text-warning` |
| `src/components/features/paymentMethods.tsx` | 30 | `bg-amber-500` | mastercard logo | Keep (brand color) |
| `src/app/admin/dashboard/users/page.tsx` | 35, 41 | `bg-amber-500/10 text-amber-400` | highlight | `bg-warning/10 text-warning` |
| `src/components/features/admin/businessTable.tsx` | 281, 350 | `text-amber-400` | star rating | Keep (decorative) |
| `src/app/admin/dashboard/monetization/page.tsx` | 449-450 | `bg-amber-500/10 text-amber-400` | analytics icon | `bg-warning/10 text-warning` |
| `src/components/features/dealCard.tsx` | 109 | `text-amber-400` | star rating | Keep (decorative) |
| `src/app/admin/dashboard/page.tsx` | 63, 69, 209-210 | various amber-* | pending/highlight | `bg-warning/10 text-warning` |
| `src/app/admin/dashboard/content/treatments/page.tsx` | 35 | `bg-amber-500/10 text-amber-400` | category color | Keep (category-specific) |
| `src/app/business/dashboard/deals/sponsored/page.tsx` | 151 | `text-amber-400` | featured icon | Keep (decorative) |
| `src/app/business/dashboard/settings/account/page.tsx` | 235-236 | `bg-amber-500/10 text-amber-400` | warning indicator | `bg-warning/10 text-warning` |
| `src/app/dashboard/page.tsx` | 28, 35 | `bg-yellow-500/10 text-yellow-400` | pending status | `bg-warning/10 text-warning` |
| `src/components/features/analytics/analyticsDashboard.tsx` | 188 | `text-yellow-500` | star rating | Keep (decorative) |

### Blue Colors (Info) - 11 instances

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/components/ui/badge.tsx` | 24 | `bg-blue-500/10 border-blue-500/20 text-blue-400` | info badge | `bg-info/10 border-info/20 text-info` |
| `src/components/features/mockPaymentForm.tsx` | 93, 108 | `bg-blue-600 bg-blue-500` | card brand logos | Keep (brand color) |
| `src/components/features/paymentMethods.tsx` | 21, 36 | `bg-blue-600 bg-blue-500` | card brand logos | Keep (brand color) |
| `src/components/features/creditPurchaseModal.tsx` | 111 | `bg-blue-600` | card icon | Keep (brand color) |
| `src/app/dashboard/page.tsx` | 101-102 | `bg-blue-500/10 text-blue-400` | profile icon | `bg-info/10 text-info` |
| `src/components/features/leadManagement/leadDetail.tsx` | 305-306 | `bg-blue-500/10 text-blue-500` | phone icon | `bg-info/10 text-info` |
| `src/app/admin/dashboard/content/treatments/page.tsx` | 36 | `bg-blue-500/10 text-blue-400` | category color | Keep (category-specific) |

### Purple Colors (Accent) - 8 instances

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/components/features/admin/businessBillingOverride.tsx` | 390-391 | `bg-purple-500/10 text-purple-400` | history icon | Consider brand token |
| `src/app/admin/dashboard/monetization/page.tsx` | 351-352, 401 | various purple-* | enterprise tier | Consider brand token |
| `src/app/admin/dashboard/monetization/business/[businessId]/page.tsx` | 135-136 | `bg-purple-500/10 text-purple-400` | users icon | Consider brand token |
| `src/app/admin/dashboard/content/treatments/page.tsx` | 33 | `bg-purple-500/10 text-purple-400` | category color | Keep (category-specific) |

### Pink Colors (Accent) - 1 instance

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/app/admin/dashboard/content/treatments/page.tsx` | 34 | `bg-pink-500/10 text-pink-400` | category color | Keep (category-specific) |

### Teal Colors (Accent) - 1 instance

| File | Line | Current Value | Semantic Intent | Recommended Fix |
|------|------|---------------|-----------------|-----------------|
| `src/app/admin/dashboard/content/treatments/page.tsx` | 38 | `bg-teal-500/10 text-teal-400` | category color | Keep (category-specific) |

---

## Spacing Violations

### Arbitrary Pixel Values - 11 instances

| File | Line | Current Value | Context | Recommendation |
|------|------|---------------|---------|----------------|
| `src/components/features/mockPaymentForm.tsx` | 94 | `text-[8px]` | visa logo | Accept (brand constraint) |
| `src/components/features/mockPaymentForm.tsx` | 109 | `text-[6px]` | amex logo | Accept (brand constraint) |
| `src/components/features/mockPaymentForm.tsx` | 145 | `top-[34px]` | icon position | Review for spacing token |
| `src/components/features/analytics/analyticsDashboard.tsx` | 191 | `max-w-[200px]` | truncate width | Accept (content-specific) |
| `src/components/features/messaging/messageThread.tsx` | 90 | `h-[400px]` | fixed height | Review for viewport-relative |
| `src/components/features/messaging/messageThread.tsx` | 155 | `min-h-[42px] max-h-[120px]` | textarea sizing | Accept (input constraint) |
| `src/components/features/messaging/messageThread.tsx` | 166 | `h-[42px]` | button height | Accept (matching input) |
| `src/components/features/paymentMethods.tsx` | 22, 37 | `text-[10px]`, `text-[8px]` | card logos | Accept (brand constraint) |
| `src/components/features/businessSearchModal.tsx` | 107 | `min-h-[200px] max-h-[400px]` | modal content | Review for responsive |
| `src/app/admin/dashboard/data/page.tsx` | 450 | `min-w-[600px]` | table width | Accept (data table) |
| `src/app/business/dashboard/leads/pricing/page.tsx` | 97 | `max-w-[40px]` | bar width | Accept (chart constraint) |

**Assessment**: Most arbitrary values are justified by specific content requirements (brand logos, data tables, charts). Low priority for remediation.

---

## Header/Navigation Inconsistencies

### GlobalHeader Visibility

| Page Type | GlobalHeader Visible | Own Header | Notes |
|-----------|---------------------|------------|-------|
| Public pages (`/`, `/deals`, `/deals/[id]`) | Yes | No | Correct behavior |
| Consumer dashboard (`/dashboard/*`) | **Hidden** | `DashboardSidebar` | Intentional - has sidebar nav |
| Business dashboard (`/business/dashboard/*`) | **Hidden** | `BusinessDashboardSidebar` | Intentional - has sidebar nav |
| Admin dashboard (`/admin/dashboard/*`) | **Hidden** | `AdminDashboardSidebar` | Intentional - has sidebar nav |
| Business public (`/business`, `/business/create`, `/business/claim/*`) | Yes | No | Correct behavior |
| Admin login (`/admin`) | Yes | No | Correct behavior |

### Header Hiding Logic

The GlobalHeader hides itself based on pathname:
```typescript
// src/components/layout/globalHeader.tsx:21
if (pathname.startsWith('/dashboard')) {
  return null
}
```

**Issue**: This only checks for `/dashboard` but not `/business/dashboard` or `/admin/dashboard`. However, the GlobalHeader is in the root layout, and the dashboard layouts have their own full-page structure that overlays correctly.

**Assessment**: Current behavior is intentional and correct. Dashboards use sidebars for navigation, public pages use the GlobalHeader.

---

## Component Pattern Deviations

### Inline Styles - 6 instances

| File | Line | Usage | Justification |
|------|------|-------|---------------|
| `src/components/features/messaging/messageThread.tsx` | 156 | Text area resize | Required for dynamic height |
| `src/components/features/leadCreditsDisplay.tsx` | 59 | Progress bar width | Dynamic percentage |
| `src/components/ui/tooltip.tsx` | 113 | Position calculation | Dynamic positioning |
| `src/app/admin/dashboard/reports/page.tsx` | 276 | Bar chart width | Dynamic percentage |
| `src/app/business/dashboard/deals/sponsored/page.tsx` | 431 | Progress bar width | Dynamic percentage |
| `src/app/business/dashboard/leads/pricing/page.tsx` | 98 | Bar chart height | Dynamic value |

**Assessment**: All inline styles are for dynamic values that cannot be pre-defined. This is acceptable usage.

---

## Priority Ranking

### HIGH Priority (User-Facing, Semantic Meaning)

1. **Badge component** (`src/components/ui/badge.tsx`)
   - 4 hardcoded color variants (success, warning, error, info)
   - Used throughout the app for status display
   - **Impact**: Inconsistent semantic colors across all badges

2. **Input component** (`src/components/ui/input.tsx`)
   - Hardcoded red for error states
   - **Impact**: Error styling not themeable

3. **Button component** (`src/components/ui/button.tsx`)
   - Hardcoded red for danger variant
   - **Impact**: Danger buttons not themeable

4. **Form error messages** (multiple files)
   - 15+ instances of hardcoded `text-red-400`
   - **Impact**: Error feedback inconsistent

5. **Success toasts/messages** (multiple files)
   - 20+ instances of hardcoded green
   - **Impact**: Success feedback inconsistent

### MEDIUM Priority (Internal/Admin, Consistent Pattern)

1. **Admin dashboard metrics** (8 files)
   - Positive/negative indicators using hardcoded colors
   - **Impact**: Admin experience inconsistent

2. **Status indicators** (7 files)
   - Active/inactive states using hardcoded colors
   - **Impact**: Status meaning not clear through tokens

### LOW Priority (Decorative, Intentional)

1. **Star ratings** (5 files)
   - Using amber-400 for stars
   - **Assessment**: Could use a `--color-rating` token but not critical

2. **Card brand logos** (3 files)
   - Using specific brand colors (Visa blue, Mastercard red/amber)
   - **Assessment**: Keep as-is (brand compliance)

3. **Treatment category colors** (1 file)
   - Using varied colors for visual distinction
   - **Assessment**: Keep as-is (intentional variety)

---

## Remediation Roadmap

### Phase 11-02: Add Semantic Color Tokens to Tailwind
1. Add `success`, `warning`, `error`, `info` to `@theme inline`
2. Create Tailwind utilities for semantic colors
3. Update `design-tokens.ts` with examples

### Phase 11-03: Update Core UI Components
1. Badge component - use semantic tokens
2. Input component - use semantic tokens
3. Button component - use semantic tokens

### Phase 12-15: Systematic File Updates
1. Update form components (createBusinessForm, businessProfileForm, etc.)
2. Update feature components (claimDealModal, signInForm, etc.)
3. Update admin dashboard pages
4. Update consumer/business pages

---

## Files Requiring Changes

### Core Components (3 files)
- `src/components/ui/badge.tsx` - 4 color variants
- `src/components/ui/input.tsx` - error styling
- `src/components/ui/button.tsx` - danger variant

### Feature Components (25 files)
- `src/components/features/locationSelector.tsx`
- `src/components/features/signInForm.tsx`
- `src/components/features/signUpForm.tsx`
- `src/components/features/claimDealModal.tsx`
- `src/components/features/createBusinessForm.tsx`
- `src/components/features/businessProfileForm.tsx`
- `src/components/features/billingHistory.tsx`
- `src/components/features/phoneVerification.tsx`
- `src/components/features/emailVerification.tsx`
- `src/components/features/claimBusinessFlow.tsx`
- `src/components/features/claimCard.tsx`
- `src/components/features/claimCTA.tsx`
- `src/components/features/creditPurchaseModal.tsx`
- `src/components/features/pricingBreakdown.tsx`
- `src/components/features/profileForm.tsx`
- `src/components/features/leadCreditsDisplay.tsx`
- `src/components/features/admin/businessTable.tsx`
- `src/components/features/admin/consumerTable.tsx`
- `src/components/features/admin/businessBillingOverride.tsx`
- `src/components/features/dealManagement/dealList.tsx`
- `src/components/features/dealManagement/dealForm.tsx`
- `src/components/features/dealModeration/dealModerationCard.tsx`
- `src/components/features/leadManagement/leadDetail.tsx`
- `src/components/features/leadManagement/leadList.tsx`
- `src/components/features/paymentMethods.tsx`

### Page Files (15 files)
- `src/app/dashboard/page.tsx`
- `src/app/dashboard/settings/page.tsx`
- `src/app/business/create/page.tsx`
- `src/app/business/page.tsx`
- `src/app/business/dashboard/page.tsx`
- `src/app/business/dashboard/settings/account/page.tsx`
- `src/app/business/dashboard/settings/account/checkout/page.tsx`
- `src/app/business/dashboard/settings/integrations/page.tsx`
- `src/app/admin/dashboard/page.tsx`
- `src/app/admin/dashboard/deals/page.tsx`
- `src/app/admin/dashboard/users/page.tsx`
- `src/app/admin/dashboard/businesses/page.tsx`
- `src/app/admin/dashboard/reports/page.tsx`
- `src/app/admin/dashboard/monetization/page.tsx`
- `src/app/admin/dashboard/monetization/business/[businessId]/page.tsx`

---

## Metrics for Success

After remediation:
- [ ] Zero hardcoded semantic colors (red, green, amber, blue for states)
- [ ] All status badges use semantic tokens
- [ ] All form errors use semantic tokens
- [ ] All success messages use semantic tokens
- [ ] Decorative colors documented as intentional exceptions
