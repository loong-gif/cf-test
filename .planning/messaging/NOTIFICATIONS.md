# CostFinders Notification Templates

## 1. Notification Philosophy

Notifications are our opportunity to provide timely, relevant information that helps users succeed. Each notification should earn its place in someone's inbox, phone, or screen by delivering genuine value.

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Earn attention** | Every notification must provide clear value to the recipient |
| **Respect timing** | Send notifications when they're most useful, not most convenient |
| **Stay relevant** | Personalize content based on user actions and preferences |
| **Be actionable** | Include clear next steps when action is needed |
| **Honor preferences** | Always respect opt-out choices and quiet hours |

### Notification Purpose by Channel

| Channel | Best For | Worst For |
|---------|----------|-----------|
| **Email** | Detailed information, receipts, summaries | Urgent alerts |
| **SMS** | Time-sensitive alerts, verification codes | Long-form content |
| **In-app** | Contextual guidance, real-time feedback | Offline users |

### Timing Guidelines

| Type | Send Timing | Batching |
|------|-------------|----------|
| Verification codes | Immediate | Never batch |
| Deal alerts | Within quiet hours window | Daily digest option |
| Lead notifications | Immediate during business hours | Batch outside hours |
| Claim updates | Immediate | Never batch |
| Summaries | Scheduled (daily/weekly) | By design |

### Frequency Limits

| Notification Type | Maximum Frequency |
|-------------------|-------------------|
| Deal alerts | 3 per day (unless urgent) |
| Marketing emails | 2 per week |
| Lead notifications | Unlimited (business-critical) |
| System alerts | As needed |

**Quiet hours:** 9 PM - 8 AM local time (default, user-configurable)

---

## 2. Email Templates

### 2.1 Email Anatomy

Every email follows this structure:

```
┌────────────────────────────────────────────┐
│ SUBJECT LINE (50 chars ideal, 70 max)       │
├────────────────────────────────────────────┤
│ Preview text (90 chars, supplements subject)│
├────────────────────────────────────────────┤
│ Header: Logo + Module branding              │
├────────────────────────────────────────────┤
│ Greeting: "Hi {{first_name}},"              │
├────────────────────────────────────────────┤
│ Body:                                       │
│ - Lead with the news/value                  │
│ - Provide necessary context                 │
│ - Clear call-to-action                      │
├────────────────────────────────────────────┤
│ CTA Button: Primary action                  │
├────────────────────────────────────────────┤
│ Footer:                                     │
│ - Unsubscribe link                          │
│ - Contact info                              │
│ - Legal/address requirements                │
└────────────────────────────────────────────┘
```

### 2.2 Subject Line Formulas

| Type | Formula | Example |
|------|---------|---------|
| Deal alert | "[Discount]% off [Treatment] near you" | "50% off Botox near you" |
| Claim confirmation | "Your [Treatment] claim at [Provider]" | "Your Botox claim at Glow Aesthetics" |
| Verification | "Your CostFinders verification code" | (static) |
| Lead notification | "New lead from CostFinders" | (static) |
| Status update | "[Item] update: [Status]" | "Claim update: Approved" |
| Summary | "Your [period] CostFinders summary" | "Your weekly CostFinders summary" |

### 2.3 Consumer Email Templates

#### Deal Alert Email

**Subject:** {{discount}}% off {{treatment}} near you
**Preview:** Save on {{treatment}} at {{provider_name}} - limited time offer

```markdown
Hi {{first_name}},

A new deal matches your preferences.

**{{deal_title}}**
{{discount}}% off at {{provider_name}}
{{location_city}}, {{location_state}}

**Regular price:** ${{original_price}}
**Deal price:** ${{deal_price}}
**You save:** ${{savings}}

{{#if expiring_soon}}
This deal expires in {{days_remaining}} days.
{{/if}}

[Claim this deal]

---

You're receiving this because you have deal alerts enabled for {{treatment_category}}.
[Manage preferences] | [Unsubscribe from deal alerts]
```

#### Claim Confirmation Email

**Subject:** Your {{treatment}} claim at {{provider_name}}
**Preview:** Claim submitted - here's what happens next

```markdown
Hi {{first_name}},

Your claim was submitted.

**Deal:** {{deal_title}}
**Provider:** {{provider_name}}
**Location:** {{provider_address}}

**What happens next:**
1. {{provider_name}} will contact you within 24-48 hours
2. They'll schedule your appointment
3. Show this email or mention CostFinders at your visit

**Claim details:**
- Claim ID: {{claim_id}}
- Submitted: {{submitted_date}}
- Deal price: ${{deal_price}}

Need help? Reply to this email or visit our Help Center.

[View claim details]

---

You're receiving this because you claimed a deal on CostFinders.
```

#### Email Verification Email

**Subject:** Your CostFinders verification code
**Preview:** Enter this code to verify your email address

```markdown
Hi {{first_name}},

Here's your verification code:

**{{verification_code}}**

This code expires in 10 minutes.

Enter this code on CostFinders to verify your email address.

Didn't request this? You can safely ignore this email.

---

This is an automated message from CostFinders.
```

#### Claim Status Update Email

**Subject:** Claim update: {{status}}
**Preview:** Your claim for {{deal_title}} has been {{status_action}}

```markdown
Hi {{first_name}},

Your claim status has been updated.

**Deal:** {{deal_title}}
**Provider:** {{provider_name}}
**Status:** {{status}}

{{#if status_approved}}
Great news! {{provider_name}} has approved your claim. They'll contact you soon to schedule your appointment.
{{/if}}

{{#if status_expired}}
This deal has expired. Browse similar deals to find another great offer.

[Browse similar deals]
{{/if}}

{{#if status_contacted}}
{{provider_name}} has marked you as contacted. If you haven't heard from them, check your phone and email for their message.
{{/if}}

[View claim details]

---

You're receiving this because you have an active claim on CostFinders.
```

#### Account Security Alert Email

**Subject:** Security alert: {{action_type}} on your account
**Preview:** We noticed {{action_description}} on your CostFinders account

```markdown
Hi {{first_name}},

We noticed a security-related change on your account.

**Action:** {{action_type}}
**Time:** {{timestamp}}
**Location:** {{location}} (approximate)
**Device:** {{device_info}}

If this was you, no action is needed.

If you didn't make this change, secure your account now.

[Secure my account]

---

This is an automated security notification from CostFinders.
```

### 2.4 Business Email Templates

#### New Lead Notification Email

**Subject:** New lead from CostFinders
**Preview:** {{consumer_first_name}} is interested in {{deal_title}}

```markdown
Hi {{business_owner_name}},

You have a new lead.

**Consumer:** {{consumer_first_name}} {{consumer_last_initial}}.
**Deal:** {{deal_title}}
**Claimed:** {{claim_time}}

**Contact information:**
- Email: {{consumer_email}}
- Phone: {{consumer_phone}}

**Recommended action:** Contact this lead within 24 hours for best conversion.

[View lead details]

---

You're receiving this because you have a deal on CostFinders.
[Manage notification preferences]
```

#### Lead Reminder Email

**Subject:** Reminder: Lead waiting for contact
**Preview:** {{consumer_first_name}} claimed {{deal_title}} {{days_ago}} days ago

```markdown
Hi {{business_owner_name}},

You have a lead that hasn't been contacted yet.

**Consumer:** {{consumer_first_name}} {{consumer_last_initial}}.
**Deal:** {{deal_title}}
**Claimed:** {{days_ago}} days ago

Leads contacted within 24 hours are 3x more likely to convert.

[Contact this lead]

---

You're receiving this because you have pending leads on CostFinders.
```

#### Daily/Weekly Summary Email

**Subject:** Your {{period}} CostFinders summary
**Preview:** {{new_leads}} new leads, ${{estimated_revenue}} potential revenue

```markdown
Hi {{business_owner_name}},

Here's your {{period}} summary.

**Leads:**
- New leads: {{new_leads}}
- Contacted: {{leads_contacted}}
- Converted: {{leads_converted}}

**Deals:**
- Active deals: {{active_deals}}
- Total claims: {{total_claims}}
- Claim rate: {{claim_rate}}%

**Performance:**
- Profile views: {{profile_views}}
- Estimated revenue: ${{estimated_revenue}}

{{#if top_performing_deal}}
**Top performer:** {{top_performing_deal.title}} ({{top_performing_deal.claims}} claims)
{{/if}}

[View full dashboard]

---

You're receiving {{period}} summaries. [Change frequency] | [Unsubscribe]
```

#### Business Verification Email

**Subject:** Verify your business on CostFinders
**Preview:** Complete verification to start creating deals

```markdown
Hi {{business_owner_name}},

Welcome to CostFinders! Verify your business to unlock all features.

**Your business:** {{business_name}}
**Status:** Pending verification

**How to verify:**
1. Click the button below
2. Upload a document proving business ownership
3. We'll review within 1-2 business days

Once verified, you can:
- Create and publish deals
- Receive leads from consumers
- Access analytics and insights

[Verify my business]

---

Need help? Reply to this email or visit our Help Center.
```

### 2.5 Admin Email Templates

#### Action Confirmation Email

**Subject:** Action confirmed: {{action_type}}
**Preview:** {{item_count}} {{item_type}}(s) {{action_past_tense}}

```markdown
Admin action completed.

**Action:** {{action_type}}
**Items affected:** {{item_count}}
**Performed by:** {{admin_email}}
**Timestamp:** {{timestamp}}

**Details:**
{{action_details}}

This is an audit record. No response required.

---

CostFinders Admin System
```

#### System Alert Email

**Subject:** [{{severity}}] {{alert_title}}
**Preview:** {{alert_summary}}

```markdown
System alert requires attention.

**Severity:** {{severity}}
**Category:** {{category}}
**Time:** {{timestamp}}

**Summary:**
{{alert_summary}}

**Details:**
{{alert_details}}

{{#if action_required}}
**Required action:**
{{action_instructions}}

[Take action]
{{/if}}

---

CostFinders Admin Alerts
```

### 2.6 Personalization Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{first_name}}` | User's first name | "Sarah" |
| `{{last_initial}}` | User's last initial (privacy) | "M." |
| `{{business_name}}` | Business display name | "Glow Aesthetics" |
| `{{deal_title}}` | Deal headline | "50% Off Botox Treatment" |
| `{{discount}}` | Discount percentage | "50" |
| `{{original_price}}` | Price before discount | "400" |
| `{{deal_price}}` | Discounted price | "199" |
| `{{savings}}` | Amount saved | "201" |
| `{{provider_name}}` | Provider business name | "Glow Aesthetics" |
| `{{location_city}}` | City name | "Austin" |
| `{{location_state}}` | State abbreviation | "TX" |
| `{{claim_id}}` | Unique claim identifier | "CLM-2024-0142" |
| `{{verification_code}}` | 6-digit code | "847293" |
| `{{days_remaining}}` | Days until expiry | "3" |
| `{{period}}` | Time period (daily/weekly) | "weekly" |

---

## 3. SMS Templates

### 3.1 SMS Constraints

| Constraint | Limit | Notes |
|------------|-------|-------|
| **Character limit** | 160 chars | Single segment |
| **Extended limit** | 306 chars | 2 segments (avoid if possible) |
| **URL shortening** | Required | Use branded short links |
| **No markdown** | Plain text only | No formatting available |

### 3.2 SMS Anatomy

```
┌────────────────────────────────────────┐
│ [Brand]: [Message]. [CTA]: [link]      │
│                                        │
│ Max 160 characters for single segment  │
└────────────────────────────────────────┘
```

**Formula:** `CostFinders: [Core message]. [Action hint]: [short link]`

### 3.3 Consumer SMS Templates

#### Verification Code SMS

```
CostFinders: Your code is {{code}}. Expires in 10 min. Don't share this code.
```
**Chars:** 78 | **When:** Immediate | **Priority:** Critical

#### Deal Alert SMS

```
CostFinders: {{discount}}% off {{treatment}} at {{provider_name}}. Claim now: {{short_link}}
```
**Chars:** ~90 | **When:** Within quiet hours | **Priority:** Normal

#### Time-Sensitive Deal SMS

```
CostFinders: {{deal_title}} ends today! Save ${{savings}}. Last chance: {{short_link}}
```
**Chars:** ~85 | **When:** Immediate | **Priority:** High

#### Claim Approved SMS

```
CostFinders: Your {{treatment}} claim was approved! {{provider_name}} will contact you soon.
```
**Chars:** ~95 | **When:** Immediate | **Priority:** High

#### Claim Status SMS

```
CostFinders: Claim update - {{status}}. Details: {{short_link}}
```
**Chars:** ~55 | **When:** Immediate | **Priority:** Normal

### 3.4 Business SMS Templates

#### New Lead SMS

```
CostFinders: New lead for {{deal_title}}. Contact {{consumer_first_name}} soon: {{short_link}}
```
**Chars:** ~90 | **When:** Immediate (business hours) | **Priority:** High

#### Lead Reminder SMS

```
CostFinders: {{consumer_first_name}} is waiting. Contact them within 24hrs for best results: {{short_link}}
```
**Chars:** ~105 | **When:** 24hrs after claim | **Priority:** Normal

### 3.5 SMS Timing Rules

| Type | Send Window | Batching |
|------|-------------|----------|
| Verification codes | Immediate, any time | Never |
| Deal alerts | 9 AM - 8 PM local | Daily digest option |
| Claim updates | 9 AM - 9 PM local | Never |
| Lead notifications | 8 AM - 8 PM local | Never |
| Reminders | 10 AM - 6 PM local | Batch if multiple |

### 3.6 SMS Opt-Out Copy

**Required footer for marketing SMS:**
```
Reply STOP to unsubscribe
```

**Opt-out confirmation:**
```
CostFinders: You've been unsubscribed from SMS alerts. Manage preferences at {{settings_link}}
```

---

## 4. In-App Notifications

### 4.1 In-App Types

| Type | Duration | Use Case | Position |
|------|----------|----------|----------|
| **Toast** | 4-6 seconds | Action feedback | Bottom-right |
| **Banner** | Until dismissed | Important status | Top of page |
| **Badge** | Persistent | Count indicators | On icons/tabs |
| **Modal** | Until action | Critical decisions | Center overlay |

### 4.2 Toast Notifications

Toast notifications provide immediate feedback for user actions.

#### Toast Anatomy

```
┌──────────────────────────────────────────┐
│ [Icon] [Title]                      [X]  │
│        [Description - optional]          │
│        [Action link - optional]          │
└──────────────────────────────────────────┘
```

#### Success Toasts

| Trigger | Title | Description |
|---------|-------|-------------|
| Claim submitted | "Claim submitted" | "{{provider_name}} will contact you soon" |
| Settings saved | "Settings saved" | — |
| Deal saved | "Deal saved" | "View in your saved deals" |
| Profile updated | "Profile updated" | — |
| Alert created | "Alert created" | "We'll notify you of matching deals" |
| Deal published | "Deal published" | "Now visible to consumers" |
| Lead marked contacted | "Lead updated" | "Marked as contacted" |

#### Info Toasts

| Trigger | Title | Description |
|---------|-------|-------------|
| Deal expiring | "Deal ends soon" | "{{deal_title}} expires in {{days}} days" |
| New feature | "New feature" | "Try the new deal comparison tool" |
| Syncing | "Syncing..." | "Your data is being updated" |

#### Warning Toasts

| Trigger | Title | Description |
|---------|-------|-------------|
| Session expiring | "Session expiring" | "You'll be signed out in 5 minutes" |
| Incomplete profile | "Complete your profile" | "Add a photo to increase responses" |
| Deal ending | "Last chance" | "This deal expires today" |

#### Error Toasts

| Trigger | Title | Description |
|---------|-------|-------------|
| Network error | "Connection lost" | "Check your internet and try again" |
| Save failed | "Couldn't save" | "Your changes weren't saved. Try again." |
| Action failed | "Something went wrong" | "Please try again" |

### 4.3 Banner Notifications

Banners persist until the user dismisses them or takes action.

#### System Banners

| Type | Message | CTA |
|------|---------|-----|
| **Verification needed** | "Verify your email to claim deals" | "Verify now" |
| **Profile incomplete** | "Complete your profile to get personalized deals" | "Complete profile" |
| **Maintenance** | "Scheduled maintenance tonight 2-4 AM EST" | "Learn more" |
| **New version** | "A new version is available" | "Refresh" |

#### Business Banners

| Type | Message | CTA |
|------|---------|-----|
| **Verification pending** | "Your business is being verified. This takes 1-2 days." | — |
| **Subscription expiring** | "Your subscription expires in {{days}} days" | "Renew now" |
| **No active deals** | "You have no active deals. Create one to get leads." | "Create deal" |
| **Pending leads** | "You have {{count}} leads waiting for contact" | "View leads" |

#### Admin Banners

| Type | Message | CTA |
|------|---------|-----|
| **Items pending** | "{{count}} items need review" | "Review now" |
| **System alert** | "High API latency detected" | "View status" |

### 4.4 Badge Notifications

Badges indicate counts or status on navigation elements.

| Element | Badge Shows | Max Display |
|---------|-------------|-------------|
| **Claims tab** | Active claims count | "9+" |
| **Leads tab** | New leads count | "99+" |
| **Messages** | Unread count | "99+" |
| **Notifications bell** | Unread notifications | "9+" |
| **Review queue** | Pending reviews | "999+" |

**Badge copy rules:**
- Show exact count up to threshold
- Show "X+" when exceeding threshold
- Hide badge when count is 0
- Use red for urgent, gray for informational

### 4.5 Modal Notifications

Reserved for critical information requiring user acknowledgment.

#### Confirmation Modals

| Trigger | Title | Body | Primary CTA | Secondary |
|---------|-------|------|-------------|-----------|
| Delete account | "Delete your account?" | "This will permanently delete all your data. This can't be undone." | "Delete account" | "Cancel" |
| Cancel claim | "Cancel this claim?" | "The provider will be notified that you're no longer interested." | "Cancel claim" | "Keep claim" |
| Unpublish deal | "Unpublish this deal?" | "Current claims will remain active, but no new claims can be made." | "Unpublish" | "Cancel" |

#### Alert Modals

| Trigger | Title | Body | CTA |
|---------|-------|------|-----|
| Session expired | "Session expired" | "Please sign in again to continue." | "Sign in" |
| Major update | "Important update" | "We've updated our terms of service. Please review before continuing." | "Review changes" |

### 4.6 In-App Timing Guidelines

| Notification Type | When to Show |
|-------------------|--------------|
| Action feedback | Immediate (< 100ms perceived) |
| Status changes | On page load or real-time |
| Promotional | Once per session max |
| System alerts | Immediate, persist until resolved |

### 4.7 Notification Preferences Copy

**Preferences page section headers:**

- "Deal alerts" — "Get notified when new deals match your preferences"
- "Claim updates" — "Stay informed about your claim status"
- "Marketing" — "Receive tips, features, and special offers"
- "Lead notifications" — "Get alerted when consumers claim your deals"
- "Performance summaries" — "Receive daily or weekly business insights"

**Toggle labels:**
- "Email notifications"
- "SMS notifications"
- "Push notifications"
- "In-app notifications"

**Frequency options:**
- "Instant" — "Get notified immediately"
- "Daily digest" — "One summary per day"
- "Weekly digest" — "One summary per week"
- "Off" — "Don't send these notifications"

---

## 5. Consumer Module Notifications

Complete notification catalog for the consumer experience.

### 5.1 Email Notifications

| Notification | Subject | Preview Text | Trigger |
|--------------|---------|--------------|---------|
| Deal alert | "{{discount}}% off {{treatment}} near you" | "Save on {{treatment}} at {{provider_name}}" | New deal matches preferences |
| Claim confirmation | "Your {{treatment}} claim at {{provider_name}}" | "Claim submitted - here's what happens next" | Claim submitted |
| Claim approved | "Claim update: Approved" | "{{provider_name}} approved your claim" | Provider approves |
| Claim contacted | "Claim update: Contacted" | "{{provider_name}} has reached out" | Provider marks contacted |
| Claim expired | "Claim update: Expired" | "This deal has expired" | Deal expires |
| Email verification | "Your CostFinders verification code" | "Enter this code to verify your email" | Account creation |
| Password reset | "Reset your CostFinders password" | "Use this link to create a new password" | Password reset request |
| Security alert | "Security alert: {{action_type}}" | "We noticed {{action_description}}" | Suspicious activity |
| Weekly digest | "Your weekly deal roundup" | "{{count}} new deals in your area" | Weekly (if enabled) |

### 5.2 SMS Notifications

| Notification | Template | Trigger |
|--------------|----------|---------|
| Verification | "CostFinders: Your code is {{code}}. Expires in 10 min." | Phone verification |
| Deal alert | "CostFinders: {{discount}}% off {{treatment}}. Claim: {{link}}" | High-value deal match |
| Claim approved | "CostFinders: Claim approved! {{provider_name}} will contact you." | Provider approves |
| Deal expiring | "CostFinders: {{deal_title}} ends today! Last chance: {{link}}" | 24hrs before expiry |

### 5.3 In-App Notifications

| Notification | Type | Message | Trigger |
|--------------|------|---------|---------|
| Claim submitted | Toast (success) | "Claim submitted" | After claim |
| Deal saved | Toast (success) | "Deal saved" | Save deal |
| Alert created | Toast (success) | "Alert created" | Create alert |
| Settings saved | Toast (success) | "Settings saved" | Save settings |
| Verify email | Banner | "Verify your email to claim deals" | Unverified account |
| Complete profile | Banner | "Complete your profile for personalized deals" | Incomplete profile |
| New claims | Badge | Count on Claims tab | New claim activity |

---

## 6. Business Module Notifications

Complete notification catalog for the business dashboard.

### 6.1 Email Notifications

| Notification | Subject | Preview Text | Trigger |
|--------------|---------|--------------|---------|
| New lead | "New lead from CostFinders" | "{{name}} is interested in {{deal_title}}" | New claim on deal |
| Lead reminder | "Reminder: Lead waiting for contact" | "{{name}} claimed {{deal_title}} {{days}} days ago" | 48hrs no contact |
| Daily summary | "Your daily CostFinders summary" | "{{leads}} new leads, ${{revenue}} potential" | Daily (if enabled) |
| Weekly summary | "Your weekly CostFinders summary" | "{{leads}} leads, {{claims}} claims this week" | Weekly (if enabled) |
| Deal expiring | "Your deal expires in {{days}} days" | "Renew {{deal_title}} to keep getting leads" | 7 days before expiry |
| Deal expired | "Your deal has expired" | "{{deal_title}} is no longer active" | Deal expires |
| Business verification | "Verify your business on CostFinders" | "Complete verification to start creating deals" | After signup |
| Verification approved | "Your business is verified!" | "You can now create and publish deals" | Verification complete |
| Subscription reminder | "Your subscription renews in {{days}} days" | "Review your plan before renewal" | 7 days before renewal |
| Payment failed | "Payment failed for CostFinders" | "Update your payment method to continue" | Payment failure |

### 6.2 SMS Notifications

| Notification | Template | Trigger |
|--------------|----------|---------|
| New lead | "CostFinders: New lead for {{deal}}. Contact soon: {{link}}" | New claim |
| Lead reminder | "CostFinders: {{name}} waiting. Contact within 24hrs: {{link}}" | 24hrs no contact |
| Verification code | "CostFinders: Your code is {{code}}. Expires in 10 min." | Phone verification |

### 6.3 In-App Notifications

| Notification | Type | Message | Trigger |
|--------------|------|---------|---------|
| Deal published | Toast (success) | "Deal published" | Publish deal |
| Deal updated | Toast (success) | "Deal updated" | Save deal changes |
| Lead contacted | Toast (success) | "Lead updated" | Mark as contacted |
| Settings saved | Toast (success) | "Settings saved" | Save settings |
| Pending verification | Banner | "Your business is being verified" | Awaiting verification |
| No active deals | Banner | "Create a deal to start getting leads" | No deals |
| Pending leads | Banner | "{{count}} leads waiting for contact" | Uncontacted leads |
| New leads | Badge | Count on Leads tab | New leads |
| Subscription expiring | Banner | "Subscription expires in {{days}} days" | 7 days before expiry |

---

## 7. Admin Module Notifications

Minimal, factual notifications for administrative functions.

### 7.1 Email Notifications

| Notification | Subject | Preview Text | Trigger |
|--------------|---------|--------------|---------|
| Action confirmation | "Action confirmed: {{action_type}}" | "{{count}} items {{action_past_tense}}" | Bulk action complete |
| System alert | "[{{severity}}] {{alert_title}}" | "{{alert_summary}}" | System issue detected |
| Daily report | "Daily admin report" | "{{pending}} pending, {{flagged}} flagged items" | Daily (if enabled) |
| Escalation | "Escalation: {{item_type}} requires attention" | "Item flagged for review" | Auto-escalation |

### 7.2 In-App Notifications

| Notification | Type | Message | Trigger |
|--------------|------|---------|---------|
| Action complete | Toast (success) | "{{count}} items {{action}}" | Bulk action |
| Item approved | Toast (success) | "Item approved" | Single approval |
| Item rejected | Toast (info) | "Item rejected" | Single rejection |
| Items pending | Banner | "{{count}} items need review" | Pending queue |
| System alert | Banner | "{{alert_message}}" | System issue |
| Review queue | Badge | Count on review tabs | Pending items |

---

## 8. Quick Reference

### 8.1 Subject Line Formulas

| Type | Formula | Example |
|------|---------|---------|
| Deal alert | "[Discount]% off [Treatment] near you" | "50% off Botox near you" |
| Claim confirmation | "Your [Treatment] claim at [Provider]" | "Your Botox claim at Glow Aesthetics" |
| Status update | "Claim update: [Status]" | "Claim update: Approved" |
| Lead notification | "New lead from CostFinders" | (static) |
| Verification | "Your CostFinders verification code" | (static) |
| Summary | "Your [period] CostFinders summary" | "Your weekly CostFinders summary" |
| Security | "Security alert: [Action]" | "Security alert: New sign-in" |
| System | "[[Severity]] [Title]" | "[HIGH] API latency detected" |

### 8.2 SMS Character Budget

| Component | Budget | Example |
|-----------|--------|---------|
| Brand prefix | 13 chars | "CostFinders: " |
| Core message | 100-120 chars | Main content |
| CTA + link | 25-30 chars | "Claim now: cf.co/abc" |
| **Total** | **160 chars max** | Single segment |

### 8.3 Personalization Variables

| Variable | Description | Module |
|----------|-------------|--------|
| `{{first_name}}` | User's first name | All |
| `{{last_initial}}` | Privacy-safe last initial | All |
| `{{business_name}}` | Business display name | Business |
| `{{deal_title}}` | Deal headline | All |
| `{{discount}}` | Discount percentage | Consumer |
| `{{original_price}}` | Price before discount | Consumer |
| `{{deal_price}}` | Discounted price | Consumer |
| `{{savings}}` | Amount saved | Consumer |
| `{{provider_name}}` | Provider business name | Consumer |
| `{{location_city}}` | City name | Consumer |
| `{{location_state}}` | State abbreviation | Consumer |
| `{{claim_id}}` | Unique claim ID | All |
| `{{code}}` | Verification code | All |
| `{{days}}` | Days count (remaining/ago) | All |
| `{{count}}` | Item count | All |
| `{{period}}` | Time period | Business |
| `{{short_link}}` | Shortened URL | SMS |
| `{{status}}` | Status text | All |

### 8.4 Do's and Don'ts

#### Do's ✓

| Do | Why |
|----|-----|
| Lead with the value | Users scan, put important info first |
| Use specific numbers | "$50 off" beats "big savings" |
| Include next steps | Reduce friction, guide action |
| Personalize when possible | Higher engagement with names |
| Respect quiet hours | 9 PM - 8 AM local time by default |
| Test on mobile | Most notifications read on phones |
| Keep SMS under 160 chars | Avoid message splitting |

#### Don'ts ✗

| Don't | Why |
|-------|-----|
| Use ALL CAPS | Feels like shouting |
| Overuse exclamation marks | One per message maximum |
| Send too frequently | Causes notification fatigue |
| Use vague subjects | "Update" tells user nothing |
| Forget unsubscribe | Legal requirement |
| Batch verification codes | Security-critical, send immediately |
| Use jargon | "Your claim was queued" → "We received your claim" |

---

## 9. Implementation Notes

### 9.1 i18n Extraction Keys

Suggested key structure for internationalization:

```
notifications.email.[module].[type].subject
notifications.email.[module].[type].preview
notifications.email.[module].[type].body
notifications.sms.[module].[type]
notifications.inapp.[type].[variant].title
notifications.inapp.[type].[variant].description
notifications.preferences.[section].label
notifications.preferences.[section].description
```

**Examples:**
```
notifications.email.consumer.deal_alert.subject = "{{discount}}% off {{treatment}} near you"
notifications.email.consumer.deal_alert.preview = "Save on {{treatment}} at {{provider_name}}"
notifications.sms.consumer.verification = "CostFinders: Your code is {{code}}. Expires in 10 min."
notifications.inapp.toast.success.claim_submitted.title = "Claim submitted"
notifications.inapp.toast.success.claim_submitted.description = "{{provider_name}} will contact you soon"
```

### 9.2 Template Engine Requirements

- Support Handlebars-style `{{variable}}` syntax
- Support conditionals: `{{#if condition}}...{{/if}}`
- Support loops: `{{#each items}}...{{/each}}`
- Escape HTML in variables by default
- Allow raw output with `{{{variable}}}` when needed

### 9.3 Delivery Service Integration

| Channel | Recommended Service | Fallback |
|---------|--------------------| ---------|
| Email | SendGrid / Resend | Amazon SES |
| SMS | Twilio | Amazon SNS |
| Push | Firebase Cloud Messaging | OneSignal |
| In-app | Custom (React state) | — |

### 9.4 Tracking & Analytics

Track these metrics per notification type:
- **Email:** Open rate, click rate, unsubscribe rate
- **SMS:** Delivery rate, opt-out rate
- **In-app:** Impression rate, dismissal rate, action rate

### 9.5 Testing Checklist

- [ ] All personalization variables render correctly
- [ ] Fallback values for missing data
- [ ] Character limits respected (SMS, subject lines)
- [ ] Links are valid and trackable
- [ ] Unsubscribe links work
- [ ] Quiet hours respected
- [ ] Frequency limits enforced
- [ ] Preview text displays correctly in email clients
- [ ] Mobile rendering verified

---

