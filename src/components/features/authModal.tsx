'use client'

import { useEffect, useState } from 'react'
import { Modal } from '@/components/ui/modal'
import { SignUpForm } from '@/components/features/signUpForm'
import { SignInForm } from '@/components/features/signInForm'

type AuthView = 'signUp' | 'signIn'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView?: AuthView
  onSuccess?: () => void
}

export function AuthModal({
  isOpen,
  onClose,
  initialView = 'signUp',
  onSuccess,
}: AuthModalProps) {
  const [currentView, setCurrentView] = useState<AuthView>(initialView)

  // Reset to initialView when modal opens or initialView changes
  useEffect(() => {
    if (isOpen) {
      setCurrentView(initialView)
    }
  }, [isOpen, initialView])

  const handleSuccess = () => {
    onSuccess?.()
    onClose()
  }

  const handleSwitchToSignIn = () => {
    setCurrentView('signIn')
  }

  const handleSwitchToSignUp = () => {
    setCurrentView('signUp')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="space-y-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-text-primary text-center">
          {currentView === 'signUp' ? 'Create Account' : 'Welcome Back'}
        </h2>

        {/* Form */}
        {currentView === 'signUp' ? (
          <SignUpForm
            onSuccess={handleSuccess}
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        ) : (
          <SignInForm
            onSuccess={handleSuccess}
            onSwitchToSignUp={handleSwitchToSignUp}
          />
        )}
      </div>
    </Modal>
  )
}
