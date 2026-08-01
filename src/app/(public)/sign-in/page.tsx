import type { Metadata } from 'next'
import { SupabaseSetupNotice } from '@/components/features/demo/supabaseSetupNotice'
import { dashboardPathOrDefault } from '@/lib/auth-redirect'
import { AuthProvider } from '@/lib/context/authContext'
import { isSupabaseConfigured } from '@/lib/supabase-config'
import { SignInPageClient } from './sign_in_page_client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your CostFinders account.',
  robots: { index: false, follow: false },
}

interface SignInPageProps {
  searchParams: Promise<{ next?: string | string[] }>
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  if (!isSupabaseConfigured) {
    return <SupabaseSetupNotice />
  }

  const params = await searchParams
  const requestedNext = Array.isArray(params.next)
    ? params.next[0]
    : params.next
  const destination = dashboardPathOrDefault(requestedNext ?? null)

  return (
    <AuthProvider>
      <SignInPageClient destination={destination} />
    </AuthProvider>
  )
}
