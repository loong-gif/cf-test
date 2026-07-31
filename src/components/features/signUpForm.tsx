'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/context/authContext'

interface SignUpFormProps {
  onSuccess?: () => void
  onSwitchToSignIn?: () => void
}

interface FormErrors {
  email?: string
  password?: string
  confirmPassword?: string
  firstName?: string
  locationCity?: string
}

export function SignUpForm({ onSuccess, onSwitchToSignIn }: SignUpFormProps) {
  const { signUp, state } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [locationCity, setLocationCity] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!locationCity.trim()) {
      newErrors.locationCity = 'City is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await signUp(
        email,
        password,
        locationCity,
        firstName || undefined,
        lastName || undefined,
      )
      onSuccess?.()
    } catch {
      // Error is handled by context and displayed via state.error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          error={errors.firstName}
          disabled={isSubmitting}
        />
        <Input
          label="Last name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          disabled={isSubmitting}
        />
      </div>

      <Input
        label="City"
        type="text"
        value={locationCity}
        onChange={(e) => setLocationCity(e.target.value)}
        placeholder="Irvine"
        error={errors.locationCity}
        disabled={isSubmitting}
        required
      />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        error={errors.email}
        disabled={isSubmitting}
        required
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Min. 8 characters"
        error={errors.password}
        disabled={isSubmitting}
        required
      />

      <Input
        label="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
        disabled={isSubmitting}
        required
      />

      {state.error && (
        <p className="text-sm text-red-600 bg-red-400/10 px-3 py-2 rounded-lg">
          {state.error}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        Create account
      </Button>

      {onSwitchToSignIn && (
        <p className="text-center text-sm text-[#78350f]">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-amber-800 hover:text-[var(--color-accent-hover)] transition-colors font-medium"
          >
            Sign in
          </button>
        </p>
      )}
    </form>
  )
}
