/**
 * Design Tokens
 *
 * Programmatic access to CSS custom properties for the glassmorphic design system.
 * These reference CSS variables defined in globals.css.
 *
 * Theme: Blue slate with pink/magenta accent
 * Shadows: Grounded product-photography style
 */

export const colors = {
  bg: {
    primary: 'var(--color-bg-primary)', // #4c5578 (blue slate)
    secondary: 'var(--color-bg-secondary)', // #3d4563
    tertiary: 'var(--color-bg-tertiary)', // #2a2d3a
  },
  surface: {
    light: 'var(--color-surface-light)', // #e2e8f0
    medium: 'var(--color-surface-medium)', // #94a3b8
  },
  glass: {
    bg: 'var(--color-glass-bg)',
    bgHover: 'var(--color-glass-bg-hover)',
    border: 'var(--color-glass-border)',
    borderHover: 'var(--color-glass-border-hover)',
  },
  text: {
    primary: 'var(--color-text-primary)', // #e2e8f0
    secondary: 'var(--color-text-secondary)', // #94a3b8
    tertiary: 'var(--color-text-tertiary)', // #8b92a6
    muted: 'var(--color-text-muted)', // #4c5578
  },
  brand: {
    primary: 'var(--color-brand-primary)', // #ff0080 (pink)
    secondary: 'var(--color-brand-secondary)', // #ff4081
    tertiary: 'var(--color-brand-tertiary)', // #ff6b9d
  },
  semantic: {
    success: 'var(--color-success)',
    successText: 'var(--color-success-text)',
    warning: 'var(--color-warning)',
    warningText: 'var(--color-warning-text)',
    error: 'var(--color-error)',
    errorText: 'var(--color-error-text)',
    info: 'var(--color-info)',
    infoText: 'var(--color-info-text)',
  },
} as const

/**
 * Semantic color class patterns for consistent component styling.
 * Use these instead of hardcoding class strings.
 */
export const semanticClasses = {
  success: {
    badge: 'bg-success/10 border-success/20 text-success-text',
    text: 'text-success-text',
    bg: 'bg-success',
    bgSubtle: 'bg-success/10',
  },
  warning: {
    badge: 'bg-warning/10 border-warning/20 text-warning-text',
    text: 'text-warning-text',
    bg: 'bg-warning',
    bgSubtle: 'bg-warning/10',
  },
  error: {
    badge: 'bg-error/10 border-error/20 text-error-text',
    text: 'text-error-text',
    bg: 'bg-error',
    bgSubtle: 'bg-error/10',
  },
  info: {
    badge: 'bg-info/10 border-info/20 text-info-text',
    text: 'text-info-text',
    bg: 'bg-info',
    bgSubtle: 'bg-info/10',
  },
} as const

export const shadows = {
  // Standard shadows
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  glass: 'var(--shadow-glass)',
  elevated: 'var(--shadow-elevated)',
  // Product photography shadows (grounded, overhead light)
  productOverhead: 'var(--shadow-product-overhead)',
  photographicGround: 'var(--shadow-photographic-ground)',
  naturalBottom: 'var(--shadow-natural-bottom)',
} as const

export const blur = {
  sm: 'var(--blur-sm)',
  md: 'var(--blur-md)',
  lg: 'var(--blur-lg)',
  xl: 'var(--blur-xl)',
} as const

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const

export const spacing = {
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  10: 'var(--space-10)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
} as const

export const transitions = {
  fast: 'var(--transition-fast)',
  normal: 'var(--transition-normal)',
  slow: 'var(--transition-slow)',
} as const

// Type exports for TypeScript consumers
export type ColorToken = typeof colors
export type ShadowToken = typeof shadows
export type BlurToken = typeof blur
export type RadiusToken = typeof radius
export type SpacingToken = typeof spacing
export type TransitionToken = typeof transitions
export type SemanticClassToken = typeof semanticClasses
