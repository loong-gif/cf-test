# Consumer Components Messaging Audit

Phase 16-01: Consumer module messaging audit
Generated: 2026-01-12

---

## Summary

| Component | Messages Cataloged |
|-----------|-------------------|
| Deal Card (`dealCard.tsx`) | 8 |
| Auth Modal (`authModal.tsx`) | 4 |
| Sign Up Form (`signUpForm.tsx`) | 14 |
| Sign In Form (`signInForm.tsx`) | 11 |
| Email Verification (`emailVerification.tsx`) | 14 |
| Phone Verification (`phoneVerification.tsx`) | 15 |
| Claim Deal Modal (`claimDealModal.tsx`) | 18 |
| Global Header (`globalHeader.tsx`) | 5 |
| Save Button (`saveButton.tsx`) | 3 |
| Location Display (`locationDisplay.tsx`) | 2 |
| **Total** | **94** |

---

## Deal Card (`src/components/features/dealCard.tsx`)

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Category Badge | Label | "{categoryLabels[category]}" | Dynamic: Botox, Fillers, Facials, Laser, Body, Skincare |
| Discount Badge | Label | "{percent}% OFF" | Dynamic discount |
| Sponsored Indicator | Label | "Sponsored" | Conditional |
| Hidden Section | Status | "Business details hidden" | Auth wall indicator |
| Verified Badge | Label | "Verified" | Paid tier only |

### Category Label Map (hardcoded)

| Category Key | Display Label | Notes |
|--------------|---------------|-------|
| botox | "Botox" | Consistent capitalization |
| fillers | "Fillers" | Consistent capitalization |
| facials | "Facials" | Consistent capitalization |
| laser | "Laser" | Consistent capitalization |
| body | "Body" | Consistent capitalization |
| skincare | "Skincare" | Consistent capitalization |

---

## Global Header (`src/components/layout/globalHeader.tsx`)

### Navigation & Branding

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Logo | Brand Name | "CostFinders" | Main brand identifier |
| Dashboard Link | Button | "Dashboard" | Authenticated users |
| Sign In Link | Button | "Sign in" | Anonymous (desktop) |
| Get Started Button | CTA | "Get Started" | Anonymous (primary) |

---

## Auth Modal (`src/components/features/authModal.tsx`)

### Modal Titles

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Modal Header (signUp) | Modal Title | "Create Account" | Sign up view |
| Modal Header (signIn) | Modal Title | "Welcome Back" | Sign in view |
| Modal Header (emailVerification) | Modal Title | "Verify Email" | Email verification |
| Modal Header (phoneVerification) | Modal Title | "Verify Phone" | Phone verification |

---

## Sign Up Form (`src/components/features/signUpForm.tsx`)

### Field Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Input | Field Label | "First name" | Optional field |
| Input | Field Label | "Last name" | Optional field |
| Input | Field Label | "Email" | Required field |
| Input | Field Label | "Password" | Required field |
| Input | Field Label | "Confirm password" | Required field |

### Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| First Name | Placeholder | "John" | Example name |
| Last Name | Placeholder | "Doe" | Example name |
| Email | Placeholder | "you@example.com" | Example format |
| Password | Placeholder | "Min. 8 characters" | Requirement hint |
| Confirm Password | Placeholder | "Confirm your password" | Action hint |

### Validation Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email Validation | Error | "Email is required" | Empty field |
| Email Validation | Error | "Please enter a valid email address" | Invalid format |
| Password Validation | Error | "Password is required" | Empty field |
| Password Validation | Error | "Password must be at least 8 characters" | Length requirement |
| Confirm Validation | Error | "Please confirm your password" | Empty field |
| Confirm Validation | Error | "Passwords do not match" | Mismatch |

### Buttons & Links

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Submit Button | CTA | "Create account" | Primary action |
| Switch Link | Link | "Already have an account?" | Context |
| Switch Link | Link | "Sign in" | Action |

---

## Sign In Form (`src/components/features/signInForm.tsx`)

### Field Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Input | Field Label | "Email" | Required field |
| Input | Field Label | "Password" | Required field |

### Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email | Placeholder | "you@example.com" | Example format |
| Password | Placeholder | "Enter your password" | Action hint |

### Validation Messages

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Email Validation | Error | "Email is required" | Empty field |
| Email Validation | Error | "Please enter a valid email address" | Invalid format |
| Password Validation | Error | "Password is required" | Empty field |

### Buttons & Links

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Forgot Password | Link | "Forgot password?" | Recovery link |
| Success Message | Toast | "Check your email for password reset instructions." | Reset confirmation |
| Submit Button | CTA | "Sign in" | Primary action |
| Switch Link | Link | "Don't have an account?" | Context |
| Switch Link | Link | "Sign up" | Action |

---

## Email Verification (`src/components/features/emailVerification.tsx`)

### Initial Screen (Check Email)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Heading H3 | Title | "Check your email" | Initial state |
| Description | Body Copy | "We sent a verification link to {email}" | Dynamic email |
| Button | CTA | "Open Email App" | Primary action |
| Success Toast | Toast | "Check your email!" | Resend confirmation |
| Resend Prompt | Body Copy | "Didn't receive the email?" | Context |
| Resend Link | Link | "Resend" | Action |
| Manual Entry Link | Link | "Or enter verification code manually" | Alternate flow |

### Code Entry Screen

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Heading H3 | Title | "Enter verification code" | Code entry state |
| Description | Body Copy | "Enter the 6-digit code sent to {email}" | Dynamic email |
| Code Placeholder | Placeholder | "000000" | Format hint |
| Validation Error | Error | "Please enter a valid 6-digit code" | Invalid code |
| Button | CTA | "Verify" | Primary action |
| Success Toast | Toast | "Code sent!" | Resend confirmation |
| Resend Prompt | Body Copy | "Didn't receive the code?" | Context |
| Resend Link | Link | "Resend" | Action |
| Back Link | Link | "Back to email screen" | Navigation |

---

## Phone Verification (`src/components/features/phoneVerification.tsx`)

### Initial Screen (Enter Phone)

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Heading H3 | Title | "Verify your phone" | Initial state |
| Description | Body Copy | "Add your phone number to secure your account" | Security context |
| Phone Placeholder | Placeholder | "+1 (555) 000-0000" | Format hint |
| Validation Error | Error | "Please enter a valid phone number (10+ digits)" | Invalid format |
| Button | CTA | "Send Code" | Primary action |
| Skip Link | Link | "Skip for now" | Optional flow |

### Code Entry Screen

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Heading H3 | Title | "Enter verification code" | Code entry state |
| Description | Body Copy | "We sent a 6-digit code to {phoneNumber}" | Dynamic phone |
| Code Placeholder | Placeholder | "000000" | Format hint |
| Validation Error | Error | "Please enter a valid 6-digit code" | Invalid code |
| Button | CTA | "Verify" | Primary action |
| Success Toast | Toast | "Code sent!" | Resend confirmation |
| Resend Prompt | Body Copy | "Didn't receive the code?" | Context |
| Resend Link | Link | "Resend" | Action |
| Back Link | Link | "Use different number" | Navigation |

---

## Claim Deal Modal (`src/components/features/claimDealModal.tsx`)

### Modal Headers

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Modal Title (form) | Modal Title | "Claim This Deal" | Form state |
| Modal Title (success) | Modal Title | "Claim Submitted!" | Success state |

### Form Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Deal Display | Label | "Deal:" | Context label |
| Date Field | Field Label | "Preferred Date (optional)" | Optional field |
| Time Field | Field Label | "Preferred Time (optional)" | Optional field |
| Notes Field | Field Label | "Message to Business (optional)" | Optional field |
| Character Counter | Helper | "{count}/500" | Input limit |

### Time Preference Options

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Time Option | Select Option | "Flexible" | Default option |
| Time Option | Select Option | "Morning (9am - 12pm)" | Time slot |
| Time Option | Select Option | "Afternoon (12pm - 5pm)" | Time slot |
| Time Option | Select Option | "Evening (5pm - 8pm)" | Time slot |

### Placeholders

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Notes Textarea | Placeholder | "Any special requests or questions?" | Prompt |

### Validation & Errors

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Date Validation | Error | "Please select a future date" | Past date error |
| Submit Error | Error | "Failed to submit claim. Please try again." | Generic error |

### Buttons

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Cancel Button | Button | "Cancel" | Secondary action |
| Submit Button (idle) | CTA | "Submit Claim" | Primary action |
| Submit Button (loading) | CTA | "Submitting..." | Loading state |
| Close Button (success) | Button | "Close" | Post-success |

### Success State

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Success H3 | Heading | "Claim submitted!" | Confirmation |
| Success Description | Body Copy | "The business will contact you soon to confirm your appointment." | Next steps |

---

## Save Button (`src/components/patterns/saveButton.tsx`)

### ARIA Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Button (unsaved) | ARIA Label | "Add to favorites" | Accessibility |
| Button (saved) | ARIA Label | "Remove from favorites" | Accessibility |

### Tooltip

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Unauthenticated | Tooltip | "Sign in to save deals" | Auth prompt |

---

## Location Display (`src/components/layout/locationDisplay.tsx`)

### Labels

| Location | Type | Current Text | Notes |
|----------|------|--------------|-------|
| Trigger (no location) | Button Text | "Set location" | Empty state |
| Modal | Modal Title | "Set your location" | Modal header |

---

## Key Observations

1. **Hardcoded Strings**: Most messaging is hardcoded directly in components (not in constants/i18n files)
2. **Consistent Validation Patterns**: Email validation uses same messages across SignUp/SignIn forms
3. **Progressive Disclosure**: Auth flow has clear state-based messaging (signUp -> emailVerification -> phoneVerification)
4. **Optional Skip Flows**: Phone verification allows "Skip for now" for non-blocking completion
5. **Loading States**: Submit buttons show loading text ("Submitting...", "Loading...")
6. **Success Toasts**: Short confirmation messages like "Code sent!", "Check your email!"
7. **ARIA Support**: Accessibility labels present for interactive elements
8. **Placeholder Patterns**: Example data format in placeholders (emails, phone numbers)

---

## Messaging Inventory: Hardcoded vs Dynamic

### Fully Hardcoded (candidates for constants)
- Category labels (Botox, Fillers, Facials, Laser, Body, Skincare)
- Time preference options (Flexible, Morning, Afternoon, Evening)
- Validation messages (email required, password length, etc.)
- Modal titles (Create Account, Welcome Back, Verify Email, etc.)
- Button labels (Submit Claim, Sign in, Verify, etc.)

### Dynamic (require runtime interpolation)
- User email display in verification screens
- Phone number display in verification screens
- Character count display ("{count}/500")
- Deal title in claim modal

---

*End of Consumer Components Audit*
