'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-2.5
            bg-glass-bg backdrop-blur-md
            border rounded-xl
            text-text-primary placeholder:text-text-muted
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-primary/50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              error
                ? 'border-error/50 focus:border-error'
                : 'border-glass-border hover:border-glass-border-hover focus:border-brand-primary/50'
            }
            ${className}
          `}
          {...props}
        />
        {hint && !error && (
          <p className="mt-1.5 text-xs text-text-tertiary">{hint}</p>
        )}
        {error && <p className="mt-1.5 text-xs text-error-text">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
