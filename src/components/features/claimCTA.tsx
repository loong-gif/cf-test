'use client'

import { Lock, UserPlus } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ClaimCTAProps {
  dealId: string
  onSignUp?: () => void
  onSignIn?: () => void
}

export function ClaimCTA({ dealId, onSignUp, onSignIn }: ClaimCTAProps) {
  // Always show auth wall since we don't have auth yet
  return (
    <Card variant="glass" padding="lg">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <Lock size={32} weight="fill" className="text-brand-primary" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary">
            Business Details Hidden
          </h3>
          <p className="text-sm text-text-secondary">
            Create a free account to reveal the business name, location, and
            contact details — then claim this deal.
          </p>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3">
          <Button
            size="lg"
            className="w-full"
            onClick={onSignUp}
            type="button"
          >
            <UserPlus size={20} weight="bold" />
            Create Free Account
          </Button>

          <button
            type="button"
            onClick={onSignIn}
            className="text-sm text-brand-primary hover:text-brand-secondary transition-colors"
          >
            Already have an account? Sign in
          </button>
        </div>

        {/* Trust indicator */}
        <p className="text-xs text-text-muted">
          Your information is secure and never shared without permission.
        </p>
      </div>
    </Card>
  )
}
