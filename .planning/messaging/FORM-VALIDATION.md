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

