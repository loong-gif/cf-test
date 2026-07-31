const DEFAULT_PUBLIC_SITE_URL = 'https://www.costfinders.ai'

type PublicRuntimeEnvironment = Readonly<
  Partial<
    Record<
      | 'NEXT_PUBLIC_BASE_URL'
      | 'NEXT_PUBLIC_SUPABASE_URL'
      | 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
      | 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
      string
    >
  >
>

function normalizeHttpUrl(value: string | undefined): string | null {
  if (!value?.trim()) {
    return null
  }

  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      return null
    }
    return url.toString().replace(/\/$/, '')
  } catch {
    return null
  }
}

export function getPublicSiteUrl(environment: PublicRuntimeEnvironment) {
  return (
    normalizeHttpUrl(environment.NEXT_PUBLIC_BASE_URL) ??
    DEFAULT_PUBLIC_SITE_URL
  )
}

export function resolveSupabaseConfig(environment: PublicRuntimeEnvironment) {
  return {
    url: normalizeHttpUrl(environment.NEXT_PUBLIC_SUPABASE_URL) ?? '',
    publishableKey: (
      environment.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
      environment.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      ''
    ).trim(),
  }
}

export function getSupabaseOrigin(value: string): string | null {
  const normalizedUrl = normalizeHttpUrl(value)
  return normalizedUrl ? new URL(normalizedUrl).origin : null
}
