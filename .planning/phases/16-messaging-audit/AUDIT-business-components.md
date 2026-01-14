# Business Components Messaging Audit

**Audit Date:** 2026-01-12
**Auditor:** Claude Opus 4.5
**Module:** Business Feature Components (dealManagement, leadManagement, messaging, analytics)

## Summary

Total messages cataloged: **142**
- Section headings: 16
- Form labels/placeholders: 32
- Button labels/CTAs: 24
- Error messages: 14
- Success/status messages: 8
- Instructional copy: 18
- Metric/tooltip labels: 22
- Table headers: 8

---

## 1. Deal Management Components

### DealForm (`src/components/features/dealManagement/dealForm.tsx`)

#### Section Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Page title (create) | H1 | Create New Deal | Imperative |
| Page title (edit) | H1 | Edit Deal | Imperative |
| Subtitle (create) | Body | Add a new special offer for your customers | Benefit-focused |
| Subtitle (edit) | Body | Update your deal details | Action description |
| Section 1 | H2 | Basic Information | Noun phrase |
| Section 2 | H2 | Pricing | Single word |
| Section 3 | H2 | Validity Period | Noun phrase |
| Section 4 | H2 | Additional Details | Noun phrase |
| Section 5 | H2 | Settings | Single word |

#### Form Labels & Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Title | Label | Deal Title | Noun phrase |
| Title | Placeholder | e.g., Botox Special | Example with "e.g." |
| Description | Label | Description | Single word |
| Description | Placeholder | Describe your deal... | Instruction with ellipsis |
| Category | Label | Category | Single word |
| Category options | Select | Botox, Fillers, Facials, Laser, Body, Skincare | Treatment types |
| Original price | Label | Original Price | Title case |
| Original price | Placeholder | e.g., 14 | Example |
| Deal price | Label | Deal Price | Title case |
| Deal price | Placeholder | e.g., 10 | Example |
| Unit | Label | Unit | Single word |
| Unit | Placeholder | e.g., per unit, per session | Examples |
| Min units | Label | Min Units | Abbreviated |
| Min units | Placeholder | Optional | Hint |
| Min units | Hint | Minimum purchase | Full phrase |
| Max units | Label | Max Units | Abbreviated |
| Max units | Placeholder | Optional | Hint |
| Max units | Hint | Maximum purchase | Full phrase |
| Valid from | Label | Valid From | Title case |
| Valid until | Label | Valid Until | Title case |
| Terms | Label | Terms & Conditions | Ampersand |
| Terms | Placeholder | e.g., New clients only. Cannot be combined with other offers. | Full example |
| Image URL | Label | Image URL | Title case |
| Image URL | Placeholder | https://example.com/image.jpg | URL example |
| Image URL | Hint | Optional cover image for your deal | Benefit hint |

#### Checkbox Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Active title | Label | Active | Single word |
| Active desc | Text | Deal will be visible to customers when active | Explanation |
| Featured title | Label | Featured | Single word |
| Featured desc | Text | Featured deals appear at the top of search results | Benefit |

#### Button Labels & CTAs

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Cancel | Button | Cancel | Single word |
| Submit (create) | Button | Create Deal | Imperative |
| Submit (edit) | Button | Save Changes | Imperative |

#### Error Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Title required | Error | Title is required | Standard pattern |
| Description required | Error | Description is required | Standard pattern |
| Original price invalid | Error | Original price must be a positive number | Specific requirement |
| Deal price invalid | Error | Deal price must be a positive number | Specific requirement |
| Deal price too high | Error | Deal price must be less than original price | Business rule |
| Unit required | Error | Unit is required | Standard pattern |
| Start date required | Error | Start date is required | Standard pattern |
| End date required | Error | End date is required | Standard pattern |
| End date invalid | Error | End date must be after start date | Business rule |
| Terms required | Error | Terms and conditions are required | Standard pattern |

#### Success/Status Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success (create) | Success | Deal created successfully! Redirecting... | Exclamatory + action |
| Success (edit) | Success | Deal updated successfully! Redirecting... | Exclamatory + action |
| Error (create) | Error | Failed to create deal. Please try again. | Polite recovery |
| Error (edit) | Error | Failed to update deal. Please try again. | Polite recovery |

#### Discount Preview

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Discount indicator | Text | {n}% discount | Dynamic percentage |

---

### DealList (`src/components/features/dealManagement/dealList.tsx`)

Covered in dashboard audit. Key additions:

#### Modal Content (Boost)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Boost modal title | H2 | Boost Your Deal | Possessive |

---

## 2. Lead Management Components

### LeadList (`src/components/features/leadManagement/leadList.tsx`)

Covered in dashboard audit. Key patterns:

#### Time Formatting

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Just now | Text | Just now | Informal |
| Hours ago | Text | {n} hour(s) ago | Relative |
| Yesterday | Text | Yesterday | Single word |
| Days ago | Text | {n} days ago | Relative |
| Weeks ago | Text | {n} week(s) ago | Relative |
| Months ago | Text | {n} month(s) ago | Relative |

#### Customer Display

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Customer ID | Text | Customer #{n} | Hash format |

---

### LeadDetail (`src/components/features/leadManagement/leadDetail.tsx`)

Covered in dashboard audit. Key additions:

#### Status Action Buttons

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Pending->Contacted | Button | Mark Contacted | Imperative |
| Pending->Cancelled | Button | Cancel | Single word |
| Contacted->Booked | Button | Mark Booked | Imperative |
| Contacted->Cancelled | Button | Cancel | Single word |
| Booked->Completed | Button | Mark Completed | Imperative |
| Booked->Cancelled | Button | Cancel | Single word |

---

## 3. Messaging Components

### MessageThread (`src/components/features/messaging/messageThread.tsx`)

#### Section Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Thread header | H3 | Messages | Single word |

#### Empty States

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Empty title | Body | Start the conversation | Imperative |
| Empty subtitle | Body | Send a message to begin chatting | Instruction |

#### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Message input | Placeholder | Type a message... | Instruction with ellipsis |

#### Time Formatting

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Today | Text | {time} | Just time |
| Yesterday | Text | Yesterday {time} | Day + time |
| This week | Text | {weekday} {time} | Day + time |
| Older | Text | {month day} {time} | Date + time |

---

## 4. Analytics Components

### AnalyticsDashboard (`src/components/features/analytics/analyticsDashboard.tsx`)

#### Section Headings

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Performance table | H3 | Deal Performance | Noun phrase |
| Performance desc | Body | How your deals are performing | Question format |
| Trends section | H3 | Insights & Trends | Ampersand |
| Trends desc | Body | Key patterns in your performance | Noun phrase |

#### Metric Cards

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Metric 1 title | Text | Total Views | Noun phrase |
| Metric 1 value | Text | 1,234 | Formatted number |
| Metric 1 change | Text | +12% vs last month | Comparison |
| Metric 2 title | Text | Total Claims | Noun phrase |
| Metric 2 value | Text | 45 | Number |
| Metric 2 change | Text | +8% vs last month | Comparison |
| Metric 3 title | Text | Conversion Rate | Noun phrase |
| Metric 3 value | Text | 3.6% | Percentage |
| Metric 3 change | Text | -0.2% vs last month | Negative comparison |
| Metric 4 title | Text | Revenue Potential | Noun phrase |
| Metric 4 value | Text | $12,450 | Currency |
| Metric 4 change | Text | +$1,200 vs last month | Currency comparison |

#### Tooltip Content

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Views tooltip | Text | Total number of times your deals were viewed this month | Full explanation |
| Claims tooltip | Text | Number of customers who claimed your deals this month | Full explanation |
| Conversion tooltip | Text | Percentage of viewers who claimed a deal | Definition |
| Revenue tooltip | Text | Sum of deal prices for all claimed deals this month | Calculation explanation |
| Performance tooltip | Text | Performance data based on the last 30 days | Timeframe note |
| Trends tooltip | Text | Insights based on the last 30 days of activity | Timeframe note |

#### Table Headers

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Column 1 | TH | Deal | Single word |
| Column 2 | TH | Views | Single word |
| Column 3 | TH | Claims | Single word |
| Column 4 | TH | Conv. % | Abbreviated |
| Column 5 | TH | Status | Single word |

#### Status Badges

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Active | Badge | Active | Single word |
| Paused | Badge | Paused | Single word |
| Expired | Badge | Expired | Single word |

#### Trend Insights

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Trend 1 | Text | Views trending up 12% this month | Statement |
| Trend 2 | Text | Botox deals receive 40% of all claims | Data insight |
| Trend 3 | Text | Peak activity: Weekday afternoons | Colon format |
| Trend 4 | Text | Fridays see highest claim volume | Statement |

---

## Cross-Component Patterns

### Consistent Patterns Observed

1. **Time formatting**: Consistent relative time across components
   - "Just now", "X hours ago", "Yesterday", "X days ago"

2. **Customer identification**: Anonymous "Customer #N" format throughout

3. **Search placeholder format**: "Search {noun}..." with ellipsis

4. **Button action verbs**: "Mark X", "Save X", "Create X"

5. **Error message structure**: "Field is required" or "Field must be X"

6. **Tooltip explanations**: Full sentences with timeframe context

### Inconsistencies Across Components

1. **Section heading style**:
   - "Basic Information" vs "Pricing" vs "Settings"
   - Mix of noun phrases and single words

2. **Label format**:
   - "Deal Title" vs "Description" vs "Category"
   - Some Title Case, some single words

3. **Placeholder format**:
   - "e.g., X" vs "Describe your deal..." vs "Optional"
   - Inconsistent use of "e.g." prefix

4. **Change indicators**:
   - "+12% vs last month" uses "vs"
   - Could be "from" or "compared to"

5. **Success message format**:
   - "Deal created successfully! Redirecting..." uses exclamation
   - Other messages don't

### Component-Specific Vocabulary

| Component | Key Terms |
|-----------|-----------|
| DealForm | Deal, offer, valid, terms, featured |
| LeadList | Lead, customer, inquiry, booking |
| LeadDetail | Request, contact, status, notes |
| MessageThread | Message, conversation, chat |
| AnalyticsDashboard | Views, claims, conversion, performance |

---

## Recommendations for Style Guide

### Form Labels
1. Decide between Title Case ("Deal Title") or single words ("Description")
2. Standardize "e.g." usage in placeholders
3. Define when to use hints vs placeholders

### Error Messages
1. Use consistent "X is required" for required fields
2. Use "X must be Y" for validation rules
3. Always include recovery suggestion for action failures

### Time Formatting
1. Document relative time thresholds
2. Standardize date formats (e.g., "Feb 15, 2025" vs "February 15, 2025")

### Tooltips
1. Always include timeframe context
2. Use full sentences
3. Start with noun phrase describing the metric

### Status Actions
1. Use "Mark X" pattern for status transitions
2. Use single word "Cancel" for cancellation actions
3. Include icon + text for primary actions
