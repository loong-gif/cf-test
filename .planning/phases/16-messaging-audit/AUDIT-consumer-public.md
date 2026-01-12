# Consumer Public Pages Messaging Audit

Phase 16-01: Consumer module messaging audit
Generated: 2026-01-12

---

## Summary

| Page | Messages Cataloged |
|------|-------------------|
| Home (`src/app/page.tsx`) | 7 |
| Deals Listing (`src/app/deals/page.tsx`) | 15 |
| Deal Detail (`src/app/deals/[id]/page.tsx`) | 25 |
| **Total** | **47** |

---

## Home Page (`src/app/page.tsx`)

### Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Hero H1 | Page Title | "Find MedSpa Deals Near You" | Main value proposition |
| Hero Subtitle | Tagline | "Compare prices and discover savings on aesthetic treatments" | Supporting copy |
| Location Card H2 | Section Title | "Location Selector Test" | DEV: Test label, needs production copy |
| Mock Data Card H2 | Section Title | "Mock Data Test" | DEV: Test label, needs production copy |

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats List | Data Label | "Active deals:" | Dynamic count follows |
| Stats List | Data Label | "Active cities:" | Dynamic count follows |
| Stats List | Data Label | "Featured deals:" | Dynamic count follows |

---

## Deals Listing Page (`src/app/deals/page.tsx`)

### Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page H1 (with location) | Page Title | "Deals Near You" | Shown when city selected |
| Page H1 (no location) | Page Title | "All Deals" | Fallback when no city |

### Location Display

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Location Indicator | Dynamic | "{city.name}" / "All Locations" | Context-dependent |

### Filter Controls

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter Button | Button Label | "Filters" | FilterPanel component |
| Clear Button | Button Label | "Clear all" | FilterPanel component |

### Category Filter Labels (categoryFilter.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category Chip | Filter Label | "All Deals" | Default category |
| Category Chip | Filter Label | "Botox" | Treatment category |
| Category Chip | Filter Label | "Fillers" | Treatment category |
| Category Chip | Filter Label | "Facials" | Treatment category |
| Category Chip | Filter Label | "Laser" | Treatment category |

### Sort Options (sortSelector.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Sort Dropdown | Option Label | "Most Popular" | Default sort |
| Sort Dropdown | Option Label | "Newest" | Sort option |
| Sort Dropdown | Option Label | "Biggest Discount" | Sort option |
| Sort Dropdown | Option Label | "Price: Low to High" | Sort option |
| Sort Dropdown | Option Label | "Price: High to Low" | Sort option |

### Empty State (dealsGrid.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty State H3 | Heading | "No deals found" | Empty results |
| Empty State P | Instructional | "Try adjusting your filters or location to see more deals in your area." | Help text |

### Results Count

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Results Counter | Status | "{count} deal found" / "{count} deals found" | Singular/plural handling |

### View Toggle (ARIA)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Grid Button | ARIA Label | "Grid view" | Accessibility |
| List Button | ARIA Label | "List view" | Accessibility |

### Price Range Filter (priceRangeFilter.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Fieldset Legend | Field Label | "Price Range" | Filter section |
| Min Input | Placeholder | "Min" | Price input |
| Max Input | Placeholder | "Max" | Price input |
| Min Input | ARIA Label | "Minimum price" | Accessibility |
| Max Input | ARIA Label | "Maximum price" | Accessibility |

---

## Deal Detail Page (`src/app/deals/[id]/page.tsx`)

### Navigation

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Back Link | Navigation | "Back to deals" | Breadcrumb-style nav |

### Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category Badge | Label | "{categoryLabels[category]}" | Dynamic: Botox, Fillers, Facials, Laser, Body, Skincare |
| Featured Badge | Label | "Featured" | Conditional |
| Sponsored Badge | Label | "Sponsored" | Conditional |

### Meta Information

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Rating Display | Status | "{rating} ({count} reviews)" | Dynamic |
| Claim Count | Status | "{count} claimed" | Social proof |

### Section Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Description Card H2 | Section Title | "About This Deal" | Deal description section |
| Terms Card H2 | Section Title | "Terms & Conditions" | Legal/restrictions section |

### Pricing Breakdown (pricingBreakdown.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Discount Badge | Label | "{percent}% OFF" | Dynamic discount |
| Savings Text | Status | "Save ${amount}" | Dynamic savings |
| Unit Requirements Header | Section Title | "Unit Requirements" | When units applicable |
| Minimum Units Label | Label | "Minimum" | Unit constraint |
| Maximum Units Label | Label | "Maximum" | Unit constraint |
| Unit Value | Label | "{count} units" | Dynamic |
| Example Header | Section Title | "Example: {count} units" | Calculation example |
| Regular Price Label | Label | "Regular price" | Comparison pricing |
| Deal Price Label | Label | "Deal price" | Active price |
| Savings Label | Label | "You save" | Savings callout |
| Validity Text | Date Range | "Valid: {startDate} — {endDate}" | Dynamic dates |

### Verified Business Card

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Verified Title | Label | "Verified Business" | Trust indicator |
| Verified Subtitle | Label | "Premium partner" | Business tier indicator |

### Blurred Image Overlay (blurredImage.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Lock Message | CTA Prompt | "Unlock with account" | Auth wall teaser |

---

## Location Selector Component (locationSelector.tsx)

Used on home page and potentially deal listing.

### Buttons

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Detect Button (idle) | Button Label | "Use my location" | Geolocation trigger |
| Detect Button (loading) | Button Label | "Detecting location..." | Loading state |

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Divider | Separator | "or" | Between detection and manual |
| City Picker | Placeholder | "Select a city" | Dropdown placeholder |
| Area Filter Label | Label | "Filter by area:" | Area refinement |
| Detection Info | Instructional | "Detected nearest city based on your coordinates" | Context info |

---

## Auth Wall / Claim CTA Component (claimCTA.tsx)

Displayed on deal detail page for anonymous users.

### Anonymous User State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| CTA Title | Heading | "Business Details Hidden" | Value proposition |
| CTA Description | Body Copy | "Create a free account to reveal the business name, location, and contact details — then claim this deal." | Conversion copy |
| Primary Button | CTA | "Create Free Account" | Main action |
| Secondary Link | CTA | "Already have an account? Sign in" | Sign in prompt |
| Trust Text | Reassurance | "Your information is secure and never shared without permission." | Privacy assurance |

### Verification Required State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| CTA Title | Heading | "Verification Required" | Blocker message |
| CTA Description | Body Copy | "Please verify your email or phone to claim this deal." | Instruction |
| Button | CTA | "Complete Verification" | Action |

### Ready to Claim State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| CTA Title | Heading | "Ready to Claim" | Success state |
| CTA Description | Body Copy | "Submit your claim and the business will contact you to schedule your appointment." | Next steps |
| Button | CTA | "Claim This Deal" | Primary action |

### Already Claimed State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| CTA Title | Heading | "Already Claimed" | Confirmation |
| CTA Description | Body Copy | "You've already submitted a claim for this deal." | Status info |
| Status Display | Status | "Status: {status}" | Dynamic status |
| Button | CTA | "View My Claims" | Navigation |

---

## Business Info Component (businessInfo.tsx)

Displayed for verified users on deal detail page.

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Verified Badge | Label | "Verified" | Trust indicator |
| Rating Display | Status | "{rating} ({count} reviews)" | Social proof |

### Claimed State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success Banner | Status | "Deal Claimed" | Confirmation |
| Status Display | Status | "Status: {status}" | Dynamic |
| Button | CTA | "View My Claims" | Navigation |

### Unclaimed State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Button | CTA | "Claim This Deal" | Primary action |

---

## Key Observations

1. **DEV Labels**: Home page has test section headings ("Location Selector Test", "Mock Data Test") that need production copy
2. **Consistent CTAs**: "Claim This Deal" used consistently across claim flows
3. **Trust Language**: Privacy reassurance included in auth wall ("Your information is secure...")
4. **Dynamic Pluralization**: Proper singular/plural handling for "deal/deals"
5. **State-Based Messaging**: Different copy for each auth/claim state (anonymous, unverified, verified, claimed)
6. **Accessibility**: ARIA labels present for interactive elements (view toggle, sort dropdown)

---

*End of Consumer Public Pages Audit*
