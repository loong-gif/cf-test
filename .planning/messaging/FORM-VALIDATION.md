# CostFinders Form Validation Copy

## 1. Form Validation Philosophy

Form validation is about guiding users to success, not catching them in mistakes. When validation messages appear, users should immediately understand what's needed and feel confident they can fix it.

**Core principles:**

| Principle | Description |
|-----------|-------------|
| **Prevent, don't punish** | Validate early to catch issues before submission |
| **Be specific** | Tell users exactly what's wrong and how to fix it |
| **Stay helpful** | Guide toward the solution, not just state the problem |
| **Respect timing** | Validate at the right moment (not too early, not too late) |
| **Maintain focus** | Don't overwhelm with multiple errors at once |

**Validation voice traits:** Helpful + Clear (from VOICE.md)

Every validation message should answer: *What's wrong? How do I fix it?*

### Reference: ERROR-MESSAGES.md

Field validation patterns are defined in ERROR-MESSAGES.md section 4.1. This guide expands on:
- Form-by-form validation catalog
- Inline feedback patterns (real-time validation, character counters)
- Helper text guidelines (format hints, placeholder text)
- Validation timing rules

---

## 2. Validation Timing Rules

### 2.1 When to Validate

Timing matters. Validating too early interrupts the user's flow. Validating too late wastes their time. Choose the right moment based on the field type.

| Trigger | When to Use | Fields |
|---------|-------------|--------|
| **On blur** | Default for most fields | Email, text, phone, select, textarea |
| **On change** | Real-time feedback needs | Password strength, character counters |
| **On submit** | Final validation, async checks | All fields (comprehensive check) |
| **Debounced (500ms)** | Async validation | Email availability, username uniqueness |

### 2.2 Validation Timing Matrix

| Field Type | First Interaction | Subsequent Changes | On Submit |
|------------|-------------------|-------------------|-----------|
| Email | On blur | On blur | Revalidate |
| Password | On change (strength) | On change | Revalidate |
| Confirm password | On blur | On change | Revalidate |
| Phone | On blur | On blur | Revalidate |
| Text (short) | On blur | On blur | Revalidate |
| Textarea | On change (counter) | On change | Revalidate |
| Select | On blur | On change | Revalidate |
| Date | On blur | On blur | Revalidate |
| Date range | When both populated | On change | Revalidate |
| File upload | On selection | On selection | Revalidate |
| Checkbox | On submit | On change | Revalidate |

### 2.3 Real-Time Validation Candidates

These fields benefit from real-time feedback:

| Field | Real-Time Feedback | Display |
|-------|-------------------|---------|
| Password (create) | Strength meter | Weak/Medium/Strong indicator |
| Textarea | Character counter | "245/500 characters" |
| Phone | Format as you type | "(555) 555-5555" |
| Credit card | Format + type detection | "4242 4242 4242 4242" + Visa icon |
| URL | Protocol validation | Add "https://" if missing |

### 2.4 Debounce Patterns for Async Validation

Async validations (server checks) should be debounced to avoid excessive requests:

| Validation | Debounce Delay | User Feedback |
|------------|---------------|---------------|
| Email availability | 500ms | Show spinner, then result |
| Username uniqueness | 500ms | Show spinner, then result |
| Promo code validation | 300ms | Show spinner, then result |
| Address verification | 500ms | Show spinner, then result |

**Pattern:**
1. User stops typing
2. Wait for debounce period
3. Show loading indicator ("Checking...")
4. Display result (success checkmark or error message)

### 2.5 Field Dependency Validation

Some fields depend on others. Validate dependencies when all related fields have values:

| Dependency | Trigger | Message |
|------------|---------|---------|
| Confirm password | When both fields have values | "Passwords must match" |
| Date range (end date) | When both dates populated | "End date must be after start date" |
| Price comparison | When both prices entered | "Discounted price must be less than original" |
| Min/Max range | When both values entered | "Minimum must be less than maximum" |

---

## 3. Inline Feedback Patterns

### 3.1 Character Counter

**Use for:** Textareas and text inputs with length limits.

**Display:** Below the field, right-aligned.

**Format:**
```
[Current count]/[Max limit] characters
```

**Examples:**
- "245/500 characters" (normal state)
- "490/500 characters" (approaching limit, optional warning color)
- "500/500 characters" (at limit)

**Behavior:**
- Update on every keystroke
- Show only when field is focused (optional) or always visible
- Change color when approaching limit (last 10%)
- Prevent typing beyond limit OR show over-limit count in error color

**Implementation note:**
```
┌─────────────────────────────────────────┐
│ Describe your deal...                   │
│                                         │
│                                         │
└─────────────────────────────────────────┘
                                245/500 characters
```

---

### 3.2 Password Strength Meter

**Use for:** Password creation fields (sign up, password reset, change password).

**Do not use for:** Password confirmation or sign-in fields.

**Strength Levels:**

| Level | Label | Color | Criteria |
|-------|-------|-------|----------|
| Weak | "Weak" | Red | < 8 characters OR common password |
| Medium | "Medium" | Yellow | 8+ characters, meets 2 criteria |
| Strong | "Strong" | Green | 8+ characters, meets 3+ criteria |

**Criteria:**
- Has uppercase letter
- Has lowercase letter
- Has number
- Has special character
- Is 12+ characters

**Display:**
```
Password
[••••••••••]
[████░░░░░░░░] Medium - Add a special character for stronger security
```

**Behavior:**
- Update strength on every keystroke
- Show brief suggestion to improve (optional)
- Never block submission based on strength alone (unless required by security policy)

---

### 3.3 Real-Time Format Feedback

**Use for:** Fields with specific format requirements where formatting improves usability.

| Field | Format As You Type | Example |
|-------|-------------------|---------|
| Phone | Add parentheses and dashes | "(555) 555-5555" |
| Credit card | Add spaces every 4 digits | "4242 4242 4242 4242" |
| SSN | Add dashes (if applicable) | "123-45-6789" |
| Date | Auto-add slashes | "01/15/2025" |
| ZIP+4 | Add dash after 5 digits | "12345-6789" |

**Behavior:**
- Format input as user types
- Store unformatted value (numbers only) in form state
- Display formatted value in input
- Allow backspace to work naturally

---

### 3.4 Availability Check

**Use for:** Email uniqueness, username uniqueness, promo code validation.

**States:**

| State | Display | Message |
|-------|---------|---------|
| Idle | Nothing | - |
| Checking | Spinner | "Checking..." |
| Available | Green checkmark | "Email available" (optional, can be silent) |
| Unavailable | Red X + message | "This email is already in use" |
| Error | Yellow warning | "Couldn't verify. Try again." |

**Display pattern:**
```
Email address
[you@example.com          ] ⟳ Checking...
```

Then:
```
Email address
[you@example.com          ] ✓ Available
```

Or:
```
Email address
[existing@example.com      ] ✕ This email is already in use
```

**Behavior:**
- Debounce 500ms before checking
- Show spinner during check
- Silent success (checkmark only) OR explicit "Available" message
- Clear error when user starts typing again

---

### 3.5 Validation Success Indicators

**Use sparingly.** Most fields don't need success indicators. Use them for:
- Fields with complex validation (email format verified)
- Async validations (email availability confirmed)
- High-stakes fields (payment information verified)

**Display:** Green checkmark icon, no text (or brief "Valid" text).

**Do not use for:** Simple required fields, basic text inputs, checkboxes.

---

## 4. Helper Text Guidelines

### 4.1 Types of Helper Text

| Type | Purpose | Position |
|------|---------|----------|
| Format hint | Show expected format | Placeholder text |
| Requirement hint | State requirements | Below label or field |
| Context help | Explain why we need this | Below field |
| Example | Show sample value | Placeholder text |

### 4.2 Format Hints in Placeholder

Use placeholder text to show format examples:

| Field | Placeholder |
|-------|-------------|
| Email | "you@example.com" |
| Phone | "(555) 555-5555" |
| URL | "https://yourbusiness.com" |
| Date | "MM/DD/YYYY" |
| ZIP | "12345" |
| Credit card | "4242 4242 4242 4242" |

**Rules:**
- Use realistic but obviously fake examples
- For email, use "you@example.com" not real domains
- For phone, use 555 prefix (reserved for examples)
- Keep placeholders brief

---

### 4.3 Requirement Hints

Display requirements before the user makes a mistake:

| Field | Requirement Hint |
|-------|------------------|
| Password | "Min. 8 characters" |
| Username | "Letters, numbers, and underscores only" |
| Bio | "500 characters max" |
| Deal title | "Keep it brief and descriptive" |
| Discount price | "Must be less than original price" |

**Position:** Below label (preferred) or below field.

**Styling:**
- text-sm, text-secondary
- Should not look like an error (no red)
- Visible before user interacts

**Example:**
```
Password
Min. 8 characters
[                    ]
```

---

### 4.4 Context Help

Explain why information is needed or how it will be used:

| Field | Context Help |
|-------|--------------|
| Email (sign up) | "We'll send verification to this email" |
| Phone (business) | "Customers may contact you at this number" |
| Location | "Used to show you nearby deals" |
| Logo upload | "Appears on your business profile and deal cards" |
| Business name | "This is how customers will find you" |

**Position:** Below field, text-secondary.

**Rules:**
- Use for fields where the purpose isn't obvious
- Keep brief (one sentence)
- Focus on user benefit, not technical requirement

---

### 4.5 Helper Text Priority

When a field has both helper text and an error, prioritize display:

| State | Display |
|-------|---------|
| No interaction | Helper text (requirements, context) |
| Focus (no error) | Helper text remains |
| Error | Error message replaces helper text |
| Error cleared | Helper text returns |

**Important:** Errors always take priority over helper text. Don't show both simultaneously.

---

### 4.6 Placeholder vs Helper Text

| Use Placeholder For | Use Helper Text For |
|---------------------|---------------------|
| Format examples | Requirements |
| Sample values | Context/explanation |
| Brief hints | Detailed instructions |
| - | Constraints (min/max) |

**Rule:** Placeholder disappears when typing. If the user needs to reference it while typing, use helper text instead.

---

## 5. Field Validation Catalog

Reference field validation patterns from ERROR-MESSAGES.md section 4.1 for message templates. This section documents form-specific validation rules.

### 5.1 Common Field Validations (All Modules)

These validations apply consistently across Consumer, Business, and Admin modules:

| Field | Required | Format | Min/Max | Error Messages |
|-------|----------|--------|---------|----------------|
| Email | Yes* | email | - | "Email is required", "Please enter a valid email address" |
| Password | Yes* | - | 8+ chars | "Password is required", "Password must be at least 8 characters" |
| Confirm Password | Yes* | - | Match password | "Please confirm your password", "Passwords must match" |
| Phone | Varies | phone | - | "Please enter a valid phone number" |
| URL | No | URL | - | "Please enter a valid URL (e.g., https://example.com)" |
| ZIP Code | Varies | 5 or 9 digits | - | "Please enter a valid ZIP code" |
| Date | Varies | MM/DD/YYYY | - | "Please enter a valid date" |

*Required when field is present in form.

---

### 5.2 Consumer Module Forms

#### Sign Up Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Email* | Yes | email format, unique | "Email is required", "Please enter a valid email address", "This email is already in use" | "We'll send verification to this email" |
| Password* | Yes | min 8 chars | "Password is required", "Password must be at least 8 characters" | "Min. 8 characters" |
| Confirm Password* | Yes | matches password | "Please confirm your password", "Passwords must match" | - |
| First Name | No | - | - | - |
| Last Name | No | - | - | - |

**Real-time validation:**
- Email: Availability check (debounced 500ms)
- Password: Strength meter

---

#### Sign In Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Email* | Yes | email format | "Email is required", "Please enter a valid email address" | - |
| Password* | Yes | - | "Password is required" | - |

**Note:** Do not reveal whether email exists on failed login. Use: "Invalid email or password. Please try again."

---

#### Profile Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| First Name | No | max 50 chars | "First name must be 50 characters or less" | - |
| Last Name | No | max 50 chars | "Last name must be 50 characters or less" | - |
| Phone | No | phone format | "Please enter a valid phone number" | - |
| Location (City) | No | - | - | "Used to show you nearby deals" |

---

#### Alert Preferences Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Email Alerts | No | boolean | - | "Receive deal alerts via email" |
| SMS Alerts | No | boolean, requires phone | "Add a phone number to enable SMS alerts" | "Receive deal alerts via text" |
| Frequency | No | select | - | - |

**Dependency:** SMS Alerts requires phone number to be set in profile.

---

#### Claim Deal Modal

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Preferred Date | No | future date | "Please select a future date" | - |
| Preferred Time | No | select | - | - |
| Notes | No | max 500 chars | "Notes must be 500 characters or less" | "Optional message to the business" |

**Character counter:** Show for Notes field.

---

### 5.3 Business Module Forms

#### Create Business Form (Claim Flow)

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Business Name* | Yes | max 100 chars | "Business name is required", "Business name must be 100 characters or less" | "This is how customers will find you" |
| Email* | Yes | email format | "Business email is required", "Please enter a valid email address" | "We'll send leads to this email" |
| Phone* | Yes | phone format | "Business phone is required", "Please enter a valid phone number" | "Customers may contact you at this number" |
| Address* | Yes | - | "Business address is required" | - |
| City* | Yes | - | "City is required" | - |
| State* | Yes | select | "Please select a state" | - |
| ZIP Code* | Yes | 5 digit format | "ZIP code is required", "Please enter a valid ZIP code" | - |

---

#### Business Profile Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Business Name* | Yes | max 100 chars | "Business name is required", "Business name must be 100 characters or less" | - |
| Description | No | max 1000 chars | "Description must be 1000 characters or less" | - |
| Website | No | URL format | "Please enter a valid URL (e.g., https://example.com)" | "Include https://" |
| Phone* | Yes | phone format | "Business phone is required", "Please enter a valid phone number" | - |
| Logo | No | image, max 5MB | "Logo must be a JPG, PNG, or WebP file", "Logo must be under 5 MB" | "Appears on your profile and deal cards" |

**Character counter:** Show for Description field.

---

#### Deal Form (Create/Edit)

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Title* | Yes | max 100 chars | "Deal title is required", "Title must be 100 characters or less" | "Keep it brief and descriptive" |
| Description* | Yes | max 2000 chars | "Description is required", "Description must be 2000 characters or less" | - |
| Original Price* | Yes | positive number | "Original price is required", "Please enter a valid price" | - |
| Discounted Price* | Yes | positive number, < original | "Discounted price is required", "Discounted price must be less than original price" | "What customers pay" |
| Category* | Yes | select | "Please select a category" | - |
| Treatment Type | No | select | - | - |
| Expiration Date | No | future date | "Expiration date must be a future date" | - |
| Terms | No | max 1000 chars | "Terms must be 1000 characters or less" | "Any restrictions or fine print" |
| Image | No | image, max 5MB | "Image must be a JPG, PNG, or WebP file", "Image must be under 5 MB" | - |

**Real-time validation:**
- Price comparison: Validate when both prices entered
- Character counters: Show for Description and Terms

---

#### Mock Payment Form

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Card Number* | Yes | 16 digits | "Card number is required", "Please enter a valid card number" | - |
| Expiration Date* | Yes | MM/YY, future | "Expiration date is required", "Please enter a valid expiration date", "Card has expired" | - |
| CVV* | Yes | 3-4 digits | "CVV is required", "Please enter a valid CVV" | - |
| Billing ZIP* | Yes | 5 digits | "Billing ZIP is required", "Please enter a valid ZIP code" | - |

**Real-time validation:**
- Card number: Format as user types, detect card type
- Expiration: Validate not expired when both fields populated

---

### 5.4 Admin Module Forms

#### Admin Login

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Email* | Yes | email format | "Email is required", "Please enter a valid email address" | - |
| Password* | Yes | - | "Password is required" | - |
| 2FA Code | When enabled | 6 digits | "Verification code is required", "Please enter a valid verification code" | "Enter the code from your authenticator app" |

---

#### Content Management Forms

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Name* | Yes | max 100 chars | "Name is required", "Name must be 100 characters or less" | - |
| Slug* | Yes | alphanumeric + hyphens | "Slug is required", "Slug must contain only letters, numbers, and hyphens" | "URL-friendly identifier" |
| Description | No | max 500 chars | "Description must be 500 characters or less" | - |
| Status | Yes | select | "Please select a status" | - |

---

#### User Management Actions

| Field | Required | Validation | Error Message | Helper Text |
|-------|----------|------------|---------------|-------------|
| Rejection Reason* | Yes (when rejecting) | max 500 chars | "Rejection reason is required" | "This will be sent to the business owner" |
| Suspension Reason | No | max 500 chars | - | "Internal note" |
| Notes | No | max 1000 chars | - | - |

---

## 6. Module-Specific Tone Matrix

Validation messages adapt tone based on module context, while maintaining consistent message structure.

### 6.1 Consumer Module Tone

| Attribute | Description |
|-----------|-------------|
| **Encouraging** | Support user progress without pressure |
| **Patient** | Don't make users feel rushed or judged |
| **Reassuring** | Build confidence that they can fix it |

**Tone in validation:**

| Scenario | Consumer Tone | Example |
|----------|---------------|---------|
| Required field | Direct but friendly | "Email is required" |
| Format error | Helpful, non-technical | "Please enter a valid email address" |
| Near completion | Encouraging | "Almost there! Just need your password." |
| Multiple errors | Calm, prioritized | Focus first error field |

---

### 6.2 Business Module Tone

| Attribute | Description |
|-----------|-------------|
| **Professional** | Respect business owner's expertise |
| **Efficient** | Value their time with concise messages |
| **Action-oriented** | Focus on what needs to be done |

**Tone in validation:**

| Scenario | Business Tone | Example |
|----------|---------------|---------|
| Required field | Direct, no fluff | "Deal title is required" |
| Format error | Clear, practical | "Please enter a valid price (e.g., $199)" |
| Publishing requirement | Business context | "Required for publishing" |
| Complex validation | Factual explanation | "Discounted price must be less than original price" |

---

### 6.3 Admin Module Tone

| Attribute | Description |
|-----------|-------------|
| **Factual** | State information without embellishment |
| **Concise** | No extra words |
| **Precise** | Exact information needed |

**Tone in validation:**

| Scenario | Admin Tone | Example |
|----------|------------|---------|
| Required field | Minimal | "Required" or "Rejection reason is required" |
| Format error | Technical acceptable | "Invalid user ID format" |
| Process requirement | Process-focused | "Reason required for rejection" |
| Bulk action | Quantified | "3 of 5 items failed validation" |

---

### 6.4 Cross-Module Consistency

Despite tone variations, these patterns remain consistent:

| Pattern | All Modules |
|---------|-------------|
| Required field structure | "{Field} is required" |
| Format error structure | "Please enter a valid {field}" |
| Length error structure | "{Field} must be {constraint} characters" |
| Comparison error structure | "{Field} must be {comparison} {other field}" |

---

## 7. Real-Time Validation Behaviors

### 7.1 Password Strength Meter

**When:** Password creation (sign up, password reset, change password).

**Behavior:**
- Begin showing after first character typed
- Update on every keystroke
- Show strength level + optional improvement suggestion
- Don't block submission (unless security policy requires)

**Display progression:**
```
[        ] ← Not started

[••]
[██░░░░░░░░░░] Weak - Too short

[••••••••]
[████████░░░░] Medium - Add a special character

[••••••••••!1]
[████████████] Strong
```

**Improvement suggestions:**
- "Too short" → Show when < 8 characters
- "Add a number" → When no digits present
- "Add a special character" → When no symbols present
- "Add uppercase letter" → When all lowercase

---

### 7.2 Email Availability Check

**When:** Sign up form email field.

**Behavior:**
1. User stops typing
2. Wait 500ms (debounce)
3. Show spinner: "Checking..."
4. Display result:
   - Available: Checkmark (silent) or "Available"
   - Unavailable: "This email is already in use"
   - Error: "Couldn't verify. Try again."

**Clear behavior:**
- Clear result when user starts typing again
- Don't re-check until user stops typing

---

### 7.3 Character Counters

**When:** Textarea fields with length limits (descriptions, bios, notes).

**Behavior:**
- Show count from first focus or always visible
- Update on every keystroke
- Format: "{current}/{max} characters"
- Optional: Change color at 90% capacity
- At limit: Prevent further input OR show over-limit in error color

**Fields with counters:**
- Deal description (2000 chars)
- Business description (1000 chars)
- Deal terms (1000 chars)
- Claim notes (500 chars)
- Admin rejection reason (500 chars)

---

### 7.4 Date Range Validation

**When:** Forms with start/end date pairs (deal duration, report filters).

**Behavior:**
- Validate individually on blur
- Validate comparison when both dates populated
- Error on end date field: "End date must be after start date"

**Fields:**
- Deal expiration (must be future)
- Report date range (end after start)
- Filter date range (end after start)

---

### 7.5 Price Comparison Validation

**When:** Deal form with original and discounted price.

**Behavior:**
- Validate format individually on blur
- Validate comparison when both prices entered
- Error on discounted price: "Discounted price must be less than original price"

---

### 7.6 Image Upload Validation

**When:** Logo upload, deal image upload.

**Behavior:**
1. User selects file
2. Immediately validate:
   - File type (JPG, PNG, WebP)
   - File size (max 5 MB)
3. Show error if invalid:
   - "Please upload a JPG, PNG, or WebP file"
   - "File size must be under 5 MB"
4. Show preview if valid

---

## 8. Implementation Patterns

### 8.1 Validation Function Structure

Standard pattern for field validation:

```typescript
// Standard validation pattern
interface ValidationRules {
  label: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: string) => string | undefined;
}

const validateField = (value: string, rules: ValidationRules): string | undefined => {
  // Required check
  if (rules.required && !value.trim()) {
    return `${rules.label} is required`;
  }

  // Skip other validations if empty and not required
  if (!value.trim()) {
    return undefined;
  }

  // Min length
  if (rules.minLength && value.length < rules.minLength) {
    return `${rules.label} must be at least ${rules.minLength} characters`;
  }

  // Max length
  if (rules.maxLength && value.length > rules.maxLength) {
    return `${rules.label} must be ${rules.maxLength} characters or less`;
  }

  // Pattern match
  if (rules.pattern && !rules.pattern.test(value)) {
    return `Please enter a valid ${rules.label.toLowerCase()}`;
  }

  // Custom validation
  if (rules.validate) {
    return rules.validate(value);
  }

  return undefined;
};
```

---

### 8.2 Common Validation Patterns

```typescript
// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation (US format)
const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// URL validation
const urlPattern = /^https?:\/\/.+\..+/;

// ZIP code validation (5 or 9 digit)
const zipPattern = /^\d{5}(-\d{4})?$/;
```

---

### 8.3 Helper Text Component Pattern

```typescript
interface FieldProps {
  label: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

// Field with helper text
<Input
  label="Password"
  helperText="Min. 8 characters"
  error={errors.password}
  required
/>

// Rendered output:
// Password *
// Min. 8 characters          ← Helper text (shown when no error)
// [                    ]
// Password is required       ← Error (replaces helper text)
```

---

### 8.4 Character Counter Pattern

```typescript
interface TextareaProps {
  label: string;
  maxLength: number;
  showCount?: boolean;
  value: string;
  onChange: (value: string) => void;
}

// Textarea with counter
<Textarea
  label="Description"
  maxLength={500}
  showCount
  value={description}
  onChange={setDescription}
/>

// Display format: "245/500 characters"
// Position: Below field, right-aligned
// Color: Secondary text, warning at 90%, error at 100%
```

---

### 8.5 Password Strength Component Pattern

```typescript
type StrengthLevel = 'weak' | 'medium' | 'strong';

interface PasswordStrengthProps {
  password: string;
  showSuggestion?: boolean;
}

// Calculate strength
const calculateStrength = (password: string): StrengthLevel => {
  if (password.length < 8) return 'weak';

  let score = 0;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;

  if (score >= 4) return 'strong';
  if (score >= 2) return 'medium';
  return 'weak';
};

// Get suggestion
const getSuggestion = (password: string): string | undefined => {
  if (password.length < 8) return 'Too short';
  if (!/[0-9]/.test(password)) return 'Add a number';
  if (!/[^a-zA-Z0-9]/.test(password)) return 'Add a special character';
  if (!/[A-Z]/.test(password)) return 'Add an uppercase letter';
  return undefined;
};
```

---

### 8.6 Debounced Async Validation Pattern

```typescript
// Email availability check with debounce
const useEmailAvailability = (email: string, delay = 500) => {
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable' | 'error'>('idle');

  useEffect(() => {
    if (!email || !isValidEmail(email)) {
      setStatus('idle');
      return;
    }

    setStatus('checking');

    const timer = setTimeout(async () => {
      try {
        const isAvailable = await checkEmailAvailability(email);
        setStatus(isAvailable ? 'available' : 'unavailable');
      } catch {
        setStatus('error');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [email, delay]);

  return status;
};

// Display messages by status
const statusMessages = {
  idle: null,
  checking: 'Checking...',
  available: null, // Silent success (show checkmark only)
  unavailable: 'This email is already in use',
  error: "Couldn't verify. Try again."
};
```

---

### 8.7 Form-Level Error Handling Pattern

```typescript
interface FormState {
  values: Record<string, string>;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean>;
}

// Show error only after field has been touched
const shouldShowError = (fieldName: string, state: FormState): boolean => {
  return state.touched[fieldName] && !!state.errors[fieldName];
};

// On submit: validate all fields and focus first error
const handleSubmit = async (state: FormState) => {
  const allErrors = validateAllFields(state.values);

  if (Object.keys(allErrors).length > 0) {
    setErrors(allErrors);

    // Focus first error field
    const firstErrorField = Object.keys(allErrors)[0];
    document.getElementById(firstErrorField)?.focus();

    return;
  }

  // Submit form...
};
```

---

### 8.8 Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Error announcement | Use `role="alert"` for error messages |
| Field association | Use `aria-describedby` linking fields to errors |
| Invalid state | Use `aria-invalid="true"` on error fields |
| Focus management | Move focus to first error field on submit |
| Required indicator | Use `aria-required="true"` + visual indicator |

**Accessible field example:**

```html
<label for="email">
  Email address
  <span aria-hidden="true">*</span>
</label>
<span id="email-hint" class="helper-text">
  We'll send verification to this email
</span>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid="true"
  aria-describedby="email-hint email-error"
/>
<span id="email-error" role="alert" class="error-text">
  Please enter a valid email address
</span>
```

---

### 8.9 Error Clearing Behavior

| Trigger | Behavior |
|---------|----------|
| User starts typing | Clear error for that field |
| User focuses field | Do not clear (wait for blur or typing) |
| User blurs field | Revalidate and update error |
| Form submission | Validate all fields, show all errors |
| Successful submission | Clear all errors |

```typescript
// Clear error when user starts typing
const handleChange = (fieldName: string, value: string) => {
  setValues(prev => ({ ...prev, [fieldName]: value }));

  // Clear error for this field
  if (errors[fieldName]) {
    setErrors(prev => ({ ...prev, [fieldName]: undefined }));
  }
};
```

---

## 9. Quick Reference Card

### Validation Timing Quick Reference

| Trigger | Use For | Example Fields |
|---------|---------|----------------|
| On blur | Most fields | Email, text, phone, select |
| On change | Real-time feedback | Password strength, character counters |
| On submit | Final validation | All fields |
| Debounced (500ms) | Async checks | Email availability, username |

---

### Message Templates Quick Reference

| Scenario | Template | Example |
|----------|----------|---------|
| Required | "{Field} is required" | "Email is required" |
| Invalid format | "Please enter a valid {field}" | "Please enter a valid email address" |
| Too short | "{Field} must be at least {min} characters" | "Password must be at least 8 characters" |
| Too long | "{Field} must be {max} characters or less" | "Bio must be 500 characters or less" |
| Mismatch | "{Field} must match {other field}" | "Passwords must match" |
| Comparison | "{Field} must be {comparison} {other field}" | "Discounted price must be less than original price" |
| Future date | "{Field} must be a future date" | "Expiration date must be a future date" |
| Duplicate | "This {field} is already in use" | "This email is already in use" |
| Invalid selection | "Please select a valid {field}" | "Please select a valid category" |

---

### Helper Text Quick Reference

| Field Type | Helper Text Example |
|------------|---------------------|
| Password (create) | "Min. 8 characters" |
| Email (sign up) | "We'll send verification to this email" |
| Phone (business) | "Customers may contact you at this number" |
| URL | "Include https://" |
| Description | "500 characters max" |
| Date | "Must be a future date" |

---

### Placeholder Quick Reference

| Field | Placeholder |
|-------|-------------|
| Email | "you@example.com" |
| Phone | "(555) 555-5555" |
| URL | "https://yourbusiness.com" |
| Date | "MM/DD/YYYY" |
| ZIP | "12345" |
| Credit card | "4242 4242 4242 4242" |
| Search | "Search deals..." |

---

### Real-Time Feedback Quick Reference

| Feature | Fields | Display |
|---------|--------|---------|
| Character counter | Textareas | "245/500 characters" |
| Password strength | Password create | Weak/Medium/Strong bar |
| Availability check | Email (sign up) | Spinner → checkmark/error |
| Format as you type | Phone, credit card | Auto-formatting |

---

### Do's and Don'ts

**Do:**
- Validate on blur for most fields
- Show helper text before user makes mistake
- Clear errors when user starts correcting
- Focus first error field on submit
- Use character counters for length-limited textareas
- Show password strength meter during creation
- Use debounce for async validation
- Provide clear, specific error messages

**Don't:**
- Validate on every keystroke (except counters/strength)
- Show all errors at once before user tries
- Use vague messages ("Invalid input")
- Disable submit button based on validation
- Show both helper text and error simultaneously
- Reveal if email exists on failed login
- Block submission based on password strength alone
- Use red color as the only error indicator

---

### Module Tone Quick Reference

| Module | Tone | Required Field Example |
|--------|------|------------------------|
| Consumer | Encouraging, patient | "Email is required" |
| Business | Professional, efficient | "Deal title is required" |
| Admin | Factual, concise | "Rejection reason is required" |

---

### Accessibility Checklist

- [ ] `aria-describedby` links field to error/helper text
- [ ] `aria-invalid="true"` on fields with errors
- [ ] `role="alert"` on error messages
- [ ] `aria-required="true"` on required fields
- [ ] Focus moves to first error on submit
- [ ] Visual indicators don't rely on color alone
- [ ] Keyboard navigation works for all form controls

---

*Based on Phase 17 Voice & Tone Definition and ERROR-MESSAGES.md patterns. Form validation copy supports future i18n extraction.*

