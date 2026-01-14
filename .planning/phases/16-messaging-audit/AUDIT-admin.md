# Admin Module Messaging Audit

> Phase 16.03 - Messaging Audit
> Module: Admin
> Total Messages: 284

---

## 1. Admin Login Page (`src/app/admin/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Login page | Page title | Admin Portal | - |
| Login page | Subtitle | Sign in to access the admin dashboard | - |

### Form Labels & Inputs
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Login form | Input label | Email Address | - |
| Login form | Input placeholder | admin@costfinders.com | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Login form | Primary button | Sign In | - |

### Help Text
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Login page | Help text | For demo purposes, use: admin@costfinders.com, moderator@costfinders.com, or support@costfinders.com | Demo instruction |

### Loading States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Login page | Loading text | Loading... | - |

---

## 2. Admin Dashboard Home (`src/app/admin/dashboard/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Dashboard | Welcome header | Welcome back, {name} | Dynamic greeting |
| Dashboard | Subtitle | Here's an overview of the platform activity | - |
| Dashboard | Section header | Platform Overview | - |
| Dashboard | Section header | Pending Review | - |
| Dashboard | Section header | Quick Actions | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Platform metrics | Metric label | Total Active Deals | - |
| Platform metrics | Metric label | Pending Moderation | - |
| Platform metrics | Metric label | Active Businesses | - |
| Platform metrics | Metric label | Total Consumers | - |

### Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Metrics card | Badge | Action Needed | Warning badge for pending |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pending review | Link button | View All | With arrow icon |
| Pending review | Action button | Review | Per deal item |

### Quick Actions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Quick actions | Card title | Review Deals | - |
| Quick actions | Card description | Moderate pending submissions | - |
| Quick actions | Card title | Manage Users | - |
| Quick actions | Card description | Consumer accounts | - |
| Quick actions | Card title | Manage Businesses | - |
| Quick actions | Card description | Business profiles | - |
| Quick actions | Card title | Content Settings | - |
| Quick actions | Card description | Categories & locations | - |

---

## 3. Deal Moderation Page (`src/app/admin/dashboard/deals/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Deals page | Page title | Deal Moderation | - |
| Deals page | Subtitle | Review and moderate submitted deals | - |

### Filter Tabs
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter tabs | Tab label | All Deals | - |
| Filter tabs | Tab label | Pending Review | - |
| Filter tabs | Tab label | Approved | - |
| Filter tabs | Tab label | Rejected | - |
| Filter tabs | Tab label | Changes Requested | - |

### Search
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search bar | Placeholder | Search deals... | - |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty state | Title | No deals found | - |
| Empty state | Description | Try adjusting your search terms | When search active |
| Empty state | Description | No deals pending review | When pending filter |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | Approval message | Deal "{title}" has been approved | Dynamic |
| Success toast | Rejection message | Deal "{title}" has been rejected | Dynamic |
| Success toast | Changes message | Changes requested for "{title}" | Dynamic |

---

## 4. User Management Page (`src/app/admin/dashboard/users/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Users page | Page title | User Management | - |
| Users page | Subtitle | Manage consumer accounts | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats bar | Metric label | Total Users | - |
| Stats bar | Metric label | Verified Users | - |
| Stats bar | Metric label | New This Week | - |

### Filter Tabs
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter tabs | Tab label | All Users | - |
| Filter tabs | Tab label | Verified | - |
| Filter tabs | Tab label | Unverified | - |
| Filter tabs | Tab label | Suspended | - |

### Search
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search bar | Placeholder | Search by name or email... | - |

### Pagination
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pagination | Status text | Showing {count} of {total} users | Dynamic |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | Suspended | {name} has been suspended | Dynamic |
| Success toast | Activated | {name} has been activated | Dynamic |

---

## 5. Business Management Page (`src/app/admin/dashboard/businesses/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Businesses page | Page title | Business Management | - |
| Businesses page | Subtitle | Manage business profiles | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats bar | Metric label | Total Businesses | - |
| Stats bar | Metric label | Claimed Rate | With percentage |
| Stats bar | Metric label | Paid Tier | - |

### Filter Tabs
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter tabs | Tab label | All Businesses | - |
| Filter tabs | Tab label | Unclaimed | - |
| Filter tabs | Tab label | Free | - |
| Filter tabs | Tab label | Paid | - |
| Filter tabs | Tab label | Suspended | - |

### Search
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search bar | Placeholder | Search by name or city... | - |

### Insight Card
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Insight card | Message | {count} unclaimed businesses have {total} total deals waiting to be claimed | Dynamic |

### Pagination
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pagination | Status text | Showing {count} of {total} businesses | Dynamic |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | Suspended | {name} has been suspended | Dynamic |
| Success toast | Activated | {name} has been activated | Dynamic |
| Success toast | Tier change | {name} tier changed to {tier} | Dynamic |

---

## 6. Content Management Page (`src/app/admin/dashboard/content/page.tsx`)

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats | Metric label | Active Categories | - |
| Stats | Metric label | Active Cities | - |
| Stats | Metric label | Service Areas | - |

### Navigation Cards
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Content nav | Card title | Categories | - |
| Content nav | Card description | Manage treatment categories | - |
| Content nav | Card title | Locations | - |
| Content nav | Card description | Manage service areas and cities | - |
| Content nav | Card title | Treatments | - |
| Content nav | Card description | Manage treatment types | - |

### Count Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Navigation cards | Count badge | {count} items | Dynamic |

---

## 7. Categories Page (`src/app/admin/dashboard/content/categories/page.tsx`)

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Header | Add button | Add Category | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats | Metric label | Total Categories | - |
| Stats | Metric label | Active | - |
| Stats | Metric label | Total Deals | - |

### Form Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add form | Form title | Add New Category | - |
| Add form | Field label | Name | - |
| Add form | Field placeholder | Category name | - |
| Add form | Field label | Description | - |
| Add form | Field placeholder | Category description | - |
| Add form | Field label | Icon | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add form | Primary button | Create Category | - |
| Add form | Secondary button | Cancel | - |
| Edit form | Primary button | Save | With icon |
| Edit form | Secondary button | Cancel | With icon |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category card | Badge | Inactive | When deactivated |

### Detail Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category card | Deal count | {count} deals | Dynamic |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | Toggle | {name} activated | Dynamic |
| Success toast | Toggle | {name} deactivated | Dynamic |
| Success toast | Update | {name} updated | Dynamic |
| Success toast | Create | {name} created | Dynamic |

---

## 8. Locations Page (`src/app/admin/dashboard/content/locations/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Locations page | Page title | Service Locations | - |
| Locations page | Subtitle | Manage cities and service areas | - |
| Locations page | Section header | Cities | - |
| Locations page | Section header | {city} Areas | Dynamic |
| Locations page | Section header | Select a City | When none selected |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Header | Back button | Back | - |
| Header | Add button | Add City | - |
| Areas panel | Add button | Add Area | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats | Metric label | Total Cities | - |
| Stats | Metric label | Active Cities | - |
| Stats | Metric label | Total Areas | - |
| Stats | Metric label | Active Areas | - |

### Form Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add city form | Form title | Add New City | - |
| Add city form | Field label | City Name | - |
| Add city form | Field placeholder | e.g., Chicago | - |
| Add city form | Field label | State | - |
| Add city form | Field placeholder | e.g., Illinois | - |
| Add city form | Field label | State Code | - |
| Add city form | Field placeholder | e.g., IL | - |
| Add area form | Field placeholder | Area name (e.g., Downtown) | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add city form | Primary button | Add City | - |
| Add city form | Secondary button | Cancel | - |
| Add area form | Primary button | Add | - |
| Add area form | Secondary button | Cancel | - |

### City Card Details
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| City card | Stat label | {count} areas | Dynamic |
| City card | Stat label | {count} businesses | Dynamic |
| City card | Stat label | {count} deals | Dynamic |

### Area Card Details
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Area card | Radius label | {miles} mile radius | Dynamic |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| City card | Badge | Inactive | When deactivated |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Areas panel | Empty title | No areas defined for {city} | Dynamic |
| Areas panel | Empty action | Add First Area | Button |
| Areas panel | Prompt | Select a city to view and manage its service areas | When no city selected |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | City added | {name} added | Dynamic |
| Success toast | Area added | {name} added | Dynamic |
| Success toast | Toggle | {name} activated | Dynamic |
| Success toast | Toggle | {name} deactivated | Dynamic |

---

## 9. Treatments Page (`src/app/admin/dashboard/content/treatments/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Treatments page | Page title | Treatment Types | - |
| Treatments page | Subtitle | Manage treatment types across categories | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Header | Back button | Back | - |
| Header | Add button | Add Treatment | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Stats | Metric label | Total Treatments | - |
| Stats | Metric label | Active | - |
| Stats | Metric label | Categories Used | - |
| Stats | Metric label | Showing | Current filter count |

### Bulk Actions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Bulk hint | Instruction | Select multiple treatments to activate/deactivate in bulk | - |
| Bulk hint | Badge | Coming Soon | Feature flag |

### Search
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Search bar | Placeholder | Search treatments... | - |

### Filter Tabs
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter tabs | Tab label | All | - |

### Form Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add form | Form title | Add New Treatment | - |
| Add form | Field label | Name | - |
| Add form | Field placeholder | Treatment name | - |
| Add form | Field label | Category | - |
| Add form | Field label | Description | - |
| Add form | Field placeholder | Brief description | - |
| Add form | Field label | Average Price ($) | - |
| Add form | Field placeholder | 0 | - |
| Add form | Field label | Popularity Score (1-100) | - |
| Add form | Field placeholder | 50 | - |
| Edit form | Field placeholder | Description | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Add form | Primary button | Create Treatment | - |
| Add form | Secondary button | Cancel | - |
| Edit form | Primary button | Save | With icon |
| Edit form | Secondary button | Cancel | With icon |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Treatment card | Badge | Inactive | When deactivated |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty state | Title | No treatments found | - |
| Empty state | Description | Try adjusting your search terms | When search active |
| Empty state | Description | No treatments in {category} | When category filter |
| Empty state | Description | Add your first treatment to get started | When no treatments |

### Feedback Messages
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success toast | Toggle | {name} activated | Dynamic |
| Success toast | Toggle | {name} deactivated | Dynamic |
| Success toast | Update | {name} updated | Dynamic |
| Success toast | Create | {name} created | Dynamic |

---

## 10. Monetization Page (`src/app/admin/dashboard/monetization/page.tsx`)

### Card Titles & Descriptions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Subscription card | Card title | Subscription Tiers | - |
| Subscription card | Card description | Monthly subscription pricing for business accounts | - |
| Lead pricing card | Card title | Lead Pricing | - |
| Lead pricing card | Card description | Per-lead costs by tier and credit package pricing | - |
| Sponsorship card | Card title | Sponsored Placements | - |
| Sponsorship card | Card description | Boost pricing and impression multipliers for deals | - |
| Platform fees card | Card title | Platform Fees | - |
| Platform fees card | Card description | Transaction and platform fee percentages applied to payments | - |

### Tier Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Free tier | Title | Free Tier | - |
| Free tier | Description | Basic business listing | - |
| Paid tier | Title | Paid Tier | - |
| Paid tier | Description | Premium business features | - |

### Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Free tier | Badge | Default | - |
| Paid tier | Badge | Recommended | - |
| Saved status | Badge | Saved | Success feedback |
| Credit package | Badge | Best Value | On best value package |
| Savings | Badge | {percent}% off | Dynamic |
| 7-day boost | Badge | 2x impressions | - |
| 14-day boost | Badge | 3x impressions | - |
| 30-day boost | Badge | 5x impressions | - |

### Pricing Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pricing | Unit | /month | - |
| Lead pricing | Unit | /lead | - |

### Section Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Lead pricing | Section | Per-Lead Cost by Tier | - |
| Lead pricing | Section | Credit Packages | - |

### Lead Tier Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Lead pricing | Tier label | Free Tier | - |
| Lead pricing | Tier description | Standard pricing | - |
| Lead pricing | Tier label | Paid Tier | - |
| Lead pricing | Tier description | Discounted pricing | - |

### Table Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Credit packages | Column header | Package | - |
| Credit packages | Column header | Credits | - |
| Credit packages | Column header | Price | - |
| Credit packages | Column header | Per Lead | - |
| Credit packages | Column header | Savings | - |

### Sponsorship Cards
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| 7-day | Card title | 7-Day Boost | - |
| 7-day | Description | Featured in category listings | - |
| 14-day | Card title | 14-Day Boost | - |
| 14-day | Description | Featured + homepage carousel | - |
| 30-day | Card title | 30-Day Boost | - |
| 30-day | Description | All placements + email spotlight | - |

### Fee Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Transaction fee | Label | Transaction Fee | - |
| Transaction fee | Description | Payment processor fee (e.g., Stripe) | - |
| Platform fee | Label | Platform Fee | - |
| Platform fee | Description | CostFinders marketplace fee | - |

### Calculation Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Example calc | Section | Example Calculation | - |
| Example calc | Row label | Sale Amount | - |
| Example calc | Row label | Transaction Fee ({percent}%) | Dynamic |
| Example calc | Row label | Platform Fee ({percent}%) | Dynamic |
| Example calc | Result label | Net Revenue | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| All sections | Save button | Save Changes | With icon |

---

## 11. Business Billing Page (`src/app/admin/dashboard/monetization/business/[businessId]/page.tsx`)

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Header | Link button | View Business Profile | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Quick stats | Metric label | Active Deals | - |
| Quick stats | Metric label | Credits Available | - |
| Quick stats | Metric label | Leads Received | - |

### Error States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Not found | Title | Business Not Found | - |
| Not found | Description | The business you're looking for doesn't exist or has been removed. | - |
| Not found | Action button | View All Businesses | - |

---

## 12. Reports Page (`src/app/admin/dashboard/reports/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Reports page | Page title | Platform Reports | - |
| Reports page | Subtitle | Platform-wide performance and analytics | - |
| Reports page | Section header | Platform Health | - |
| Reports page | Section header | Business Activity | - |
| Reports page | Section header | Top Performing Categories | - |
| Reports page | Section header | Recent Platform Activity | - |

### Time Period Filters
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Time filter | Option | Last 7 Days | - |
| Time filter | Option | Last 30 Days | - |
| Time filter | Option | Last 90 Days | - |
| Time filter | Option | All Time | - |

### Metric Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Platform metrics | Metric label | Total Platform Revenue | - |
| Platform metrics | Metric label | Active Businesses | - |
| Platform metrics | Metric label | Monthly Claims | - |
| Platform metrics | Metric label | Total Users | - |

### Table Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Business activity | Column header | Metric | - |
| Business activity | Column header | This Period | - |
| Business activity | Column header | Change | - |

### Business Activity Metrics
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Activity table | Row label | New Businesses | - |
| Activity table | Row label | New Claims | - |
| Activity table | Row label | Deal Views | - |
| Activity table | Row label | Messages Sent | - |

### Category Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Top categories | Stat label | {count} claims | Dynamic |

### Activity Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Activity feed | Badge | New Business | - |
| Activity feed | Badge | New Claim | - |
| Activity feed | Badge | Deal Approved | - |
| Activity feed | Badge | Tier Upgrade | - |
| Activity feed | Badge | New User | - |

---

## 13. Data Management Page (`src/app/admin/dashboard/data/page.tsx`)

### Page Titles & Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Data page | Page title | Data Management | - |
| Data page | Subtitle | Export, import, and manage platform data | - |
| Data page | Section header | Export Tools | - |
| Data page | Section header | Bulk Actions | - |
| Data page | Section header | Admin Activity Log | - |
| Activity log | Sub-header | Last 50 actions | - |

### Export Cards
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Export deals | Card title | Export Deals | - |
| Export deals | Card description | Download all deals as CSV | - |
| Export businesses | Card title | Export Businesses | - |
| Export businesses | Card description | Download business directory | - |
| Export users | Card title | Export Users | - |
| Export users | Card description | Download consumer data | - |

### Form Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Export deals | Field label | Format | - |
| Export deals | Option | CSV | - |
| Export deals | Option | JSON | - |
| Export deals | Field label | Date Range | - |
| Export deals | Option | Last 30 days | - |
| Export deals | Option | All time | - |
| Export businesses | Checkbox label | Include inactive businesses | - |
| Export users | Field label | Filter | - |
| Export users | Option | All Users | - |
| Export users | Option | Verified Only | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Export deals | Primary button | Export Deals | - |
| Export businesses | Primary button | Export Businesses | - |
| Export users | Primary button | Export Users | - |

### Bulk Actions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Bulk actions | Description | Perform operations on multiple records at once | - |
| Bulk actions | Button label | Approve All Pending Deals | - |
| Bulk actions | Button label | Notify Inactive Businesses | - |
| Bulk actions | Badge | Coming Soon | Feature flag |
| Bulk actions | Button label | Archive Expired Deals | - |
| Bulk actions | Button label | Cleanup Cancelled Claims | - |

### Activity Log Filters
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Activity filter | Option | All | - |
| Activity filter | Option | Exports | - |
| Activity filter | Option | Moderation | - |
| Activity filter | Option | User Actions | - |

### Table Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Activity log | Column header | Timestamp | - |
| Activity log | Column header | Admin | - |
| Activity log | Column header | Action | - |
| Activity log | Column header | Details | - |
| Activity log | Column header | Status | - |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Activity log | Status badge | Success | - |
| Activity log | Status badge | Warning | - |
| Activity log | Status badge | Failed | - |

---

## 14. Consumer Table Component (`src/components/features/admin/consumerTable.tsx`)

### Table Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Consumer table | Column header | Name | - |
| Consumer table | Column header | Email | - |
| Consumer table | Column header | Phone | - |
| Consumer table | Column header | Verification | - |
| Consumer table | Column header | Status | - |
| Consumer table | Column header | Claims | - |
| Consumer table | Column header | Joined | - |
| Consumer table | Column header | Actions | - |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty table | Title | No users found | - |
| Empty table | Description | Try adjusting your search or filter criteria | - |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Verification | Badge | Fully Verified | - |
| Verification | Badge | Email Verified | - |
| Verification | Badge | Phone Verified | - |
| Verification | Badge | Unverified | - |
| Status | Badge | Active | - |
| Status | Badge | Suspended | - |

### Dropdown Actions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Actions menu | Action | View Details | - |
| Actions menu | Action | Suspend User | Red/danger |
| Actions menu | Action | Activate User | Green/success |

### Mobile Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Mobile card | Label | Claims: | - |
| Mobile card | Label | Joined: | - |

### Fallback Text
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Name field | Fallback | No name | When name is empty |

---

## 15. Business Table Component (`src/components/features/admin/businessTable.tsx`)

### Table Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Business table | Column header | Business | - |
| Business table | Column header | Location | - |
| Business table | Column header | Tier | - |
| Business table | Column header | Status | - |
| Business table | Column header | Deals | - |
| Business table | Column header | Rating | - |
| Business table | Column header | Claimed | - |
| Business table | Column header | Actions | - |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty table | Title | No businesses found | - |
| Empty table | Description | Try adjusting your search or filter criteria | - |

### Tier Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Tier | Badge | Paid | Brand variant |
| Tier | Badge | Free | Info variant |
| Tier | Badge | Unclaimed | Default variant |

### Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Status | Badge | Active | Success variant |
| Status | Badge | Pending | Warning variant |
| Status | Badge | Suspended | Error variant |

### Dropdown Actions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Actions menu | Action | View Details | - |
| Actions menu | Action | Manage Billing | - |
| Actions menu | Action | Change Tier | - |
| Actions menu | Tier option | Unclaimed | - |
| Actions menu | Tier option | Free | - |
| Actions menu | Tier option | Paid | - |
| Actions menu | Action | Suspend Business | Red/danger |
| Actions menu | Action | Activate Business | Green/success |

### Claimed Status
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Claimed column | Yes status | Yes | Green text |
| Claimed column | No status | No | Muted text |

### Mobile Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Mobile card | Label | Deals: | - |
| Mobile card | Label | Claimed: | - |

---

## 16. Business Billing Override Component (`src/components/features/admin/businessBillingOverride.tsx`)

### Card Titles & Descriptions
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Override card | Card title | Billing Override | - |
| Override card | Card description | Manually override tier, billing status, and credits for this business | - |
| History card | Card title | Override History | - |
| History card | Card description | Audit log of all billing changes for this business | - |

### Section Headers
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Current status | Section title | Current Status | - |

### Field Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Current status | Label | Tier | - |
| Current status | Label | Business Status | - |
| Current status | Label | Claimed | - |
| Current status | Label | Verified | - |
| Override form | Label | Tier Assignment | - |
| Override form | Label | Billing Status | - |
| Override form | Label | Grant Credits | - |
| Override form | Label | Custom Lead Price (Optional) | - |
| Override form | Label | Reason for Override | - |

### Toggle & Options
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Override toggle | Label | Enable override mode | - |
| Override toggle | Description | Toggle to make changes to this business's billing settings | - |
| Tier options | Option | Unclaimed | - |
| Tier options | Option | Free | - |
| Tier options | Option | Paid | - |
| Billing options | Option | Active | - |
| Billing options | Option | Suspended | - |
| Billing options | Option | Comped (Free) | - |

### Input Hints
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Credits | Hint | Add bonus credits to this business account | - |
| Custom price | Hint | Leave empty to use tier default pricing | - |
| Reason | Hint | Required - This will be logged in the audit trail | - |
| Reason | Placeholder | e.g., Partnership promotion, billing dispute resolution... | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Override form | Primary button | Save Override | With icon |
| Override form | Secondary button | Cancel | - |
| Confirm modal | Primary button | Confirm Override | - |
| Confirm modal | Secondary button | Cancel | - |

### Confirmation Modal
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Modal | Title | Confirm Override | - |
| Modal | Description | This action will be logged | - |
| Modal | Field label | Tier | - |
| Modal | Field label | Billing Status | - |
| Modal | Field label | Credits Granted | - |
| Modal | Field label | Custom Lead Price | - |

### Billing Status Badges
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Billing status | Badge | Active | Success variant |
| Billing status | Badge | Suspended | Error variant |
| Billing status | Badge | Comped | Warning variant |

### Empty States
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| History empty | Title | No override history | - |
| History empty | Description | Changes made here will be logged for audit purposes | - |

### History Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| History entry | Label | Admin Override | - |
| History entry | Field label | Tier: | - |
| History entry | Field label | Status: | - |
| History entry | Field label | Credits: | - |
| History entry | Field label | Custom Lead Price: | - |

---

## 17. Deal Moderation Card Component (`src/components/features/dealModeration/dealModerationCard.tsx`)

### Category Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category badge | Label | Botox | - |
| Category badge | Label | Fillers | - |
| Category badge | Label | Facials | - |
| Category badge | Label | Laser | - |
| Category badge | Label | Body | - |
| Category badge | Label | Skincare | - |

### Status Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Status badge | Label | Pending Review | - |
| Status badge | Label | Approved | - |
| Status badge | Label | Rejected | - |
| Status badge | Label | Changes Requested | - |

### Deal Details
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Deal card | Label | Price: | - |
| Deal card | Label | Submitted: | - |
| Deal card | Label | Valid: | Date range |
| Deal card | Label | Terms: | - |

### Moderation
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Notes section | Label | Moderation Notes: | - |
| Changes textarea | Placeholder | Describe what changes are needed... | - |

### Buttons
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Actions | Primary button | Approve | Green, with icon |
| Actions | Secondary button | Request Changes | With icon |
| Actions | Danger button | Reject | With icon |
| Notes form | Ghost button | Cancel | - |
| Notes form | Secondary button | Submit Request | - |

---

## 18. Admin Dashboard Sidebar (`src/components/layout/adminDashboardSidebar.tsx`)

### Navigation Labels
| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Sidebar nav | Nav item | Home | - |
| Sidebar nav | Nav item | Deals | - |
| Sidebar nav | Nav item | Users | - |
| Sidebar nav | Nav item | Businesses | - |
| Sidebar nav | Nav item | Content | - |
| Sidebar nav | Nav item | Reports | - |
| Sidebar nav | Nav item | Monetization | - |
| Sidebar nav | Nav item | Data | - |
| Sidebar nav | Nav item | Settings | - |

---

## Summary

### Message Counts by Page
| Page/Component | Count |
|----------------|-------|
| Admin Login | 6 |
| Dashboard Home | 18 |
| Deal Moderation | 14 |
| User Management | 11 |
| Business Management | 14 |
| Content Management | 9 |
| Categories Page | 17 |
| Locations Page | 30 |
| Treatments Page | 28 |
| Monetization Page | 55 |
| Business Billing | 8 |
| Reports Page | 26 |
| Data Management | 31 |
| Consumer Table | 21 |
| Business Table | 24 |
| Business Billing Override | 45 |
| Deal Moderation Card | 22 |
| Admin Sidebar | 9 |

### Total: 284 messages

### Key Patterns Identified

1. **Page Header Pattern**: "Page Title" + "Subtitle description"
2. **Section Headers**: Title case without punctuation
3. **Button Labels**: Action verbs (Add, Create, Save, Export, Cancel)
4. **Filter Tabs**: Entity type variations (All, Active, Pending, etc.)
5. **Empty States**: Title + helpful description + optional action
6. **Feedback Messages**: Dynamic "{name} has been {action}" pattern
7. **Table Headers**: Single words, sentence case
8. **Status Badges**: Consistent tier (Paid/Free/Unclaimed) and status (Active/Suspended/Pending) vocabulary

### Terminology Notes

- "User" vs "Consumer": Admin uses both (User Management page, but Consumer table)
- "Tier" consistently used for business levels: Unclaimed, Free, Paid
- "Credits" for lead payment units
- "Override" for manual admin changes
- "Moderation" for deal review process
