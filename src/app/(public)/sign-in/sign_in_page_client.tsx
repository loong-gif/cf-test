'use client'

import { LockKey } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { SignInForm } from '@/components/features/signInForm'
import { Card } from '@/components/ui/card'
import { replaceWithDashboard } from '@/lib/auth-redirect'
import { useAuth } from '@/lib/context/authContext'

interface SignInPageClientProps {
  destination: string
}

export function SignInPageClient({ destination }: SignInPageClientProps) {
  const router = useRouter()
  const { state } = useAuth()
  const hasRedirected = useRef(false)

  useEffect(() => {
    if (state.isLoading || !state.isAuthenticated || hasRedirected.current) {
      return
    }

    hasRedirected.current = true
    replaceWithDashboard(router.replace, destination)
  }, [destination, router, state.isAuthenticated, state.isLoading])

  return (
    <main className="min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-md" padding="lg">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-amber-800/10 text-amber-800">
            <LockKey aria-hidden="true" size={24} weight="bold" />
          </div>
          <h1 className="text-2xl font-semibold text-[#451a03]">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-[#78350f]">
            Sign in to view your saved deals, claims, and messages.
          </p>
        </div>

        {state.isLoading || state.isAuthenticated ? (
          <div
            aria-live="polite"
            className="flex min-h-48 items-center justify-center text-sm text-[#78350f]"
          >
            Checking your account…
          </div>
        ) : (
          <SignInForm />
        )}
      </Card>
    </main>
  )
}
