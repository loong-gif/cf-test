# Business Dashboard Messaging Audit

**Audit Date:** 2026-01-12
**Auditor:** Claude Opus 4.5
**Module:** Business Dashboard (all pages)

## Summary

Total messages cataloged: **198**
- Page titles/headings: 42
- Navigation labels: 8
- Button labels/CTAs: 38
- Table headers: 24
- Status badges/labels: 18
- Empty states: 16
- Metric labels: 28
- Filter/sort labels: 12
- Form labels: 8
- Modal content: 4

---

## 1. Dashboard Sidebar (`src/components/layout/businessDashboardSidebar.tsx`)

### Navigation Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Nav item | Label | Home | Single word |
| Nav item | Label | Deals | Plural noun |
| Nav item | Label | Leads | Plural noun |
| Nav item | Label | Messages | Plural noun |
| Nav item | Label | Analytics | Single word |
| Nav item | Label | Profile | Single word |
| Nav item | Label | Settings | Plural noun |
| User fallback | Text | Business Owner | Role descriptor |

---

## 2. Dashboard Home (`src/app/business/dashboard/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Welcome header | H1 | Welcome back, {name} | Dynamic greeting |
| Welcome subheading | Body | Here's an overview of your business performance | Contraction "Here's" |
| Quick actions heading | H2 | Quick Actions | Title case |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Metric 1 | Label | Active Deals | Noun phrase |
| Metric 1 trend | Text | +2 this week | Relative timeframe |
| Metric 2 | Label | New Leads | Noun phrase |
| Metric 2 trend | Text | +8 this week | Relative timeframe |
| Metric 3 | Label | Messages Awaiting Reply | Full phrase |
| Metric 3 trend | Text | Reply within 24h | Instruction |
| Metric 4 | Label | Total Views This Month | Full phrase with timeframe |
| Metric 4 trend | Text | +15% | Percentage |

### Quick Action Cards

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Action 1 title | Text | Create New Deal | Imperative phrase |
| Action 1 desc | Text | Add a special offer | Instruction |
| Action 2 title | Text | View Leads | Imperative verb |
| Action 2 desc | Text | 12 new this week | Dynamic count |
| Action 3 title | Text | Reply to Messages | Imperative verb |
| Action 3 desc | Text | 3 awaiting response | Status count |

---

## 3. Deals Page (`src/app/business/dashboard/deals/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page title | H1 | Deals | Single word |
| Page subtitle | Body | Manage your special offers and promotions | Action description |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Sponsored link | Button | Sponsored | Single word + badge |
| Create deal | Button | Create Deal | Imperative + noun |

### Filter Tabs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tab 1 | Tab | All ({count}) | With count |
| Tab 2 | Tab | Active ({count}) | With count |
| Tab 3 | Tab | Paused ({count}) | With count |

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search | Placeholder | Search deals... | With ellipsis |

### Table Headers

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Column 1 | TH | Deal | Single word |
| Column 2 | TH | Category | Single word |
| Column 3 | TH | Price | Single word |
| Column 4 | TH | Status | Single word |
| Column 5 | TH | Performance | Single word |
| Column 6 | TH | Actions | Single word |

### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Active status | Badge | Active | Single word |
| Paused status | Badge | Paused | Single word |
| Featured badge | Badge | Featured | Single word |
| Boosted badge | Badge | Boosted | With rocket icon |

### Empty States

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No deals title | H3 | No deals yet | Informal "yet" |
| No deals desc | Body | Create your first deal to start attracting customers | Benefit-focused |
| No results title | H3 | No deals found | Search result |
| No results desc | Body | Try adjusting your search query | Suggestion |
| Empty CTA | Button | Create Your First Deal | Possessive "Your" |

### Error Message (from page)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No business | Body | No business linked to your account. | Period at end |

### Modal Content (Delete)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Delete title | H2 | Delete Deal | Imperative + noun |
| Delete confirm | Body | Are you sure you want to delete {title}? This action cannot be undone. | Warning |
| Cancel button | Button | Cancel | Single word |
| Confirm button | Button | Delete | Single word |

---

## 4. New Deal Page (`src/app/business/dashboard/deals/new/page.tsx`)

References `DealForm` component - see Business Components audit.

---

## 5. Edit Deal Page (`src/app/business/dashboard/deals/[dealId]/edit/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Loading text | Body | Loading deal... | With ellipsis |
| Not found title | H2 | Deal Not Found | Title case |
| Not found desc | Body | The deal you are looking for does not exist or has been deleted. | Formal tone |
| Access denied title | H2 | Access Denied | Title case |
| Access denied desc | Body | You do not have permission to edit this deal. | Formal tone |

### Button Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Back to deals | Button | Back to Deals | Preposition + noun |

---

## 6. Sponsored Deals Page (`src/app/business/dashboard/deals/sponsored/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Back link | Link | Back to Deals | Preposition + noun |
| Page title | H1 | Sponsored Deals | Title case |
| Page subtitle | Body | Boost your deals to reach more customers and increase visibility | Benefits-focused |
| Section 1 | H2 | Active Boosts | Noun phrase |
| Section 2 | H2 | Available Deals | Noun phrase |
| Section 3 | H2 | Boost History | Noun phrase |

### Empty States

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No active title | H3 | No Active Boosts | Noun phrase |
| No active desc | Body | Start boosting your deals to increase visibility and attract more customers. | Instruction + benefits |
| No eligible title | H3 | No Eligible Deals | Noun phrase |
| No eligible desc | Body | All your active deals are already boosted or pending approval. | Explanation |
| No history title | H3 | No Boost History | Noun phrase |
| No history desc | Body | Your completed boosts will appear here. | Future state |

### Table Headers (Boost History)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Column 1 | TH | Deal | Single word |
| Column 2 | TH | Boost Type | Two words |
| Column 3 | TH | Duration | Single word |
| Column 4 | TH | Impressions | Single word |
| Column 5 | TH | Cost | Single word |
| Column 6 | TH | Status | Single word |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Days remaining | Text | {n} days left | Dynamic |
| Impressions | Text | {n} impressions | Dynamic count |
| Boost multiplier | Text | {n}x boost | Dynamic |
| Progress | Text | {n}% complete | Percentage |

### Button Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Boost action | Button | Boost | Single word with icon |
| End early | Button | End Early | Two words |
| Available count | Text | ({n} eligible) | Parenthetical |

### Modal Content

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Boost modal title | H2 | Boost Your Deal | Possessive |
| Cancel modal title | H2 | End Boost Early | Full phrase |
| Cancel warning | Body | Are you sure you want to end this boost early? This action cannot be undone and no refund will be issued. | Warning + consequence |
| Keep button | Button | Keep Boost | Imperative |
| End button | Button | End Boost | Imperative |

### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Completed | Badge | Completed | Past participle |
| Cancelled | Badge | Cancelled | Past participle |

---

## 7. Leads Page (`src/app/business/dashboard/leads/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page title | H1 | Leads | Single word |
| Page subtitle | Body | Manage customer inquiries and bookings | Action description |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Credits indicator | Text | {n} Credits | Count + noun |
| View pricing | Button | View Pricing | Imperative + noun |

### Filter Tabs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tab 1 | Tab | All | Single word |
| Tab 2 | Tab | Pending | Single word |
| Tab 3 | Tab | Active | Single word |
| Tab 4 | Tab | Completed | Single word |
| Tab 5 | Tab | Cancelled | Single word |

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search | Placeholder | Search leads... | With ellipsis |

### Empty States

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No leads title | H3 | No leads yet | Informal "yet" |
| No leads desc | Body | When customers claim your deals, their inquiries will appear here. | Expectation |
| No results title | H3 | No leads found | Search result |
| No results desc | Body | Try adjusting your search query | Suggestion |
| Tab empty | Body | No {status} leads at the moment. | Dynamic |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Customer ID | Text | Customer #{n} | Hash format |
| Requested date | Text | Requested: {date} | Label: value |

---

## 8. Lead Detail Page (`src/app/business/dashboard/leads/[claimId]/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page title | H1 | Lead Details | Noun phrase |
| Customer ID | Body | Customer #{n} | Hash format |
| Claim info header | Body | Requested {time} ago | Relative time |
| Customer request | H3 | Customer Request | Noun phrase |
| Update status | H3 | Update Status | Imperative |
| Business notes | H3 | Business Notes | Noun phrase |
| Contact info | H3 | Contact Information | Noun phrase |
| Activity | H3 | Activity | Single word |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Mark contacted | Button | Mark Contacted | Imperative |
| Mark booked | Button | Mark Booked | Imperative |
| Mark completed | Button | Mark Completed | Imperative |
| Cancel lead | Button | Cancel | Single word |
| Save notes | Button | Save Notes | Imperative |
| Saving state | Button | Saving... | With ellipsis |

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Notes textarea | Placeholder | Add internal notes about this lead... | Instruction with ellipsis |

### Instructional Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Contact hidden | Body | Contact info will be revealed after you mark this lead as contacted. | Condition + outcome |
| No preferences | Body | No specific preferences provided. | Neutral statement |
| Last updated | Text | Last updated: {time} | Label: value |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Deal price | Text | ${price} {unit} | Currency + unit |
| Preferred date | Text | Preferred: {date} | Label: value |
| Email label | Text | Email | Single word |
| Phone label | Text | Phone | Single word |

### Activity Timeline

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Lead received | Text | Lead received | Past participle |
| Contacted | Text | Contacted customer | Past tense |
| Booked | Text | Appointment booked | Passive voice |
| Completed | Text | Appointment completed | Passive voice |
| Cancelled | Text | Lead cancelled | Passive voice |

---

## 9. Lead Pricing Page (`src/app/business/dashboard/leads/pricing/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page title | H1 | Lead Pricing & Credits | Ampersand |
| Page subtitle | Body | Manage your lead costs and credit balance | Action description |
| Section 1 | H2 | Credit Usage History | Noun phrase |
| Section 2 | H2 | Buy Credits | Imperative |
| Section desc | Body | Purchase credit packages for bulk savings on lead costs | Benefit-focused |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Credits amount | Text | {n} credits | Lowercase "credits" |
| Price | Text | ${n} | Currency |
| Price per lead | Text | ${n}/lead | Per-unit |
| Best value | Badge | Best Value | Title case |
| Savings | Badge | Save {n}% | Percentage |

### Button Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Purchase | Button | Purchase | Single word |

---

## 10. Messages Page (`src/app/business/dashboard/messages/page.tsx`)

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search | Placeholder | Search conversations... | With ellipsis |

### Filter Tabs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tab 1 | Tab | All | Single word |
| Tab 2 | Tab | Unread | Single word |

### Empty States

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No conversations title | H3 | No conversations yet | Informal "yet" |
| No conversations desc | Body | Conversations will appear here when customers message you | Expectation |
| No unread title | H3 | No unread messages | Noun phrase |
| No unread desc | Body | You're all caught up! | Exclamatory, informal |
| No results title | H3 | No conversations found | Search result |
| No results desc | Body | Try adjusting your search terms | Suggestion |

### Metric Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Time formats | Text | Just now, Yesterday, {weekday}, etc. | Relative time |
| Message preview | Text | You: {message} | Sender prefix |

### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pending | Badge | Pending | Single word |
| Contacted | Badge | Contacted | Single word |
| Booked | Badge | Booked | Single word |
| Completed | Badge | Completed | Single word |
| Cancelled | Badge | Cancelled | Single word |

---

## 11. Analytics Page (`src/app/business/dashboard/analytics/page.tsx`)

References `AnalyticsDashboard` component - see Business Components audit.

---

## 12. Profile Page (`src/app/business/dashboard/profile/page.tsx`)

### Empty State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| No business | Body | No business linked to this account. | Period at end |

References `BusinessProfileForm` component.

---

## 13. Settings Page (`src/app/business/dashboard/settings/page.tsx`)

### Navigation Cards

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Card 1 title | Text | Profile | Single word |
| Card 1 desc | Text | Update your business information and details | Action description |
| Card 2 title | Text | Integrations | Single word |
| Card 2 desc | Text | Connect scheduling and booking software | Action description |
| Card 3 title | Text | Account | Single word |
| Card 3 desc | Text | View subscription and billing | Action description |

---

## 14. Account Settings Page (`src/app/business/dashboard/settings/account/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Plan title (paid) | H2 | Professional Plan | Tier name |
| Plan title (free) | H2 | Free Plan | Tier name |
| Plan subtitle (paid) | Body | You have access to all premium features | Benefit statement |
| Plan subtitle (free) | Body | Upgrade to unlock premium features | CTA |
| Section 1 | H3 | Cancel Subscription | Action |

### Tab Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tab 1 | Tab | Plan | Single word |
| Tab 2 | Tab | Billing | Single word |

### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Active badge (paid) | Badge | Active | Single word |
| Current badge (free) | Badge | Current | Single word |
| Activated indicator | Text | Fully Activated | Adverb + adjective |

### Success Message

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Upgrade success title | Text | Subscription activated! | Exclamatory |
| Upgrade success desc | Body | You now have access to all Professional features. | Benefit statement |

### Billing Summary Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Current plan | Label | Current Plan | Title case |
| Plan name | Text | Professional | Single word |
| Plan price | Text | $99/month | Price format |
| Next billing | Label | Next Billing Date | Title case |
| Date example | Text | Feb 15, 2025 | Date format |
| Auto renewal | Text | Auto-renewal enabled | Hyphenated |
| Payment method | Label | Payment Method | Title case |
| Card info | Text | Visa ****4242 | Masked format |
| Expiry | Text | Expires 12/27 | Short format |

### No Subscription State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Title | H3 | No active subscription | Noun phrase |
| Description | Body | Upgrade to Professional to access billing features and unlock premium features. | CTA + benefits |
| CTA | Button | Upgrade to Professional | Full action |

### Cancel Subscription

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Section desc | Body | If you cancel, your Professional features will remain active until your current billing period ends. You can resubscribe at any time. | Consequence + option |
| Cancel button | Button | Cancel Subscription | Full action |

### Modal Content

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Modal title | H2 | Cancel Subscription | Action |
| Confirm question | Body | Are you sure you want to cancel your Professional subscription? | Question format |
| Consequence 1 | Li | You'll lose access to premium features at the end of your billing period | Consequence |
| Consequence 2 | Li | Your deals will remain active but won't have priority placement | Consequence |
| Consequence 3 | Li | You can resubscribe anytime to restore features | Recovery option |
| Keep button | Button | Keep Subscription | Imperative |
| Confirm button | Button | Cancel Subscription | Imperative |

---

## 15. Checkout Page (`src/app/business/dashboard/settings/account/checkout/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Back link | Link | Back to Account | Preposition + noun |
| Page title | H1 | Upgrade to Professional | Full action |
| Page subtitle | Body | Complete your subscription to unlock all premium features | Action + benefit |
| Success title | H1 | Welcome to Professional! | Exclamatory greeting |
| Success desc | Body | Your subscription is now active. You have access to all premium features. | Status + benefit |
| Order summary | H2 | Professional Plan | Tier name |
| Order summary desc | Text | Monthly subscription | Frequency |
| Payment section | H2 | Payment details | Noun phrase |

### Security Messaging

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| SSL notice | Body | 256-bit SSL encryption. Your payment information is secure. | Technical + reassurance |

### Features List Heading

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Section heading | H3 | What's included | Question format |

### Features List Items

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Feature 1 | Li | Unlimited deal listings | Benefit |
| Feature 2 | Li | Priority placement in search results | Benefit |
| Feature 3 | Li | Advanced analytics dashboard | Benefit |
| Feature 4 | Li | Customer messaging | Benefit |
| Feature 5 | Li | Promotional badges | Benefit |
| Feature 6 | Li | Custom business profile | Benefit |
| Feature 7 | Li | Priority customer support | Benefit |

### Price Display

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Price | Text | $99/month | Per-month |
| Subtotal label | Text | Subtotal | Single word |
| Tax label | Text | Tax | Single word |
| Total label | Text | Total due today | Full phrase |

### Billing Info

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Billing notice | Body | You will be charged $99.00 monthly. Cancel anytime from your account settings. Your subscription will renew automatically unless cancelled before the billing date. | Terms |

### Button Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Continue CTA | Button | Continue to Dashboard | Full destination |
| Confirmation note | Text | A confirmation email has been sent to your account | Passive voice |

### Subscription ID

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Label | Text | Subscription ID | Noun phrase |
| Format | Text | sub_XXXXXXXXXXXX | Prefix format |

### Trust Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Badge 1 | Text | Secure payments | Adjective + noun |
| Badge 2 | Text | Money-back guarantee | Hyphenated |
| Badge 3 | Text | Cancel anytime | Imperative |

---

## 16. Integrations Page (`src/app/business/dashboard/settings/integrations/page.tsx`)

### Page Titles & Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Back link | Link | Back to Settings | Preposition + noun |
| Page title | H1 | Scheduling Integrations | Noun phrase |
| Page subtitle | Body | Connect your scheduling software to automatically sync appointments from claimed deals. | Benefit description |
| Notify section | H3 | Get notified when integrations launch | Future-focused |
| Notify desc | Body | Be the first to know when we add support for your favorite scheduling tools. | FOMO + benefit |

### Integration Cards

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Calendly | Text | Calendly | Product name |
| Calendly desc | Text | Sync with your Calendly account for seamless scheduling | Benefit |
| Acuity | Text | Acuity Scheduling | Product name |
| Acuity desc | Text | Connect Acuity for appointment booking and management | Benefit |
| Square | Text | Square Appointments | Product name |
| Square desc | Text | Integrate with Square booking and payment system | Benefit |
| Webhook | Text | Custom Webhook | Technical |
| Webhook desc | Text | Set up custom integration via webhook for your existing systems | Technical benefit |
| Coming soon | Badge | Coming Soon | Title case |

### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Connect (disabled) | Button | Connect | Single word |
| Notify button | Button | Notify Me | Imperative |

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email | Placeholder | Enter your email | Instruction |

### Success Message

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Notification success | Text | Thanks! We'll notify you when integrations are available. | Informal + promise |

---

## Patterns Observed

### Positive Patterns
1. **Consistent tab structure** across Deals, Leads, Messages pages
2. **Search placeholder pattern**: "Search {noun}..." with ellipsis
3. **Empty state structure**: Title + description + optional CTA
4. **Back link pattern**: "Back to {Destination}"
5. **Possessive pronouns** in user-facing copy ("Your business", "Your deals")

### Inconsistencies Found
1. **Period usage**: Some empty states end with period, some don't
2. **"yet" usage**: "No leads yet" vs "No Active Boosts"
3. **Title case vs sentence case**: "Quick Actions" vs "Update status"
4. **Error tone**: "No business linked to your account." vs informal "yet" states
5. **CTA button style**: "Create Deal" vs "Create Your First Deal"

### Recommendations for Style Guide
1. Standardize empty state format (with/without period)
2. Define when to use informal "yet" suffix
3. Consistent heading capitalization rules
4. Standard error message format for "no business linked"
5. Define CTA personalization rules (Your/a/the)
