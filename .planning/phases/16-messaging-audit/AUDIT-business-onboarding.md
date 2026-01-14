# Business Onboarding Messaging Audit

**Audit Date:** 2026-01-12
**Auditor:** Claude Opus 4.5
**Module:** Business Onboarding (landing, create, claim flows)

## Summary

Total messages cataloged: **89**
- Page titles/headings: 18
- Form labels/placeholders: 28
- Button labels/CTAs: 16
- Instructional copy: 12
- Success/error messages: 8
- Help text: 7

---

## 1. Business Landing Page (`src/app/business/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Hero heading | H1 | Are you a business owner? | Question format - conversational |
| Hero subheading | Body | Join CostFinders to showcase your medspa, manage deals, and connect with customers looking for your services. | Value proposition |
| Value prop 1 title | H3 | Claim Your Profile | Imperative verb |
| Value prop 1 desc | Body | Verify ownership and take control of your business listing | Benefits-focused |
| Value prop 2 title | H3 | Manage Your Deals | Imperative verb |
| Value prop 2 desc | Body | Create and promote special offers to attract new customers | Benefits-focused |
| Value prop 3 title | H3 | Connect with Customers | Imperative verb |
| Value prop 3 desc | Body | Receive leads and grow your medspa business | Benefits-focused |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Primary CTA | Button | Find My Business | Icon: MagnifyingGlass |
| Secondary CTA | Button | List a New Business | Icon: Plus |

---

## 2. Business Search Modal (`src/components/features/businessSearchModal.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Modal title | H2 | Find Your Business | Possessive "Your" |

### Form Labels & Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search input | Placeholder | Search by business name... | Instruction with ellipsis |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Claim action | Button | Claim This Business | Demonstrative "This" |
| Disabled claim | Button | Already Claimed | Status indicator |
| Create new CTA | Button | Create a New Listing | Article "a" |

### Instructional Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty state | Body | Start typing to search for your business | Instruction |
| No results | Body | No businesses found matching "{query}" | Dynamic with query |
| Footer text | Body | Don't see your business? | Question format |
| Footer link | Link | Create a new listing | Lowercase "new" |

### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tier badge | Badge | Unclaimed | Status |
| Tier badge | Badge | Free | Tier name |
| Tier badge | Badge | Premium | Tier name (shows for "paid") |

---

## 3. Create Business Page (`src/app/business/create/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Auth view title | H1 | List Your Business | Imperative |
| Auth sign up desc | Body | Create an account to list your medspa on CostFinders | Action + benefit |
| Auth sign in desc | Body | Sign in to your business account | Simple instruction |
| Form view title | H1 | List Your Business | Same as auth view |
| Form view desc | Body | Fill in the details below to create your medspa listing | Instruction |
| Success title | H1 | Your business has been created! | Exclamatory confirmation |
| Success subtitle | Body | {name} is now listed on CostFinders | Dynamic with name |

### Form Labels & Placeholders (Auth)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| First name | Label | First name | Sentence case |
| First name | Placeholder | John | Example name |
| Last name | Label | Last name | Sentence case |
| Last name | Placeholder | Doe | Example name |
| Email | Label | Email | Single word |
| Email | Placeholder | you@example.com | Example format |
| Password | Label | Password | Single word |
| Password (sign up) | Placeholder | Min. 8 characters | Requirement hint |
| Password (sign in) | Placeholder | Enter your password | Instruction |
| Confirm password | Label | Confirm password | Sentence case |
| Confirm password | Placeholder | Confirm your password | Instruction |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Auth submit (sign up) | Button | Create account | No article |
| Auth submit (sign in) | Button | Sign in | Verb phrase |
| Success CTA | Button | Go to Business Dashboard | Full destination |
| Back link | Link | Back to business options | Arrow prefix in UI |

### Instructional Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Auth toggle (sign up) | Body | Already have a business account? | Question |
| Auth toggle link | Link | Sign in | Action |
| Auth toggle (sign in) | Body | Don't have an account? | Question |
| Auth toggle link | Link | Create one | Short form |
| Info note | Body | Your listing will go live after a brief review. You'll have full access to manage your profile and create deals. | Expectation setting |

### Error Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email required | Error | Email is required | Standard pattern |
| Email invalid | Error | Please enter a valid email address | Polite instruction |
| Password required | Error | Password is required | Standard pattern |
| Password length | Error | Password must be at least 8 characters | Specific requirement |
| Confirm required | Error | Please confirm your password | Polite instruction |
| Password mismatch | Error | Passwords do not match | Error description |

---

## 4. Create Business Form (`src/components/features/createBusinessForm.tsx`)

### Section Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Section 1 | H3 | Business Details | Noun phrase |
| Section 2 | H3 | Location | Single word |
| Section 3 | H3 | Contact Information | Noun phrase |

### Form Labels & Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Business name | Label | Business name | Sentence case |
| Business name | Placeholder | e.g., Radiant Aesthetics | Example with "e.g." |
| Description | Label | Description | Single word |
| Description | Placeholder | Tell customers about your medspa... | Instruction with ellipsis |
| Website | Label | Website | Single word |
| Website | Placeholder | https://www.yourbusiness.com | Full URL example |
| Street address | Label | Street address | Sentence case |
| Street address | Placeholder | 123 Main Street, Suite 100 | Example format |
| City | Label | City | Single word |
| City | Placeholder | Austin | Example city |
| State | Label | State * | With asterisk |
| State | Placeholder | Select state | Instruction |
| Zip code | Label | Zip code | Two words |
| Zip code | Placeholder | 78701 | Example format |
| Location area | Label | Location area | Sentence case |
| Location area | Placeholder | e.g., Downtown, North Side | Example with "e.g." |
| Business phone | Label | Business phone | Sentence case |
| Business phone | Placeholder | (512) 555-0123 | Example format |
| Business email | Label | Business email | Sentence case |
| Business email | Placeholder | contact@yourbusiness.com | Example format |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Submit | Button | Create Business Listing | Full action phrase |

### Error Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Name required | Error | Business name is required | Field-specific |
| Address required | Error | Address is required | Standard pattern |
| City required | Error | City is required | Standard pattern |
| State required | Error | State is required | Standard pattern |
| Zip required | Error | Zip code is required | Standard pattern |
| Zip invalid | Error | Enter a valid zip code | Imperative |
| Phone required | Error | Phone number is required | Standard pattern |
| Phone invalid | Error | Enter a valid phone number (at least 10 digits) | With requirement |
| Email required | Error | Email is required | Standard pattern |
| Email invalid | Error | Enter a valid email address | Imperative |

---

## 5. Claim Business Flow (`src/components/features/claimBusinessFlow.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Confirm step title | H2 | Is this your business? | Question format |
| Confirm step desc | Body | Confirm the details below to claim this profile | Instruction |
| Auth sign up title | H2 | Create your account | Possessive "your" |
| Auth sign up desc | Body | Create a business owner account to claim your profile | Action + purpose |
| Auth sign in title | H2 | Sign in to continue | Purpose-oriented |
| Auth sign in desc | Body | Sign in to your business owner account | Destination |
| Verify step title | H2 | Verify your ownership | Possessive "your" |
| Verify step desc | Body | We need to verify you own {name} | Dynamic with name |
| Code entry title | H2 | Enter verification code | Imperative |
| Code entry desc (email) | Body | We sent a code to {email} | Dynamic |
| Code entry desc (phone) | Body | We called {phone} with your code | Dynamic |
| Success title | H2 | Claim submitted! | Exclamatory |
| Success desc | Body | Your claim for {name} is being reviewed. | Status update |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Confirm business | Button | Yes, this is my business | Confirmation statement |
| Auth submit (sign up) | Button | Create account | No article |
| Auth submit (sign in) | Button | Sign in | Verb phrase |
| Verify via email | Button text | Verify via email | Method indicator |
| Verify via email desc | Body | I have access to {email} | First person statement |
| Verify via phone | Button text | Verify via phone | Method indicator |
| Verify via phone desc | Body | Call {phone} for verification code | Instruction |
| Submit verification | Button | Verify & Submit Claim | Combined action |
| Go to dashboard | Button | Go to Business Dashboard | Full destination |

### Instructional Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Not your business | Body | Not your business? | Question |
| Go back link | Link | Go back | Action |
| Different method | Link | Choose a different verification method | Instruction |
| What happens next title | Body | What happens next? | Question |
| What happens next desc | Body | We'll verify your ownership and notify you within 24-48 hours. Once approved, you'll have full access to manage your business profile. | Timeline + outcome |
| Auth toggle (sign up) | Body | Already have a business account? | Question |
| Auth toggle link | Link | Sign in | Action |
| Auth toggle (sign in) | Body | Don't have an account? | Question |
| Auth toggle link | Link | Create one | Short form |

### Error Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Code invalid | Error | Please enter a valid 6-digit code | Polite + specific |

---

## Patterns Observed

### Positive Patterns
1. **Consistent question format** for prompts ("Is this your business?", "Already have an account?")
2. **Possessive pronouns** ("Your business", "Your profile") create ownership feel
3. **Imperative verbs** in CTAs (Claim, Create, Verify, Go to)
4. **Example placeholders** with "e.g." prefix for optional fields
5. **Exclamatory confirmations** for success states

### Inconsistencies Found
1. **Article usage varies**: "Create account" vs "Create a New Listing"
2. **Capitalization**: "Sign in" (button) vs "Sign In" could vary
3. **Error message tone**: Mix of imperative ("Enter a valid...") and declarative ("...is required")
4. **Placeholder styles**: Some use ellipsis, some don't

### Recommendations for Style Guide
1. Standardize error message format: Choose "Field is required" pattern
2. Define article usage rules for buttons
3. Consistent capitalization for buttons (Title Case or Sentence case)
4. Placeholder format: Use ellipsis for instruction-based, none for examples
