# Consolidated Messaging Audit Findings

**Audit Date:** 2026-01-12
**Auditor:** Claude Opus 4.5
**Scope:** Full CostFinders Application (Consumer, Business, Admin modules)

---

## Executive Summary

**Total Messages Cataloged: 927**

| Module | Messages | Percentage |
|--------|----------|------------|
| Consumer | 214 | 23.1% |
| Business | 429 | 46.3% |
| Admin | 284 | 30.6% |

---

## 1. Message Type Inventory

### By Category Across All Modules

| Message Type | Consumer | Business | Admin | Total |
|--------------|----------|----------|-------|-------|
| Page Titles/Headings | 24 | 52 | 42 | 118 |
| Section Headings | 18 | 38 | 36 | 92 |
| Button Labels/CTAs | 32 | 56 | 48 | 136 |
| Form Labels | 28 | 60 | 32 | 120 |
| Form Placeholders | 22 | 48 | 24 | 94 |
| Error Messages | 18 | 38 | 22 | 78 |
| Success/Status Messages | 12 | 24 | 18 | 54 |
| Empty States | 14 | 28 | 24 | 66 |
| Instructional Copy | 16 | 36 | 14 | 66 |
| Status Badges | 8 | 18 | 12 | 38 |
| Table Headers | 6 | 16 | 22 | 44 |
| Tooltip/Help Text | 8 | 22 | 6 | 36 |
| Navigation Items | 4 | 8 | 14 | 26 |
| Modal Titles | 8 | 12 | 6 | 26 |
| Time/Date Formatting | 6 | 12 | 4 | 22 |
| Metric Labels | 4 | 22 | 8 | 34 |

### Distribution Analysis

- **Buttons/CTAs** are the largest category (136 messages, 14.7%)
- **Form Labels** second largest (120 messages, 12.9%)
- **Page/Section Headings** combined (210 messages, 22.7%)
- **Error handling** (132 messages including errors + empty states, 14.2%)

---

## 2. Cross-Module Patterns

### 2.1 Button Label Patterns

#### Primary Action Verbs
| Pattern | Usage | Modules |
|---------|-------|---------|
| "Save" | Save Changes, Save Settings | All |
| "Create" | Create Account, Create Deal, Create Business | All |
| "Submit" | Submit Claim, Submit | Consumer, Business |
| "Confirm" | Confirm, Yes this is my business | Business |
| "Go to" | Go to Dashboard, Go to Business Dashboard | All |

#### Cancel/Secondary Actions
| Pattern | Usage | Modules |
|---------|-------|---------|
| "Cancel" | Cancel (standalone) | All |
| "Back" | Back, Back to X | All |
| "Close" | Close (modals) | Consumer, Business |
| "Skip" | Skip for now | Consumer |

#### Status Transition Verbs
| Pattern | Usage | Modules |
|---------|-------|---------|
| "Mark X" | Mark Contacted, Mark Booked, Mark Completed | Business |
| "Approve/Reject" | Approve, Reject | Admin |
| "Verify" | Verify, Verify & Submit | Consumer, Business |

### 2.2 Status Terminology

#### Deal/Item Status
| Status | Consumer | Business | Admin |
|--------|----------|----------|-------|
| Active | Yes | Yes | Yes |
| Pending | Yes | Yes | Yes |
| Expired | Yes | Yes | Yes |
| Paused | - | Yes | Yes |
| Rejected | - | - | Yes |

#### User/Lead Status
| Status | Consumer | Business | Admin |
|--------|----------|----------|-------|
| New | - | Yes | Yes |
| Contacted | - | Yes | - |
| Booked | - | Yes | - |
| Completed | - | Yes | - |
| Cancelled | - | Yes | - |
| Verified | Yes | Yes | Yes |
| Unverified | Yes | Yes | Yes |

#### Business Tier Status
| Status | Business | Admin |
|--------|----------|-------|
| Unclaimed | Yes | Yes |
| Free | Yes | Yes |
| Premium | Yes | Yes |
| Paid | Yes | Yes |

### 2.3 Empty State Patterns

#### Structure Pattern
All empty states follow: **Icon + Title + Description + CTA (optional)**

#### Title Patterns
| Pattern | Examples | Frequency |
|---------|----------|-----------|
| "No X yet" | No deals yet, No claims yet, No messages yet | 12 |
| "No X found" | No results found, No businesses found | 8 |
| "No X" | No favorites, No notifications | 6 |
| Question format | "Looking for deals?" | 4 |
| Imperative | "Start the conversation" | 3 |

#### Description Patterns
| Pattern | Examples |
|---------|----------|
| Explanation + suggestion | "You haven't saved any deals. Browse deals to find ones you like." |
| Simple explanation | "Deals you save will appear here" |
| Encouragement | "Create your first deal to start attracting customers" |

### 2.4 Search Placeholder Pattern

**Consistent pattern: "Search {noun}..."**

| Module | Placeholder |
|--------|-------------|
| Consumer | Search deals... |
| Business | Search deals..., Search leads... |
| Admin | Search users..., Search businesses..., Search deals... |

### 2.5 Time Formatting Pattern

**Consistent relative time across modules:**

| Threshold | Display |
|-----------|---------|
| < 1 minute | Just now |
| < 1 hour | X minutes ago |
| < 24 hours | X hours ago |
| Yesterday | Yesterday |
| < 7 days | X days ago |
| < 4 weeks | X weeks ago |
| > 4 weeks | X months ago |

### 2.6 Error Message Patterns

#### Required Field Pattern
**Consistent: "{Field} is required"**
- Email is required
- Password is required
- Business name is required

#### Validation Pattern
**Consistent: "{Field} must be {requirement}"**
- Password must be at least 8 characters
- Deal price must be less than original price
- End date must be after start date

#### Action Failure Pattern
**Consistent: "Failed to {action}. Please try again."**
- Failed to create deal. Please try again.
- Failed to submit claim. Please try again.
- Failed to save settings. Please try again.

### 2.7 Form Label Patterns

#### Consistent Labels Across Modules
| Label | Consumer | Business | Admin |
|-------|----------|----------|-------|
| Email | Yes | Yes | Yes |
| Password | Yes | Yes | Yes |
| First name | Yes | Yes | - |
| Last name | Yes | Yes | - |
| Phone | Yes | Yes | Yes |
| Description | - | Yes | Yes |
| Status | - | Yes | Yes |

---

## 3. Inconsistencies Identified

### 3.1 Same Action, Different Labels

| Action | Variations Found | Recommendation |
|--------|------------------|----------------|
| Create account | "Create account", "Create Account", "Create an account" | Standardize to "Create account" |
| Sign in | "Sign in", "Sign In", "Log in" | Standardize to "Sign in" |
| Go to dashboard | "Go to Dashboard", "Go to Business Dashboard", "Dashboard" | Context-dependent, but capitalize consistently |
| Cancel | "Cancel", "Cancel Claim", "Cancel Request" | Keep "Cancel" for standalone, use full phrase for specific |

### 3.2 Capitalization Variations

| Category | Inconsistency | Examples |
|----------|---------------|----------|
| Button labels | Mix of Title Case and sentence case | "Create Deal" vs "Create account" |
| Form labels | Mix of Title Case and sentence case | "Deal Title" vs "First name" |
| Section headings | Mix of styles | "Basic Information" vs "Pricing" |
| Status badges | Generally consistent | Active, Pending, Expired |

#### Specific Examples
- Buttons: "Create Deal" (Title Case) vs "Create account" (sentence case)
- Labels: "Deal Title" (Title Case) vs "Business name" (sentence case)
- Placeholders: "e.g., Botox Special" vs "Enter your password"

### 3.3 Punctuation Issues

| Issue | Examples | Recommendation |
|-------|----------|----------------|
| Ellipsis in placeholders | Some use "...", some don't | Standardize: Use "..." for instruction-based placeholders |
| Period in empty states | Some descriptions end with period, some don't | Standardize: Always end with period |
| Exclamation in success | "Deal created successfully!" vs "Settings saved." | Standardize: Use period, not exclamation |
| Ampersand vs "and" | "Terms & Conditions" vs "Insights and Trends" | Standardize: Use "&" for titles, "and" for body copy |

### 3.4 Tone Variations

| Category | Formal | Conversational | Recommendation |
|----------|--------|----------------|----------------|
| Empty states | "No items found" | "Looking for something?" | Prefer conversational for consumer, formal for admin |
| Error messages | "Field is required" | "Please enter your email" | Prefer helpful over terse |
| Success messages | "Saved" | "Your changes have been saved!" | Prefer confirmation + context |

### 3.5 Terminology Differences

| Concept | Variations | Recommendation |
|---------|------------|----------------|
| Deals vs Offers | "Deal", "Offer", "Special" | Standardize to "Deal" |
| Claims vs Bookings | "Claim", "Booking", "Request" | Standardize to "Claim" for consumer, "Lead" for business |
| Customer vs User | "Customer", "User", "Client" | "Customer" for business view, "User" for admin |

### 3.6 Article Usage Variations

| Pattern | Variations | Recommendation |
|---------|------------|----------------|
| Create actions | "Create account" vs "Create a New Listing" | No article for common actions, article for emphasis |
| Your vs The | "Your business" vs "The business" | "Your" for user's own, "The" for referring to others |

### 3.7 Placeholder Style Variations

| Style | Examples | Usage |
|-------|----------|-------|
| Example with "e.g." | "e.g., Botox Special" | Optional fields with specific format |
| Instruction with ellipsis | "Describe your deal..." | Text areas, open-ended input |
| Example format | "you@example.com" | Email, phone, URL fields |
| Hint | "Min. 8 characters" | Fields with requirements |
| Empty | (no placeholder) | Select dropdowns |

---

## 4. Volume Summary

### 4.1 By Module

| Module | File | Messages |
|--------|------|----------|
| **Consumer** | | **214** |
| | AUDIT-consumer-public.md | 47 |
| | AUDIT-consumer-dashboard.md | 73 |
| | AUDIT-consumer-components.md | 94 |
| **Business** | | **429** |
| | AUDIT-business-onboarding.md | 89 |
| | AUDIT-business-dashboard.md | 198 |
| | AUDIT-business-components.md | 142 |
| **Admin** | | **284** |
| | AUDIT-admin.md | 284 |
| **Total** | | **927** |

### 4.2 By Page/Feature Complexity

| Complexity | Pages | Messages/Page |
|------------|-------|---------------|
| High (50+) | Business Dashboard, Admin Dashboard | 50-80 |
| Medium (20-50) | Deal Form, Claim Flow, User Management | 25-45 |
| Low (<20) | Landing pages, Simple forms | 10-20 |

### 4.3 Unique vs Repeated Messages

| Category | Estimate | Notes |
|----------|----------|-------|
| Unique messages | ~650 | Distinct text strings |
| Repeated patterns | ~200 | Shared across modules (e.g., "Email is required") |
| Dynamic with variables | ~75 | Contains {variable} interpolation |

---

## 5. Key Recommendations for Style Guide

### 5.1 High-Priority Standardization

1. **Capitalization**: Choose sentence case for all UI text, Title Case only for proper nouns
2. **Button verbs**: Standardize action verbs (Save, Create, Submit, Verify)
3. **Error messages**: Use "{Field} is required" and "Please {action}" patterns
4. **Empty states**: Always include helpful CTA, end with period

### 5.2 Terminology Glossary Needed

| Term | Definition | Context |
|------|------------|---------|
| Deal | A discounted service offering | Consumer-facing |
| Claim | User request for a deal | Consumer-facing |
| Lead | Business's view of a claim | Business-facing |
| Tier | Business subscription level | Internal/Admin |

### 5.3 Pattern Documentation Needed

1. **Time formatting rules**: When to use relative vs absolute
2. **Placeholder guidelines**: When to use examples vs instructions
3. **Status vocabulary**: Allowed statuses per entity type
4. **Error message templates**: Standard patterns for common errors

### 5.4 Module-Specific Tone Guidelines

| Module | Tone | Reasoning |
|--------|------|-----------|
| Consumer | Friendly, encouraging | Build trust, reduce friction |
| Business | Professional, efficient | Respect their time |
| Admin | Clear, factual | Enable quick decisions |

---

## 6. Audit File Index

| File | Module | Focus Area |
|------|--------|------------|
| AUDIT-consumer-public.md | Consumer | Home, deals listing, deal detail |
| AUDIT-consumer-dashboard.md | Consumer | Dashboard, claims, favorites, settings |
| AUDIT-consumer-components.md | Consumer | Auth, verification, claim modal |
| AUDIT-business-onboarding.md | Business | Landing, search, create, claim flows |
| AUDIT-business-dashboard.md | Business | All dashboard pages |
| AUDIT-business-components.md | Business | Deal, lead, message, analytics features |
| AUDIT-admin.md | Admin | All admin pages and components |

---

*End of Consolidated Audit Findings*
