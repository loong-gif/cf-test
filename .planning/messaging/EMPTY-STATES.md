# CostFinders Empty States & Placeholders

## 1. Empty State Philosophy

Empty states are opportunities to guide, not dead ends. When users encounter "nothing here" moments, our messaging transforms potential frustration into clear next steps.

**Core principles:**

| Principle | Description |
|-----------|-------------|
| **Always helpful** | Every empty state suggests what to do next |
| **Never dead-end** | Include an action path when one exists |
| **Context-aware** | Adjust messaging based on why it's empty |
| **Encouraging, not blaming** | User didn't do anything wrong |
| **Brand-aligned** | Maintain "Approachable + Confident" voice |

**Empty state voice traits:** Helpful + Approachable (from VOICE.md)

Every empty state should answer: *Why is this empty? What can I do about it?*

---

## 2. Empty State Categories

### 2.1 First-Time Empty

**Definition:** New user or feature with no data yet.

**Characteristics:**
- Most encouraging tone
- Strong call-to-action
- Explains what will appear here
- Opportunity to guide user behavior

**Tone:** Welcoming, optimistic, action-oriented.

**Pattern:** "No {items} yet" + explanation of what goes here + primary CTA.

---

### 2.2 Search Empty

**Definition:** No results match the search query.

**Characteristics:**
- Acknowledge the search was valid
- Suggest broadening or adjusting criteria
- Offer alternative paths
- Never blame the user's query

**Tone:** Helpful, solution-focused.

**Pattern:** "No {items} found" + suggestion to adjust search + alternative action.

---

### 2.3 Filter Empty

**Definition:** Filters applied resulted in no matches.

**Characteristics:**
- Current filters are too restrictive
- Easy path to clear or adjust filters
- Show what filters are active (when possible)

**Tone:** Neutral, practical.

**Pattern:** "No {items} match your filters" + clear filters CTA.

---

### 2.4 Deleted/Removed Empty

**Definition:** Data existed but was removed or expired.

**Characteristics:**
- Neutral tone (no judgment)
- Option to rebuild or start fresh
- May explain why items are gone (expiration, deletion)

**Tone:** Neutral, forward-looking.

**Pattern:** "No {items} yet" or contextual explanation + rebuild CTA.

---

### 2.5 Error Empty

**Definition:** Failed to load data due to an error.

**Characteristics:**
- Acknowledge something went wrong
- Don't blame the user
- Provide retry option
- Suggest alternative if retry fails

**Tone:** Apologetic, recovery-focused.

**Pattern:** "Couldn't load {items}" + retry CTA + fallback suggestion.

---

### 2.6 Permission Empty

**Definition:** User lacks access to view this content.

**Characteristics:**
- Explain what's restricted
- Clarify why (tier, verification, role)
- Provide path to gain access if possible
- Don't make user feel excluded

**Tone:** Informative, not punitive.

**Pattern:** "{Items} require {requirement}" + upgrade/verify CTA.

---

## 3. Module-Specific Tone Matrix

### Consumer Module

| Tone | Warm, inviting, encouraging |
|------|----------------------------|
| **Goal** | Make users feel welcome, guide them to discover deals |
| **Avoid** | Technical language, harsh phrasing, pressure tactics |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Saved deals | "No saved deals yet" | "Deals you save will appear here. Browse our collection to find something you love." |
| Claims | "No claims yet" | "When you claim a deal, it will show up here so you can track it." |
| Search results | "No deals found" | "Try adjusting your search or browse all deals in your area." |
| Notifications | "No notifications" | "You're all caught up." |

---

### Business Module

| Tone | Professional, efficient, solution-focused |
|------|------------------------------------------|
| **Goal** | Respect their time, provide clear paths to productivity |
| **Avoid** | Over-explaining, vague suggestions, unnecessary warmth |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Deals list | "No deals yet" | "Create your first deal to start attracting customers." |
| Leads inbox | "No leads yet" | "When customers claim your deals, they'll appear here." |
| Messages | "No conversations yet" | "Conversations with leads will appear here." |
| Analytics | "No data yet" | "Analytics will populate as customers interact with your deals." |

---

### Admin Module

| Tone | Factual, concise, tool-oriented |
|------|--------------------------------|
| **Goal** | Provide clear status, enable quick action |
| **Avoid** | Soft language, unnecessary explanation, emotional tone |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Moderation queue | "No deals pending review" | "All caught up. Check back later." |
| User search | "No users found" | "Adjust your search or filters." |
| Content list | "No items found" | "No items match the current filters." |
| Reports | "No data for selected period" | "Try selecting a different date range." |

---

## 4. Empty State Templates by Context

### 4.1 Consumer Module Empty States

#### Saved Deals (Favorites)

| Component | Content |
|-----------|---------|
| **Title** | No saved deals yet |
| **Description** | Deals you save will appear here. Browse our collection to find something you love. |
| **CTA** | Browse deals |
| **Icon** | Heart or Bookmark |
| **Category** | First-time empty |

---

#### Claims/Bookings

| Component | Content |
|-----------|---------|
| **Title** | No claims yet |
| **Description** | When you claim a deal, it will show up here so you can track it. |
| **CTA** | Browse deals |
| **Icon** | Ticket or Receipt |
| **Category** | First-time empty |

---

#### Notifications

| Component | Content |
|-----------|---------|
| **Title** | No notifications |
| **Description** | You're all caught up. |
| **CTA** | None |
| **Icon** | Bell |
| **Category** | First-time empty |

---

#### Deal Search Results

| Component | Content |
|-----------|---------|
| **Title** | No deals found |
| **Description** | Try adjusting your search or browse all deals in your area. |
| **CTA** | Clear search |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Filtered Deal Results

| Component | Content |
|-----------|---------|
| **Title** | No deals match your filters |
| **Description** | Try removing some filters to see more results. |
| **CTA** | Clear filters |
| **Icon** | Funnel |
| **Category** | Filter empty |

---

#### Location No Deals

| Component | Content |
|-----------|---------|
| **Title** | No deals in this area yet |
| **Description** | We're expanding to new locations. Check back soon or try a nearby city. |
| **CTA** | Change location |
| **Icon** | MapPin |
| **Category** | First-time empty |

---

#### Treatment Category Empty

| Component | Content |
|-----------|---------|
| **Title** | No {treatment} deals available |
| **Description** | There are no {treatment} deals in your area right now. Browse other treatments or check back later. |
| **CTA** | Browse all deals |
| **Icon** | Sparkle |
| **Category** | Search empty |

---

### 4.2 Business Module Empty States

#### Deals List

| Component | Content |
|-----------|---------|
| **Title** | No deals yet |
| **Description** | Create your first deal to start attracting customers. |
| **CTA** | Create deal |
| **Icon** | Plus or Tag |
| **Category** | First-time empty |

---

#### Leads Inbox

| Component | Content |
|-----------|---------|
| **Title** | No leads yet |
| **Description** | When customers claim your deals, they'll appear here. |
| **CTA** | None |
| **Icon** | Users or Inbox |
| **Category** | First-time empty |

---

#### Messages/Conversations

| Component | Content |
|-----------|---------|
| **Title** | No conversations yet |
| **Description** | Conversations with leads will appear here. |
| **CTA** | None |
| **Icon** | ChatCircle |
| **Category** | First-time empty |

---

#### Message Search

| Component | Content |
|-----------|---------|
| **Title** | No conversations found |
| **Description** | No conversations match your search. Try different keywords. |
| **CTA** | Clear search |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Lead Search

| Component | Content |
|-----------|---------|
| **Title** | No leads found |
| **Description** | No leads match your search criteria. |
| **CTA** | Clear search |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Analytics Dashboard

| Component | Content |
|-----------|---------|
| **Title** | No data yet |
| **Description** | Analytics will populate as customers interact with your deals. |
| **CTA** | None |
| **Icon** | ChartLine |
| **Category** | First-time empty |

---

#### Analytics Date Range

| Component | Content |
|-----------|---------|
| **Title** | No data for this period |
| **Description** | Try selecting a different date range. |
| **CTA** | Change dates |
| **Icon** | Calendar |
| **Category** | Filter empty |

---

#### Expired Deals

| Component | Content |
|-----------|---------|
| **Title** | No expired deals |
| **Description** | Deals that have passed their end date will appear here. |
| **CTA** | None |
| **Icon** | Clock |
| **Category** | First-time empty |

---

### 4.3 Admin Module Empty States

#### Deals Moderation Queue

| Component | Content |
|-----------|---------|
| **Title** | No deals pending review |
| **Description** | All caught up. Check back later. |
| **CTA** | None |
| **Icon** | CheckCircle |
| **Category** | First-time empty |

---

#### User Management Search

| Component | Content |
|-----------|---------|
| **Title** | No users found |
| **Description** | Adjust your search or filters. |
| **CTA** | Clear filters |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Business Management Search

| Component | Content |
|-----------|---------|
| **Title** | No businesses found |
| **Description** | No businesses match the current criteria. |
| **CTA** | Clear filters |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Treatment Management

| Component | Content |
|-----------|---------|
| **Title** | No treatments found |
| **Description** | No treatments match your search. |
| **CTA** | Clear search |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Location Management

| Component | Content |
|-----------|---------|
| **Title** | No cities found |
| **Description** | No cities match your search criteria. |
| **CTA** | Clear search |
| **Icon** | MagnifyingGlass |
| **Category** | Search empty |

---

#### Reports Empty Period

| Component | Content |
|-----------|---------|
| **Title** | No data for selected period |
| **Description** | Try selecting a different date range. |
| **CTA** | Change dates |
| **Icon** | ChartBar |
| **Category** | Filter empty |

---

#### Flagged Content Queue

| Component | Content |
|-----------|---------|
| **Title** | No flagged content |
| **Description** | No items require attention. |
| **CTA** | None |
| **Icon** | Flag |
| **Category** | First-time empty |

---

#### Audit Log Search

| Component | Content |
|-----------|---------|
| **Title** | No activity found |
| **Description** | No activity matches your filters. |
| **CTA** | Clear filters |
| **Icon** | ClockCounterClockwise |
| **Category** | Filter empty |

---

### 4.4 Shared/Cross-Module Empty States

#### Error Loading Data

| Component | Content |
|-----------|---------|
| **Title** | Couldn't load {items} |
| **Description** | Something went wrong. Please try again. |
| **CTA** | Try again |
| **Icon** | WarningCircle |
| **Category** | Error empty |

---

#### Offline State

| Component | Content |
|-----------|---------|
| **Title** | You're offline |
| **Description** | Check your connection and try again. |
| **CTA** | Retry |
| **Icon** | WifiSlash |
| **Category** | Error empty |

---

#### Permission Denied

| Component | Content |
|-----------|---------|
| **Title** | Access restricted |
| **Description** | You don't have permission to view this content. |
| **CTA** | Go back |
| **Icon** | Lock |
| **Category** | Permission empty |

---

#### Premium Feature Locked

| Component | Content |
|-----------|---------|
| **Title** | Premium feature |
| **Description** | Upgrade to Premium to access this feature. |
| **CTA** | View plans |
| **Icon** | Crown |
| **Category** | Permission empty |

---

#### Verification Required

| Component | Content |
|-----------|---------|
| **Title** | Verification required |
| **Description** | Verify your business to access this feature. |
| **CTA** | Start verification |
| **Icon** | ShieldCheck |
| **Category** | Permission empty |

---

## 5. Placeholder Text Patterns

### 5.1 Input Placeholders

| Input Type | Pattern | Example |
|------------|---------|---------|
| Search | "Search {noun}..." | "Search deals..." |
| Email | "{name}@example.com" | "you@example.com" |
| Phone | "(555) 555-5555" | "(555) 555-5555" |
| URL | "https://{domain}.com" | "https://yourbusiness.com" |
| Text area | "Describe your {item}..." | "Describe your deal..." |
| Standard text | "Enter {item}" | "Enter your name" |
| Password | "Enter password" | "Enter password" |
| Price | "$0.00" | "$0.00" |
| Percentage | "0%" | "0%" |

---

### 5.2 Search Placeholders by Context

| Context | Placeholder |
|---------|-------------|
| Deal search | "Search deals..." |
| Business search | "Search businesses..." |
| User search | "Search users..." |
| Lead search | "Search leads..." |
| Message search | "Search conversations..." |
| Treatment search | "Search treatments..." |
| Location search | "Search cities..." |
| General | "Search..." |

---

### 5.3 Loading State Text

| Context | Text |
|---------|------|
| Standard loading | "Loading..." |
| Deals loading | "Loading deals..." |
| Data loading | "Loading data..." |
| Search in progress | "Searching..." |
| Submitting | "Submitting..." |
| Saving | "Saving..." |
| Processing | "Processing..." |
| Uploading | "Uploading..." |

---

### 5.4 Coming Soon Placeholders

| Context | Text |
|---------|------|
| Feature unavailable | "{Feature} coming soon" |
| Integration pending | "Connect {service} — Coming soon" |
| Beta feature | "{Feature} — In beta" |
| Maintenance | "Temporarily unavailable" |

---

### 5.5 Default Values

| Field Type | Default Display |
|------------|-----------------|
| No image | Placeholder icon or initials |
| No name | "Unknown" or "—" |
| No date | "—" |
| No price | "$—" |
| No rating | "No reviews yet" |
| No count | "0" |

---

## 6. Display Patterns

### 6.1 Visual Hierarchy

Empty states follow a consistent visual structure:

| Element | Specification |
|---------|---------------|
| **Icon** | Optional, 48px, muted color (text-secondary), relevant to context |
| **Title** | text-lg, font-semibold, text-primary |
| **Description** | text-sm, text-secondary, max 2 lines |
| **CTA** | Primary button for main action, link style for secondary |

**Spacing:**
- Icon → Title: 16px (mb-4)
- Title → Description: 8px (mb-2)
- Description → CTA: 16px (mt-4)

---

### 6.2 Layout Guidelines

| Context | Alignment | Container |
|---------|-----------|-----------|
| Full-page empty state | Center (text-center) | Centered in viewport, max-w-md |
| Card/section empty state | Left (text-left) | Contained within card padding |
| Table/list empty state | Center | Full width of table/list container |
| Inline empty state | Left | Inline with content flow |

**Full-page empty state example:**
```
┌──────────────────────────────────────────┐
│                                          │
│              [Icon - 48px]               │
│                                          │
│           No saved deals yet             │
│                                          │
│  Deals you save will appear here.        │
│  Browse our collection to find           │
│  something you love.                     │
│                                          │
│           [Browse deals]                 │
│                                          │
└──────────────────────────────────────────┘
```

---

### 6.3 Icon Recommendations

| Context | Recommended Icon | Alternative |
|---------|------------------|-------------|
| No items (general) | MagnifyingGlass | Folder |
| No search results | MagnifyingGlass | — |
| No messages | ChatCircle | Envelope |
| No notifications | Bell | BellSimple |
| First-time/welcome | Sparkle | RocketLaunch |
| Error loading | WarningCircle | Warning |
| Offline | WifiSlash | CloudSlash |
| No favorites/saved | Heart | Bookmark |
| No leads/users | Users | User |
| No deals | Tag | Ticket |
| Queue empty | CheckCircle | — |
| Locked/restricted | Lock | ShieldCheck |
| Premium required | Crown | Star |
| Calendar/date empty | Calendar | CalendarBlank |
| Analytics empty | ChartLine | ChartBar |

**Icon styling:**
```tsx
<Icon size={48} weight="light" className="text-secondary" />
```

---

### 6.4 Responsive Behavior

| Breakpoint | Adjustments |
|------------|-------------|
| Mobile (< 640px) | Icon size 40px, Description single line if possible |
| Tablet (640-1024px) | Standard layout |
| Desktop (> 1024px) | May increase max-width for full-page states |

---

## 7. Implementation Guidelines

### 7.1 Component Interface

```tsx
interface EmptyStateProps {
  /** Icon component from Phosphor Icons */
  icon?: React.ReactNode;
  /** Main heading text */
  title: string;
  /** Supporting description text */
  description?: string;
  /** Primary call-to-action */
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'link';
  };
  /** Secondary action (displayed as link) */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  /** Layout alignment */
  align?: 'center' | 'left';
  /** Additional CSS classes */
  className?: string;
}
```

---

### 7.2 State Detection Logic

Distinguish between different empty state types:

```tsx
// Pseudocode for state detection
function getEmptyStateType(context) {
  if (isLoading) return null; // Show skeleton, not empty state
  if (hasError) return 'error';
  if (!hasPermission) return 'permission';
  if (hasActiveFilters && data.length === 0) return 'filter';
  if (hasSearchQuery && data.length === 0) return 'search';
  if (data.length === 0) return 'first-time';
  return null; // Has data, no empty state needed
}
```

**Priority order:**
1. Loading → Show skeleton/spinner
2. Error → Error empty state
3. Permission → Permission empty state
4. Filter active + no results → Filter empty state
5. Search active + no results → Search empty state
6. No data → First-time empty state

---

### 7.3 Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Screen reader announcement | Use `role="status"` for dynamic empty states |
| Icon accessibility | Add `aria-hidden="true"` to decorative icons |
| Keyboard navigation | Ensure CTA is keyboard accessible (focusable, activatable) |
| Color independence | Don't rely on color alone; use icons + text |
| Focus management | On filter clear, return focus appropriately |

**Example accessible empty state:**
```tsx
<div role="status" aria-live="polite" className="empty-state">
  <MagnifyingGlass size={48} aria-hidden="true" />
  <h3>No deals found</h3>
  <p>Try adjusting your search or browse all deals.</p>
  <button onClick={clearSearch}>Clear search</button>
</div>
```

---

### 7.4 Animation Guidelines

| Transition | Usage |
|------------|-------|
| Fade in | When empty state first appears |
| Fade out | When data loads and empty state is replaced |
| None | Avoid complex animations that delay content |

**Timing:**
- Fade duration: 150-200ms
- Delay before showing empty state: 300ms (avoid flash on fast loads)

---

## 8. Quick Reference Card

### Always Do

- Include a helpful description
- Provide a CTA when an action is possible
- Match module tone (Consumer warm, Business efficient, Admin factual)
- Use sentence case throughout
- End descriptions with a period
- Use appropriate icons from Phosphor
- Distinguish between search, filter, and first-time empty states
- Use `role="status"` for accessibility

### Never Do

- Leave empty state without any text
- Use "Nothing here" alone (too vague)
- Make user feel bad ("You have no friends")
- Use technical language in consumer module
- Skip the CTA when one is available
- Use title case for empty state titles
- Add exclamation marks
- Show empty state while still loading

---

### Template Quick Reference

| Type | Title Pattern | Description Pattern | CTA Pattern |
|------|---------------|---------------------|-------------|
| First-time | "No {items} yet" | "When you {action}, they'll appear here." | "{Action}" |
| Search | "No {items} found" | "Try adjusting your search or {alternative}." | "Clear search" |
| Filter | "No {items} match your filters" | "Try removing some filters to see more results." | "Clear filters" |
| Error | "Couldn't load {items}" | "Something went wrong. Please try again." | "Try again" |
| Permission | "{Feature} requires {requirement}" | "Upgrade to access this feature." | "View plans" |

---

### Module Tone Quick Reference

| Module | Tone | Example Title | Example Description |
|--------|------|---------------|---------------------|
| Consumer | Warm, encouraging | "No saved deals yet" | "Deals you save will appear here. Browse our collection to find something you love." |
| Business | Professional, efficient | "No leads yet" | "When customers claim your deals, they'll appear here." |
| Admin | Factual, concise | "No users found" | "Adjust your search or filters." |

---

### Icon Quick Reference

| Context | Icon |
|---------|------|
| Search/filter empty | MagnifyingGlass |
| First-time deals | Tag |
| First-time favorites | Heart |
| Messages empty | ChatCircle |
| Leads/users empty | Users |
| Error state | WarningCircle |
| Offline | WifiSlash |
| Permission/locked | Lock |
| Premium feature | Crown |
| Analytics empty | ChartLine |
| Queue clear | CheckCircle |

---

*Based on Phase 17 Voice & Tone Definition and Phase 16 Messaging Audit findings. Empty state patterns support future i18n extraction.*
