# Consumer Dashboard Messaging Audit

Phase 16-01: Consumer module messaging audit
Generated: 2026-01-12

---

## Summary

| Page/Component | Messages Cataloged |
|----------------|-------------------|
| Dashboard Home (`src/app/dashboard/page.tsx`) | 18 |
| Claims (`src/app/dashboard/claims/page.tsx`) | 10 |
| Favorites (`src/app/dashboard/favorites/page.tsx`) | 6 |
| Settings (`src/app/dashboard/settings/page.tsx`) | 14 |
| Dashboard Sidebar (`dashboardSidebar.tsx`) | 5 |
| Related Components | 20 |
| **Total** | **73** |

---

## Dashboard Sidebar (`src/components/layout/dashboardSidebar.tsx`)

### Navigation Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Nav Item | Link Label | "My Deals" | Dashboard home |
| Nav Item | Link Label | "Favorites" | Saved deals |
| Nav Item | Link Label | "Claims" | Claims tracking |
| Nav Item | Link Label | "Settings" | Account settings |

### Tooltips (baseSidebar.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Sign Out Button | Tooltip | "Sign Out" | Desktop sidebar |

---

## Dashboard Home (`src/app/dashboard/page.tsx`)

### Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page H1 (with name) | Page Title | "Welcome back, {firstName}" | Personalized greeting |
| Page H1 (no name) | Page Title | "Welcome back" | Fallback greeting |
| Page Subtitle | Description | "Here's an overview of your activity" | Dashboard context |
| Quick Actions H2 | Section Title | "Quick Actions" | Action section |
| Empty State H3 | Heading | "Start Exploring Deals" | Onboarding prompt |

### Stats Card Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Saved Deals Card | Metric Label | "Saved Deals" | Static count: 0 |
| Active Claims Card | Metric Label | "Active Claims" | Static count: 0 |
| Verification Card | Metric Label | "Account Status" | Status indicator |

### Verification Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Status Badge | Status | "Fully Verified" | fully_verified state |
| Status Badge | Status | "Email Verified" | email_verified state |
| Status Badge | Status | "Phone Verified" | phone_verified state |
| Status Badge | Status | "Unverified" | Default/pending state |

### Button Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Quick Action | Button | "Browse Deals" | Primary CTA |
| Quick Action | Button | "Complete Profile" | Shown if not fully verified |
| Empty State | Button | "Find Deals Near You" | CTA variation |

### Empty State Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty State P | Instructional | "Browse medspa deals in your area, save your favorites, and claim exclusive pricing." | Value proposition |

---

## Claims Page (`src/app/dashboard/claims/page.tsx`)

### Filter Tab Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Filter Tab | Tab Label | "All" | Default filter |
| Filter Tab | Tab Label | "Active" | Active claims filter |
| Filter Tab | Tab Label | "Completed" | Completed claims filter |
| Filter Tab | Tab Label | "Cancelled" | Cancelled claims filter |

### Empty State Copy

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty H2 (all) | Heading | "No claims yet" | When no claims exist |
| Empty H2 (filtered) | Heading | "No {tab} claims" | Dynamic by filter tab |
| Empty P (all) | Instructional | "Find a deal you love and claim it to get started." | Onboarding prompt |
| Empty P (filtered) | Instructional | "You don't have any {tab} claims at the moment." | Filter-specific |
| Empty State | Button | "Browse Deals" | CTA |

### Claim Status Badges (claimStatusBadge.tsx)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Status Badge | Status | "Pending" | pending state |
| Status Badge | Status | "Contacted" | contacted state |
| Status Badge | Status | "Booked" | booked state |
| Status Badge | Status | "Completed" | completed state |
| Status Badge | Status | "Cancelled" | cancelled state |
| Status Badge | Status | "Expired" | expired state |

---

## Claim Card Component (`src/components/features/claimCard.tsx`)

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Deleted Deal | Status | "Deal no longer available" | Edge case |
| Date Prefix | Label | "Requested: {date}" | Preferred date display |
| Booked Banner | Status | "Completed: {date}" / "Booked: {date}" | Dynamic by status |
| Time Suffix | Label | "at {time}" | Booked time display |
| Response Header | Label | "Business Response" | Response section |
| Footer | Timestamp | "Claimed {relativeTime}" | e.g., "2 days ago" |

### Relative Time Formats

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Time Format | Relative | "Today" | Same day |
| Time Format | Relative | "Yesterday" | Previous day |
| Time Format | Relative | "{n} days ago" | 2-6 days |
| Time Format | Relative | "{n} weeks ago" | 1-4 weeks |
| Time Format | Relative | "{n} months ago" | 1-11 months |
| Time Format | Relative | "{n} years ago" | 1+ years |

---

## Favorites Page (`src/app/dashboard/favorites/page.tsx`)

### Empty State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty H2 | Heading | "No saved deals yet" | Empty favorites |
| Empty P | Instructional | "Browse deals and tap the heart icon to save them for later. Your favorites will appear here." | Help text |
| Button | CTA | "Browse Deals" | Navigation CTA |

### Count Display

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Counter | Status | "{n} saved deal" / "{n} saved deals" | Singular/plural |

---

## Settings Page (`src/app/dashboard/settings/page.tsx`)

### Section Headers

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Profile Card Title | Section Title | "Profile" | User info section |
| Profile Card Description | Description | "Update your personal information" | Section context |
| Notifications Card Title | Section Title | "Notifications" | Alerts section |
| Notifications Card Description | Description | "Control how CostFinders contacts you about deals and claims" | Section context |
| Account Card Title | Section Title | "Account" | Account actions section |
| Account Card Description | Description | "Manage your account settings" | Section context |

### Account Actions

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Sign Out Title | Label | "Sign out" | Action label |
| Sign Out Description | Help Text | "Sign out of your account on this device" | Action description |
| Sign Out Button | Button | "Sign out" | Action button |
| Delete Title | Label | "Delete account" | Action label |
| Delete Description | Help Text | "Permanently delete your account and all data" | Warning text |
| Delete Button | Link | "Contact support" | Support redirect |

### Alert Dialog (via alert())

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Delete Alert | System Message | "Contact support@costfinders.com to delete your account" | Browser alert |

---

## Profile Form (`src/components/features/profileForm.tsx`)

### Field Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Input | Field Label | "First name" | Name field |
| Input | Field Label | "Last name" | Name field |
| Input | Field Label | "Email" | Email field (disabled) |
| Input | Field Label | "Phone" | Phone field |
| Input | Field Label | "City" | Location field |
| Input | Field Label | "State" | Location field |

### Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| First Name Input | Placeholder | "John" | Example name |
| Last Name Input | Placeholder | "Doe" | Example name |
| Phone Input | Placeholder | "(555) 123-4567" | Example format |
| City Input | Placeholder | "Miami" | Example city |
| State Input | Placeholder | "FL" | Example state |

### Validation Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Phone Validation | Error | "Please enter a valid phone number (at least 10 digits)" | Validation error |

### Status Indicators

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email Badge | Status | "Verified" | Email verified indicator |
| Phone Badge | Status | "Verified" | Phone verified indicator |

### Buttons & Feedback

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Submit Button | Button | "Save changes" | Primary action |
| Success Message | Toast | "Profile updated" | Success feedback |

---

## Alert Preferences (`src/components/features/alertPreferences.tsx`)

### Toggle Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email Toggle | Label | "Email notifications" | Toggle title |
| Email Toggle | Description | "Receive deal alerts and claim updates via email" | Toggle description |
| SMS Toggle | Label | "SMS notifications" | Toggle title |
| SMS Toggle (verified) | Description | "Receive deal alerts via text message" | When phone verified |
| SMS Toggle (unverified) | Description | "Add and verify your phone to enable SMS notifications" | When phone not verified |

### Warning Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Phone Warning | Warning | "Phone verification required" | Blocks SMS toggle |

---

## Key Observations

1. **Personalization**: Dashboard greeting uses first name when available ("Welcome back, {name}")
2. **Status Vocabulary**: Consistent claim status terminology: Pending, Contacted, Booked, Completed, Cancelled, Expired
3. **Empty States**: Each section has dedicated empty state with clear CTA to browse deals
4. **Verification Flow**: Multiple verification states communicated (Unverified, Email Verified, Phone Verified, Fully Verified)
5. **Relative Time**: Human-readable time formatting for claim timestamps
6. **Help Text Pattern**: Each settings section has title + description pattern
7. **CTA Consistency**: "Browse Deals" used across empty states for navigation

---

*End of Consumer Dashboard Audit*
