# CostFinders Error Messaging System

## 1. Error Philosophy

Errors are opportunities to help, not moments of blame. When something goes wrong, users are already frustrated, so our error messages must immediately shift toward solutions rather than dwelling on what went wrong.

**Core principles:**

| Principle | Description |
|-----------|-------------|
| **Be specific** | Tell users exactly what happened and what to do |
| **Stay helpful** | Guide toward the solution, not just state the problem |
| **Avoid blame** | Use "we" language for system errors, neutral language for validation |
| **Act quickly** | Surface errors as early as possible (inline validation > form submission errors) |
| **Stay human** | Write like a helpful colleague, not a machine |

**Error voice traits:** Helpful + Clear (from VOICE.md)

Every error message should answer: *What happened? What can I do about it?*

---

## 2. Error Categories

### 2.1 Form Validation Errors

**Definition:** Field-level errors caught during user input or form submission.

**Characteristics:**
- Immediate feedback (inline when possible)
- Specific to the field with issue
- Clear about the requirement

**Display:** Inline below field, red text with error icon.

---

### 2.2 Business Logic Errors

**Definition:** Errors from workflow violations, state conflicts, or business rules.

**Characteristics:**
- Action-blocking but recoverable
- May require context explanation
- Often need alternative action suggestion

**Display:** Form-level banner or toast notification.

---

### 2.3 Network/Connectivity Errors

**Definition:** Errors from lost connection, timeout, or failed API requests.

**Characteristics:**
- Not user's fault
- Usually recoverable with retry
- Should suggest checking connection

**Display:** Toast notification with retry option.

---

### 2.4 Authentication Errors

**Definition:** Errors related to login, credentials, or identity verification.

**Characteristics:**
- Security-sensitive (don't reveal too much)
- Often need alternative recovery paths
- Should guide to reset/recovery flows

**Display:** Form-level banner on auth pages.

---

### 2.5 Authorization/Permission Errors

**Definition:** Errors when user lacks permission for an action.

**Characteristics:**
- Explain what's blocked and why
- Suggest how to gain access if possible
- Don't shame the user

**Display:** Page-level or modal messaging.

---

### 2.6 System/Server Errors

**Definition:** Backend failures, infrastructure issues, or unexpected errors.

**Characteristics:**
- Not user's fault, acknowledge this
- Don't expose technical details
- Suggest retry or contact support

**Display:** Page-level error boundary or toast.

---

### 2.7 Rate Limiting Errors

**Definition:** Errors from too many requests in a time period.

**Characteristics:**
- Explain the limit was reached
- Provide timeframe for retry
- Don't punish legitimate users with harsh language

**Display:** Toast notification or inline block.

---

### 2.8 Session/Timeout Errors

**Definition:** Errors from expired sessions, stale data, or idle timeouts.

**Characteristics:**
- Guide to re-authentication
- Reassure data may be preserved
- Explain what happened

**Display:** Modal dialog requiring action.

---

## 3. Module-Specific Tone Matrix

### Consumer Module

| Tone | Helpful, non-blaming |
|------|---------------------|
| **Goal** | Keep users calm and confident about next steps |
| **Avoid** | Technical jargon, harsh language, blaming phrasing |

**Examples:**

| Situation | Message |
|-----------|---------|
| Required field | "Email is required" |
| Invalid format | "Please enter a valid email address" |
| Action failure | "We couldn't submit your claim. Please try again." |
| Network error | "Connection lost. Check your internet and try again." |

---

### Business Module

| Tone | Clear, solution-oriented |
|------|-------------------------|
| **Goal** | Respect their time, get them back to work quickly |
| **Avoid** | Over-apologizing, vague explanations |

**Examples:**

| Situation | Message |
|-----------|---------|
| Required field | "Deal title is required" |
| Invalid format | "Please enter a valid price (e.g., $199)" |
| Action failure | "Failed to save deal. Please try again." |
| Network error | "Connection lost. Changes not saved. Retry when back online." |

---

### Admin Module

| Tone | Factual, precise |
|------|-----------------|
| **Goal** | Provide complete information for quick decision-making |
| **Avoid** | Soft language that obscures the issue |

**Examples:**

| Situation | Message |
|-----------|---------|
| Required field | "Rejection reason is required" |
| Invalid format | "Invalid user ID format" |
| Action failure | "Failed to update user status. Please try again." |
| Bulk action error | "3 of 5 items failed to update. Retry failed items?" |

---

### Shared Patterns Across Modules

These patterns are identical regardless of module:

| Pattern | Template |
|---------|----------|
| Required field | "{Field} is required" |
| Invalid email | "Please enter a valid email address" |
| Password length | "Password must be at least 8 characters" |
| Matching fields | "{Field} must match {other field}" |

---

## 4. Error Pattern Templates

### 4.1 Field Validation Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Required field | "{Field} is required" | "Email is required" |
| Invalid email | "Please enter a valid email address" | - |
| Invalid phone | "Please enter a valid phone number" | - |
| Invalid URL | "Please enter a valid URL (e.g., https://example.com)" | - |
| Too short | "{Field} must be at least {min} characters" | "Password must be at least 8 characters" |
| Too long | "{Field} must be {max} characters or less" | "Bio must be 500 characters or less" |
| Invalid format | "Please enter a valid {field}" | "Please enter a valid ZIP code" |
| Out of range | "{Field} must be between {min} and {max}" | "Price must be between $1 and $10,000" |
| Pattern mismatch | "{Field} must be {format description}" | "Phone must be in format (555) 555-5555" |
| Invalid selection | "Please select a valid {field}" | "Please select a valid category" |
| Duplicate value | "This {field} is already in use" | "This email is already in use" |
| Date in past | "{Field} must be a future date" | "Expiration date must be a future date" |
| Date comparison | "{Field} must be {comparison} {other field}" | "End date must be after start date" |
| File too large | "File size must be under {limit}" | "File size must be under 5 MB" |
| Invalid file type | "Please upload a {types} file" | "Please upload a JPG, PNG, or WebP file" |

---

### 4.2 Action Failure Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Generic save failure | "Failed to save {item}. Please try again." | "Failed to save deal. Please try again." |
| Generic create failure | "Failed to create {item}. Please try again." | "Failed to create account. Please try again." |
| Generic delete failure | "Failed to delete {item}. Please try again." | "Failed to delete lead. Please try again." |
| Generic update failure | "Failed to update {item}. Please try again." | "Failed to update settings. Please try again." |
| Submit failure | "Failed to submit {item}. Please try again." | "Failed to submit claim. Please try again." |
| Upload failure | "Failed to upload {item}. Please try again." | "Failed to upload image. Please try again." |

---

### 4.3 Network Error Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Connection lost | "Connection lost. Check your internet and try again." | - |
| Request timeout | "Request timed out. Please try again." | - |
| Server unreachable | "Unable to reach server. Please try again later." | - |
| Offline action blocked | "You're offline. This action requires an internet connection." | - |
| Sync failed | "Changes couldn't sync. They'll save when you're back online." | - |

---

### 4.4 Authentication Error Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Invalid credentials | "Invalid email or password. Please try again." | - |
| Account not found | "No account found with this email. Create one?" | - |
| Account locked | "Account temporarily locked. Try again in {time} or reset your password." | "Account temporarily locked. Try again in 15 minutes or reset your password." |
| Session expired | "Your session has expired. Please sign in again." | - |
| Email not verified | "Please verify your email address to continue." | - |
| Password reset required | "Password reset required. Check your email for instructions." | - |
| Invalid reset link | "This password reset link has expired. Request a new one." | - |
| Magic link expired | "This sign-in link has expired. Request a new one." | - |

---

### 4.5 Permission Error Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Action not allowed | "You don't have permission to {action}." | "You don't have permission to edit this deal." |
| Resource not owned | "You can only {action} your own {item}." | "You can only edit your own deals." |
| Feature restricted | "This feature requires a {tier} subscription." | "This feature requires a Premium subscription." |
| Verification required | "Verify your {type} to {action}." | "Verify your business to create deals." |
| Role restricted | "This action is only available to {role}." | "This action is only available to administrators." |

---

### 4.6 System Error Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Generic server error | "Something went wrong. Please try again." | - |
| Unexpected error | "An unexpected error occurred. Please try again." | - |
| Service unavailable | "This service is temporarily unavailable. Please try again later." | - |
| Maintenance mode | "We're currently performing maintenance. Please check back soon." | - |
| Error with support | "Something went wrong. If this continues, contact support." | - |

---

### 4.7 Rate Limiting Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Too many requests | "Too many requests. Please wait a moment and try again." | - |
| Login attempts | "Too many sign-in attempts. Try again in {time}." | "Too many sign-in attempts. Try again in 5 minutes." |
| Password reset | "Password reset already requested. Check your email or try again in {time}." | - |
| API limit | "Request limit reached. Please try again later." | - |

---

### 4.8 Business Logic Patterns

| Scenario | Template | Example |
|----------|----------|---------|
| Duplicate action | "You've already {action} this {item}." | "You've already claimed this deal." |
| Expired item | "This {item} has expired." | "This deal has expired." |
| Unavailable item | "This {item} is no longer available." | "This deal is no longer available." |
| Limit reached | "You've reached the limit of {limit} {items}." | "You've reached the limit of 3 active deals." |
| Invalid state | "This {item} cannot be {action} in its current state." | "This deal cannot be edited while pending review." |
| Dependency error | "Please {prerequisite} before {action}." | "Please verify your email before claiming deals." |

---

## 5. Error Recovery Guidance

### 5.1 When to Suggest Retry

**Appropriate for:**
- Network/connectivity errors
- Server timeouts
- Temporary failures
- Rate limiting (after wait)

**Template:** "Please try again." or "Try again in {time}."

**Examples:**
- "Failed to save deal. Please try again."
- "Request timed out. Please try again."
- "Too many attempts. Try again in 5 minutes."

---

### 5.2 When to Suggest Alternative Action

**Appropriate for:**
- Validation errors with alternatives
- Permission issues with upgrade path
- State conflicts with workaround

**Template:** "{Error}. {Alternative action}." or "{Error}. Try {alternative} instead."

**Examples:**
- "This email is already in use. Sign in or use a different email."
- "This deal cannot be edited. Create a new deal instead."
- "Free tier limit reached. Upgrade to Premium for unlimited deals."

---

### 5.3 When to Suggest Contact Support

**Appropriate for:**
- Persistent errors after retry
- Account-level issues requiring investigation
- Security concerns
- Data integrity problems

**Template:** "If this continues, contact support."

**Examples:**
- "Something went wrong. If this continues, contact support."
- "Unable to access your account. Contact support for help."
- "Your account has been flagged. Contact support to resolve."

---

### 5.4 Recovery Message Templates

| Recovery Type | Template | Example |
|---------------|----------|---------|
| Retry | "{Error}. Please try again." | "Failed to save. Please try again." |
| Retry with timing | "{Error}. Try again in {time}." | "Too many attempts. Try again in 5 minutes." |
| Alternative | "{Error}. {Alternative action}." | "Email in use. Sign in or use a different email." |
| Escalate | "{Error}. Contact support for help." | "Account locked. Contact support for help." |
| Self-service | "{Error}. {Self-service action}." | "Session expired. Sign in again to continue." |
| Upgrade | "{Limit reached}. {Upgrade path}." | "Free limit reached. Upgrade for unlimited access." |

---

## 6. Display Patterns

### 6.1 Inline Field Errors

**Use for:** Form validation errors tied to specific fields.

**Position:** Below the field, aligned left.

**Styling:**
- Text: Red/error color, smaller than field label
- Icon: Error icon (optional) before text
- Timing: Show on blur or after interaction

**Example:**
```
Email address
[                    ]
✕ Please enter a valid email address
```

---

### 6.2 Form-Level Errors (Banners)

**Use for:** Errors affecting the entire form, submission failures, auth errors.

**Position:** Top of form, above first field.

**Styling:**
- Background: Light red/error tint
- Border: Left border accent or full border
- Icon: Warning/error icon
- Dismissible: Optional close button

**Example:**
```
┌─ ⚠ Failed to submit claim. Please check the fields below and try again. ─┐
```

---

### 6.3 Toast/Notification Errors

**Use for:** Action failures, network errors, system errors.

**Position:** Top-right or bottom-center of viewport.

**Styling:**
- Compact card with error color accent
- Auto-dismiss: 5-8 seconds for minor errors
- Persistent: For errors requiring action

**Duration rules:**

| Error Severity | Duration |
|----------------|----------|
| Minor (recoverable) | 5 seconds |
| Moderate (action needed) | 8 seconds or until dismissed |
| Severe (blocking) | Until dismissed or resolved |

---

### 6.4 Page-Level Errors (Error Boundaries)

**Use for:** Critical failures, page crashes, missing resources.

**Position:** Full page replacement or centered modal.

**Content:**
- Clear heading explaining the issue
- Brief description
- Primary recovery action (retry, go back, go home)
- Secondary action (contact support)

**Example:**
```
Something went wrong

We couldn't load this page. This might be a temporary issue.

[Try again]  [Go to dashboard]

If this continues, contact support.
```

---

### 6.5 Dismissal Rules

| Error Type | Dismissal |
|------------|-----------|
| Validation (inline) | Clears when field is corrected |
| Form banner | Clears on successful submission |
| Toast (recoverable) | Auto-dismiss after 5-8s, or manual |
| Toast (action required) | Manual dismiss only |
| Modal | Requires explicit action |
| Page-level | Requires navigation |

---

## 7. Implementation Guidelines

### 7.1 Error State Management Pattern

```typescript
// Standard error state shape
interface FormErrors {
  [fieldName: string]: string | undefined;
}

// Usage in components
const [errors, setErrors] = useState<FormErrors>({});

// Setting field error
setErrors(prev => ({ ...prev, email: "Email is required" }));

// Clearing field error
setErrors(prev => ({ ...prev, email: undefined }));

// Clearing all errors
setErrors({});
```

### 7.2 Error Component Usage

| Component | Use Case |
|-----------|----------|
| `FieldError` | Inline validation below inputs |
| `FormError` | Form-level banner at top of form |
| `Toast` | Transient notifications for actions |
| `ErrorBoundary` | Catching render failures |
| `ErrorPage` | Full-page error states |

### 7.3 Accessibility Considerations

| Requirement | Implementation |
|-------------|----------------|
| Screen reader announcement | Use `role="alert"` for error messages |
| Focus management | Move focus to first error field on submit |
| Color independence | Don't rely on color alone; use icons + text |
| Clear association | Use `aria-describedby` linking fields to errors |
| Error identification | Use `aria-invalid="true"` on error fields |

**Example accessible error:**
```html
<input
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Email is required
</span>
```

---

## Quick Reference Card

### Always Do

- Use sentence case for all error messages
- End complete sentences with periods
- Be specific about what went wrong
- Provide clear recovery action
- Use "{Field} is required" pattern for required fields
- Place inline errors directly below the problem field
- Use `role="alert"` for screen reader support

### Never Do

- Use exclamation marks in error messages
- Blame the user ("You failed to...")
- Use technical jargon or error codes
- Use all caps ("ERROR")
- Be vague ("Invalid input")
- Stack multiple errors without prioritization
- Use red color as the only error indicator

---

*Based on Phase 17 Voice & Tone Definition and Phase 16 Messaging Audit findings. Error patterns support future i18n extraction.*
