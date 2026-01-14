# Design Tokens Reference

> CostFinders Glassmorphic Design System
> Version: 1.0.0
> Last Updated: 2026-01-12

---

## Overview

CostFinders uses a layered token system:
1. **CSS Custom Properties** (`:root`) - Source of truth
2. **Tailwind @theme** - Exposes CSS vars as utility classes
3. **TypeScript Tokens** (`design-tokens.ts`) - Programmatic access

**Theme**: Medium-dark blue slate with pink/magenta accent
**Style**: Glassmorphic with grounded product-photography shadows

---

## CSS Custom Properties

### Background Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg-primary` | `#4c5578` | Main background, body |
| `--color-bg-secondary` | `#3d4563` | Card backgrounds, elevated surfaces |
| `--color-bg-tertiary` | `#2a2d3a` | Deepest background, modals |

```css
/* Example usage in CSS */
background: var(--color-bg-primary);
```

### Surface Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-surface-light` | `#e2e8f0` | Light text on dark backgrounds |
| `--color-surface-medium` | `#94a3b8` | Secondary text, muted elements |

### Glass Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-glass-bg` | `rgba(255, 255, 255, 0.05)` | Glass panel backgrounds |
| `--color-glass-bg-hover` | `rgba(255, 255, 255, 0.08)` | Glass panel hover state |
| `--color-glass-border` | `rgba(255, 255, 255, 0.10)` | Glass panel borders |
| `--color-glass-border-hover` | `rgba(255, 255, 255, 0.15)` | Glass panel border hover |

### Text Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-text-primary` | `#e2e8f0` | Primary text, headings |
| `--color-text-secondary` | `#94a3b8` | Secondary text, labels |
| `--color-text-tertiary` | `#8b92a6` | Tertiary text, hints |
| `--color-text-muted` | `#4c5578` | Placeholder text, disabled |

### Brand Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-brand-primary` | `#ff0080` | Primary actions, CTAs, links |
| `--color-brand-secondary` | `#ff4081` | Hover states, secondary brand |
| `--color-brand-tertiary` | `#ff6b9d` | Tertiary brand, subtle accents |

### Semantic Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-success` | `#22c55e` | Success states, confirmations |
| `--color-warning` | `#f59e0b` | Warning states, cautions |
| `--color-error` | `#ef4444` | Error states, destructive actions |
| `--color-info` | `#3b82f6` | Informational, neutral emphasis |

### Shadows

| Variable | Description | Usage |
|----------|-------------|-------|
| `--shadow-sm` | Subtle shadow | Small elements, buttons |
| `--shadow-md` | Medium shadow | Cards, dropdowns |
| `--shadow-lg` | Large shadow | Modals, popovers |
| `--shadow-glass` | Glass-specific | Glass panels |
| `--shadow-elevated` | High elevation | Floating elements |
| `--shadow-product-overhead` | Product photography | Featured cards |
| `--shadow-photographic-ground` | Grounded feel | Heavy cards |
| `--shadow-natural-bottom` | Natural lighting | Hero sections |

### Blur Values

| Variable | Value | Usage |
|----------|-------|-------|
| `--blur-sm` | `4px` | Subtle blur |
| `--blur-md` | `8px` | Standard glass blur |
| `--blur-lg` | `16px` | Heavy blur |
| `--blur-xl` | `24px` | Maximum blur |

### Radius Values

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | `0.375rem` | Small elements |
| `--radius-md` | `0.5rem` | Inputs, small cards |
| `--radius-lg` | `0.75rem` | Medium cards |
| `--radius-xl` | `1rem` | Buttons, cards |
| `--radius-2xl` | `1.5rem` | Large cards, containers |
| `--radius-full` | `9999px` | Pills, circles |

### Spacing Scale

| Variable | Value | Tailwind Equivalent |
|----------|-------|---------------------|
| `--space-1` | `0.25rem` | `p-1`, `m-1` |
| `--space-2` | `0.5rem` | `p-2`, `m-2` |
| `--space-3` | `0.75rem` | `p-3`, `m-3` |
| `--space-4` | `1rem` | `p-4`, `m-4` |
| `--space-5` | `1.25rem` | `p-5`, `m-5` |
| `--space-6` | `1.5rem` | `p-6`, `m-6` |
| `--space-8` | `2rem` | `p-8`, `m-8` |
| `--space-10` | `2.5rem` | `p-10`, `m-10` |
| `--space-12` | `3rem` | `p-12`, `m-12` |
| `--space-16` | `4rem` | `p-16`, `m-16` |

### Transitions

| Variable | Value | Usage |
|----------|-------|-------|
| `--transition-fast` | `150ms ease-in-out` | Quick feedback |
| `--transition-normal` | `200ms ease-in-out` | Standard transitions |
| `--transition-slow` | `300ms ease-in-out` | Deliberate animations |

---

## Tailwind @theme Utilities

The `@theme inline` block in `globals.css` exposes CSS variables as Tailwind utilities.

### Background Colors

| Tailwind Class | CSS Variable |
|----------------|--------------|
| `bg-bg-primary` | `--color-bg-primary` |
| `bg-bg-secondary` | `--color-bg-secondary` |
| `bg-bg-tertiary` | `--color-bg-tertiary` |
| `bg-surface-light` | `--color-surface-light` |
| `bg-surface-medium` | `--color-surface-medium` |
| `bg-glass-bg` | `--color-glass-bg` |
| `bg-glass-bg-hover` | `--color-glass-bg-hover` |
| `bg-brand-primary` | `--color-brand-primary` |
| `bg-brand-secondary` | `--color-brand-secondary` |
| `bg-brand-tertiary` | `--color-brand-tertiary` |

### Text Colors

| Tailwind Class | CSS Variable |
|----------------|--------------|
| `text-text-primary` | `--color-text-primary` |
| `text-text-secondary` | `--color-text-secondary` |
| `text-text-tertiary` | `--color-text-tertiary` |
| `text-text-muted` | `--color-text-muted` |
| `text-brand-primary` | `--color-brand-primary` |
| `text-brand-secondary` | `--color-brand-secondary` |
| `text-brand-tertiary` | `--color-brand-tertiary` |

### Border Colors

| Tailwind Class | CSS Variable |
|----------------|--------------|
| `border-glass-border` | `--color-glass-border` |
| `border-glass-border-hover` | `--color-glass-border-hover` |
| `border-brand-primary` | `--color-brand-primary` |

### Shadows

| Tailwind Class | CSS Variable |
|----------------|--------------|
| `shadow-product-overhead` | `--shadow-product-overhead` |
| `shadow-photographic-ground` | `--shadow-photographic-ground` |
| `shadow-natural-bottom` | `--shadow-natural-bottom` |

### Missing Utilities (To Be Added in 11-02)

The following semantic colors are defined as CSS variables but NOT yet available as Tailwind utilities:

| Needed Class | CSS Variable | Purpose |
|--------------|--------------|---------|
| `bg-success` | `--color-success` | Success backgrounds |
| `bg-warning` | `--color-warning` | Warning backgrounds |
| `bg-error` | `--color-error` | Error backgrounds |
| `bg-info` | `--color-info` | Info backgrounds |
| `text-success` | `--color-success` | Success text |
| `text-warning` | `--color-warning` | Warning text |
| `text-error` | `--color-error` | Error text |
| `text-info` | `--color-info` | Info text |
| `border-success` | `--color-success` | Success borders |
| `border-warning` | `--color-warning` | Warning borders |
| `border-error` | `--color-error` | Error borders |
| `border-info` | `--color-info` | Info borders |

---

## TypeScript Tokens

The `src/lib/design-tokens.ts` file provides programmatic access to CSS variables.

### Importing Tokens

```typescript
import { colors, shadows, blur, radius, spacing, transitions } from '@/lib/design-tokens'
```

### Colors Object

```typescript
colors.bg.primary       // 'var(--color-bg-primary)'
colors.bg.secondary     // 'var(--color-bg-secondary)'
colors.bg.tertiary      // 'var(--color-bg-tertiary)'

colors.surface.light    // 'var(--color-surface-light)'
colors.surface.medium   // 'var(--color-surface-medium)'

colors.glass.bg         // 'var(--color-glass-bg)'
colors.glass.bgHover    // 'var(--color-glass-bg-hover)'
colors.glass.border     // 'var(--color-glass-border)'
colors.glass.borderHover // 'var(--color-glass-border-hover)'

colors.text.primary     // 'var(--color-text-primary)'
colors.text.secondary   // 'var(--color-text-secondary)'
colors.text.tertiary    // 'var(--color-text-tertiary)'
colors.text.muted       // 'var(--color-text-muted)'

colors.brand.primary    // 'var(--color-brand-primary)'
colors.brand.secondary  // 'var(--color-brand-secondary)'
colors.brand.tertiary   // 'var(--color-brand-tertiary)'

colors.semantic.success // 'var(--color-success)'
colors.semantic.warning // 'var(--color-warning)'
colors.semantic.error   // 'var(--color-error)'
colors.semantic.info    // 'var(--color-info)'
```

### Shadows Object

```typescript
shadows.sm              // 'var(--shadow-sm)'
shadows.md              // 'var(--shadow-md)'
shadows.lg              // 'var(--shadow-lg)'
shadows.glass           // 'var(--shadow-glass)'
shadows.elevated        // 'var(--shadow-elevated)'
shadows.productOverhead // 'var(--shadow-product-overhead)'
shadows.photographicGround // 'var(--shadow-photographic-ground)'
shadows.naturalBottom   // 'var(--shadow-natural-bottom)'
```

### When to Use JS Tokens vs CSS Variables

| Use Case | Approach |
|----------|----------|
| Tailwind classes | Use class names: `bg-brand-primary` |
| Inline styles | Use JS tokens: `style={{ color: colors.brand.primary }}` |
| CSS-in-JS | Use CSS vars: `var(--color-brand-primary)` |
| Dynamic styles | Use JS tokens with template literals |

---

## Usage Guidelines

### DO: Use Design Tokens

```tsx
// Background colors
<div className="bg-bg-primary">          {/* Primary background */}
<div className="bg-bg-secondary">         {/* Card/elevated background */}
<div className="bg-glass-bg backdrop-blur-md"> {/* Glass panel */}

// Text colors
<p className="text-text-primary">         {/* Primary text */}
<p className="text-text-secondary">       {/* Secondary/label text */}
<span className="text-brand-primary">     {/* Accent text */}

// Borders
<div className="border border-glass-border"> {/* Glass border */}
<div className="border border-brand-primary"> {/* Brand border */}

// Brand colors for CTAs
<button className="bg-brand-primary hover:bg-brand-secondary">
```

### DO: Use Semantic Colors (After 11-02)

```tsx
// Success states
<div className="bg-success/10 text-success">  {/* Success message */}
<Badge variant="success">Active</Badge>

// Warning states
<div className="bg-warning/10 text-warning">  {/* Warning message */}
<Badge variant="warning">Pending</Badge>

// Error states
<div className="bg-error/10 text-error">      {/* Error message */}
<Badge variant="error">Failed</Badge>
<span className="text-error">Required field</span>

// Info states
<div className="bg-info/10 text-info">        {/* Info message */}
<Badge variant="info">New</Badge>
```

### DON'T: Use Hardcoded Tailwind Colors

```tsx
// Bad - hardcoded colors
<span className="text-red-500">Error</span>
<div className="bg-green-500/10 text-green-400">Success</div>
<span className="text-amber-400">Warning</span>
<div className="bg-blue-500/10">Info</div>

// Good - semantic tokens
<span className="text-error">Error</span>
<div className="bg-success/10 text-success">Success</div>
<span className="text-warning">Warning</span>
<div className="bg-info/10">Info</div>
```

### DON'T: Use Arbitrary Values

```tsx
// Bad - arbitrary hex colors
<div className="bg-[#4c5578]">              {/* Use bg-bg-primary */}
<p className="text-[#94a3b8]">              {/* Use text-text-secondary */}
<span className="text-[#ff0080]">           {/* Use text-brand-primary */}

// Bad - arbitrary rgba
<div className="bg-[rgba(255,255,255,0.05)]"> {/* Use bg-glass-bg */}

// Acceptable - dynamic values
<div style={{ width: `${percentage}%` }}>   {/* Dynamic requires inline */}
```

---

## Migration Patterns

### Error States

```tsx
// Before
className="border-red-500/50 focus:border-red-500"
className="text-red-400"
className="bg-red-500/10"

// After
className="border-error/50 focus:border-error"
className="text-error"
className="bg-error/10"
```

### Success States

```tsx
// Before
className="bg-green-500/10 text-green-400"
className="text-green-500"
className="border-green-500/20"

// After
className="bg-success/10 text-success"
className="text-success"
className="border-success/20"
```

### Warning States

```tsx
// Before
className="bg-amber-500/10 text-amber-400"
className="text-amber-500"
className="bg-yellow-500/10 text-yellow-400"

// After
className="bg-warning/10 text-warning"
className="text-warning"
className="bg-warning/10 text-warning"
```

### Info States

```tsx
// Before
className="bg-blue-500/10 text-blue-400"
className="text-blue-500"

// After
className="bg-info/10 text-info"
className="text-info"
```

### Badge Component

```tsx
// Before (badge.tsx variants object)
success: 'bg-green-500/10 border-green-500/20 text-green-400',
warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
error: 'bg-red-500/10 border-red-500/20 text-red-400',
info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',

// After
success: 'bg-success/10 border-success/20 text-success',
warning: 'bg-warning/10 border-warning/20 text-warning',
error: 'bg-error/10 border-error/20 text-error',
info: 'bg-info/10 border-info/20 text-info',
```

### Button Danger Variant

```tsx
// Before (button.tsx variants object)
danger: 'bg-red-600 hover:bg-red-700 text-white',

// After
danger: 'bg-error hover:bg-error/90 text-white',
```

### Input Error State

```tsx
// Before (input.tsx)
${error
  ? 'border-red-500/50 focus:border-red-500'
  : 'border-glass-border hover:border-glass-border-hover focus:border-brand-primary/50'
}
// ...
{error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}

// After
${error
  ? 'border-error/50 focus:border-error'
  : 'border-glass-border hover:border-glass-border-hover focus:border-brand-primary/50'
}
// ...
{error && <p className="mt-1.5 text-xs text-error">{error}</p>}
```

---

## Component Defaults

### Card Component

```tsx
<Card variant="glass">  {/* bg-glass-bg backdrop-blur-lg border-glass-border shadow-glass */}
<Card variant="solid">  {/* bg-bg-secondary border-glass-border shadow-md */}
<Card variant="outline"> {/* bg-transparent border-glass-border */}
```

### Button Component

```tsx
<Button variant="primary">   {/* bg-brand-primary hover:bg-brand-secondary */}
<Button variant="secondary"> {/* bg-glass-bg border-glass-border */}
<Button variant="ghost">     {/* hover:bg-glass-bg */}
<Button variant="danger">    {/* bg-error hover:bg-error/90 (after fix) */}
```

### Input Component

```tsx
<Input />              {/* bg-glass-bg border-glass-border */}
<Input error="Error">  {/* border-error/50 focus:border-error (after fix) */}
```

### Badge Component

```tsx
<Badge variant="default">  {/* bg-glass-bg border-glass-border text-text-secondary */}
<Badge variant="success">  {/* bg-success/10 border-success/20 text-success (after fix) */}
<Badge variant="warning">  {/* bg-warning/10 border-warning/20 text-warning (after fix) */}
<Badge variant="error">    {/* bg-error/10 border-error/20 text-error (after fix) */}
<Badge variant="info">     {/* bg-info/10 border-info/20 text-info (after fix) */}
<Badge variant="brand">    {/* bg-brand-primary/10 border-brand-primary/20 text-brand-primary */}
```

---

## Glassmorphic Patterns

### Standard Glass Card

```tsx
<div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl shadow-glass">
  {/* content */}
</div>
```

### Interactive Glass Card

```tsx
<div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl shadow-glass
                hover:border-glass-border-hover hover:shadow-elevated transition-all duration-200 cursor-pointer">
  {/* content */}
</div>
```

### Glass Navigation

```tsx
<nav className="bg-glass-bg backdrop-blur-xl border-b border-glass-border">
  {/* nav items */}
</nav>
```

### Glass Modal Overlay

```tsx
<div className="fixed inset-0 bg-bg-tertiary/80 backdrop-blur-sm">
  <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-elevated">
    {/* modal content */}
  </div>
</div>
```

---

## Quick Reference Card

| Intent | Class |
|--------|-------|
| **Primary background** | `bg-bg-primary` |
| **Card background** | `bg-bg-secondary` or `bg-glass-bg backdrop-blur-lg` |
| **Primary text** | `text-text-primary` |
| **Secondary text** | `text-text-secondary` |
| **Brand accent** | `text-brand-primary` or `bg-brand-primary` |
| **Glass border** | `border border-glass-border` |
| **Success** | `text-success` / `bg-success/10` |
| **Warning** | `text-warning` / `bg-warning/10` |
| **Error** | `text-error` / `bg-error/10` |
| **Info** | `text-info` / `bg-info/10` |
| **Standard radius** | `rounded-xl` (elements) / `rounded-2xl` (containers) |
| **Standard shadow** | `shadow-md` (cards) / `shadow-glass` (glass) |

---

## Related Documents

- **DESIGN-AUDIT.md** - Inventory of current violations
- **globals.css** - CSS variable definitions
- **design-tokens.ts** - TypeScript token exports
- **CLAUDE.md** - Project conventions and standards
