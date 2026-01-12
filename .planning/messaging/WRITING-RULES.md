# CostFinders Writing Standards

## 1. Capitalization Rules

### General Principle

**Use sentence case for all UI text.** Only the first word and proper nouns are capitalized.

### Capitalization by Element

| Element | Rule | Correct | Incorrect |
|---------|------|---------|-----------|
| Button labels | Sentence case | "Create account" | "Create Account" |
| Form labels | Sentence case | "Business name" | "Business Name" |
| Page titles | Sentence case | "Your dashboard" | "Your Dashboard" |
| Section headings | Sentence case | "Basic information" | "Basic Information" |
| Tab labels | Sentence case | "My deals" | "My Deals" |
| Menu items | Sentence case | "Account settings" | "Account Settings" |
| Error messages | Sentence case | "Email is required" | "Email Is Required" |
| Status badges | Sentence case | "Pending review" | "Pending Review" |
| Tooltips | Sentence case | "Click to edit" | "Click To Edit" |

### Proper Nouns (Always Capitalized)

| Proper Noun | Usage |
|-------------|-------|
| CostFinders | Brand name, always one word |
| Premium | Subscription tier when used as proper name |
| Free | Subscription tier when used as proper name |

### Before/After Examples (From Audit)

| Before (Inconsistent) | After (Standardized) |
|-----------------------|----------------------|
| "Create Deal" | "Create deal" |
| "Deal Title" | "Deal title" |
| "Go to Dashboard" | "Go to dashboard" |
| "Sign In" | "Sign in" |
| "Basic Information" | "Basic information" |

---

## 2. Punctuation Standards

### Periods

| Context | Rule | Example |
|---------|------|---------|
| Complete sentences | Always use period | "Your claim was submitted." |
| Empty state descriptions | Always use period | "Browse deals to find ones you like." |
| Success messages | Always use period | "Settings saved." |
| Button labels | No period | "Save changes" |
| Form labels | No period | "Email address" |
| Status badges | No period | "Active" |
| List items (fragments) | No period | "Botox treatment" |

### Exclamation Marks

| Context | Rule | Example |
|---------|------|---------|
| UI text | Avoid | "Settings saved." (not "Settings saved!") |
| Success messages | Avoid | "Your claim was submitted." |
| Error messages | Never use | "Please enter a valid email." |
| Marketing copy (rare) | Maximum one per page | "Save up to 50% today." |
| Celebratory moments | Sparingly, consumer module only | "First claim submitted." |

### Ellipsis (...)

| Context | Rule | Example |
|---------|------|---------|
| Search placeholders | Use with instruction format | "Search deals..." |
| Text area placeholders | Use with instruction format | "Describe your deal..." |
| Loading states | Use | "Loading..." |
| Email/URL placeholders | Do not use | "you@example.com" |
| Standard input placeholders | Do not use | "Enter your name" |

### Ampersand (&) vs "and"

| Context | Use | Example |
|---------|-----|---------|
| Short labels/titles | & | "Terms & conditions" |
| Navigation items | & | "Deals & favorites" |
| Body copy | and | "Browse deals and find savings" |
| Descriptions | and | "Create deals and attract customers" |

### Commas in Lists

| Context | Rule | Example |
|---------|------|---------|
| Inline lists (3+ items) | Use Oxford comma | "Botox, fillers, and facials" |
| Two items | No comma before "and" | "Botox and fillers" |

---

## 3. Article Usage

### When to Omit Articles

| Context | Pattern | Example |
|---------|---------|---------|
| Common actions | No article | "Create account", "Save changes" |
| Form labels | No article | "Email", "Password" |
| Button labels | No article | "Submit claim", "View deal" |
| Navigation | No article | "Dashboard", "Settings" |
| Status labels | No article | "Active", "Pending" |

### When to Include Articles

| Context | Pattern | Example |
|---------|---------|---------|
| Instructional text | Include article | "Enter a valid email address" |
| Descriptions | Include article | "Create a new deal to attract customers" |
| Error explanations | Include article | "Select a category before saving" |
| Empty state CTAs | Include article | "Browse deals to find a great offer" |

### Possessive Usage

| Context | Use | Example |
|---------|-----|---------|
| User's own items | Your | "Your dashboard", "Your deals" |
| Referring to others | The | "The business has 5 active deals" |
| General reference | A/An | "Select a deal to view details" |

---

## 4. Terminology Glossary

### Core Platform Terms

| Preferred Term | Avoid | Definition | Used In |
|----------------|-------|------------|---------|
| Deal | Offer, Special, Discount | A discounted service offering from a business | All modules |
| Claim | Booking, Request, Reservation | Consumer action to express interest in a deal | Consumer module |
| Lead | Claim, Booking, Customer | Business view of a consumer's claim | Business module |
| Business | Provider, Spa, Vendor | Medical spa or service provider | All modules |
| User | Customer, Client, Member | Any person using the platform | Admin module |

### Status Terms

| Preferred Term | Definition | Context |
|----------------|------------|---------|
| Active | Currently available/enabled | Deals, businesses, users |
| Pending | Awaiting action/approval | Verification, claims, moderation |
| Expired | Past end date | Deals only |
| Paused | Temporarily disabled by owner | Deals, businesses |
| Verified | Identity/ownership confirmed | Businesses, users |
| Unverified | Not yet confirmed | Businesses, users |

### Action Terms

| Preferred Term | Avoid | Context |
|----------------|-------|---------|
| Save | Store, Keep | Saving settings, drafts |
| Create | Add, Make, New | Creating deals, accounts |
| Submit | Send | Submitting claims, forms |
| Verify | Confirm, Validate | Identity verification |
| Claim | Request, Book | Consumer claiming a deal |

### Business Tiers

| Term | Definition |
|------|------------|
| Unclaimed | Business exists but no owner has claimed it |
| Free | Claimed business on free tier |
| Premium | Paid subscription with full features |

---

## 5. Common Patterns

### Error Message Patterns

| Pattern | Template | Example |
|---------|----------|---------|
| Required field | "{Field} is required" | "Email is required" |
| Invalid format | "Please enter a valid {field}" | "Please enter a valid email address" |
| Constraint violation | "{Field} must be {requirement}" | "Password must be at least 8 characters" |
| Comparison error | "{Field} must be {comparison} {other field}" | "End date must be after start date" |
| Action failure | "Failed to {action}. Please try again." | "Failed to save deal. Please try again." |
| Permission denied | "You don't have permission to {action}" | "You don't have permission to edit this deal" |

### Success Message Patterns

| Pattern | Template | Example |
|---------|----------|---------|
| Action complete | "{Action} successful." | "Changes saved." |
| Item created | "{Item} created." | "Deal created." |
| Item updated | "{Item} updated." | "Settings updated." |
| Item deleted | "{Item} deleted." | "Deal deleted." |
| Submission | "Your {item} was submitted." | "Your claim was submitted." |

### Empty State Patterns

| Component | Structure | Example |
|-----------|-----------|---------|
| Title | "No {items} yet" or "No {items} found" | "No saved deals yet" |
| Description | Explanation + suggestion (with period) | "Deals you save will appear here." |
| CTA (when applicable) | Action-oriented button | "Browse deals" |

**Full empty state example:**
```
No saved deals yet
Deals you save will appear here. Browse our collection to find great offers near you.
[Browse deals]
```

### Placeholder Patterns

| Type | Pattern | Example |
|------|---------|---------|
| Search inputs | "Search {noun}..." | "Search deals..." |
| Text areas | "Describe {item}..." or "{Instruction}..." | "Describe your deal..." |
| Example format | "e.g., {example}" | "e.g., Botox Special" |
| Email fields | "{name}@example.com" | "you@example.com" |
| URL fields | "https://example.com" | "https://yourbusiness.com" |
| Phone fields | "(555) 555-5555" | "(555) 555-5555" |
| Standard inputs | "Enter {item}" | "Enter your name" |

### Confirmation Patterns

| Action Type | Pattern | Example |
|-------------|---------|---------|
| Destructive | "{Action} {item}? This cannot be undone." | "Delete this deal? This cannot be undone." |
| Reversible | "{Action} {item}?" | "Pause this deal?" |
| Bulk | "{Action} {count} selected {items}?" | "Delete 5 selected deals?" |

---

## 6. Numbers & Formatting

### Currency

| Rule | Format | Example |
|------|--------|---------|
| Dollar amounts | "$X" (no space) | "$199" |
| With cents | "$X.XX" | "$199.00" |
| Ranges | "$X - $Y" (with spaces around dash) | "$99 - $199" |
| Discounts | "X% off" or "$X off" | "50% off" or "$100 off" |
| Original price | Strikethrough when showing discount | "~~$400~~ $199" |

### Percentages

| Rule | Format | Example |
|------|--------|---------|
| Standard | "X%" (no space) | "50%" |
| Increase/decrease | "up X%" or "down X%" | "up 12%" |
| Fractional | "X.X%" | "12.5%" |

### Numbers

| Context | Rule | Example |
|---------|------|---------|
| 1-9 | Spell out in body copy | "three new leads" |
| 10+ | Use numerals | "15 claims this week" |
| In UI elements | Always use numerals | "3 new leads" |
| Starting sentences | Spell out | "Twelve businesses pending" |
| Large numbers | Use comma separators | "1,234 deals" |

### Time Formatting

**Relative time thresholds:**

| Threshold | Display |
|-----------|---------|
| < 1 minute | "Just now" |
| < 1 hour | "X minutes ago" |
| < 24 hours | "X hours ago" |
| Yesterday | "Yesterday" |
| < 7 days | "X days ago" |
| < 4 weeks | "X weeks ago" |
| > 4 weeks | "X months ago" |

**Absolute time (when needed):**

| Format | Example | Usage |
|--------|---------|-------|
| Date | "Jan 12, 2026" | Deal expiration, historical dates |
| Date + time | "Jan 12, 2026 at 3:30 PM" | Scheduled events |
| Time only | "3:30 PM" | Today's events |
| Duration | "2 hours", "30 minutes" | Service duration |

### Phone Numbers

| Format | Example |
|--------|---------|
| US standard | "(555) 555-5555" |
| With extension | "(555) 555-5555 ext. 123" |

### Addresses

| Format | Example |
|--------|---------|
| Full | "123 Main St, Suite 100, Los Angeles, CA 90001" |
| Short (city + state) | "Los Angeles, CA" |

---

## Quick Reference Card

### Always Do

- Sentence case for all UI text
- Period after complete sentences and descriptions
- "{Field} is required" for required field errors
- "Search {noun}..." for search placeholders
- "$X" for currency (no space)
- Relative time for recent activity
- "Deal" not "Offer" or "Special"
- "Claim" (consumer) / "Lead" (business)

### Never Do

- Title Case for buttons or labels
- Exclamation marks in error messages
- Vague empty states without CTAs
- "Act now" or pressure language
- Mixing terminology (deal/offer/special)
- Periods after button labels
- Ampersand in body copy

---

*Based on Phase 16 Messaging Audit findings addressing inconsistencies across 927 cataloged messages.*
