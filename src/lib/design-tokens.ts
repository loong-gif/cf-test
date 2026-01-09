/**
 * Design Tokens
 *
 * Programmatic access to CSS custom properties for the glassmorphic design system.
 * These reference CSS variables defined in globals.css.
 */

export const colors = {
  bg: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    tertiary: 'var(--color-bg-tertiary)',
  },
  glass: {
    bg: 'var(--color-glass-bg)',
    bgHover: 'var(--color-glass-bg-hover)',
    border: 'var(--color-glass-border)',
    borderHover: 'var(--color-glass-border-hover)',
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    muted: 'var(--color-text-muted)',
  },
  brand: {
    primary: 'var(--color-brand-primary)',
    secondary: 'var(--color-brand-secondary)',
    tertiary: 'var(--color-brand-tertiary)',
  },
  semantic: {
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    info: 'var(--color-info)',
  },
} as const

export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  glass: 'var(--shadow-glass)',
  elevated: 'var(--shadow-elevated)',
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
