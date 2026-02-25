import { createClient } from '@supabase/supabase-js'

function getEnv(key: string): string | undefined {
  return process.env[key]
}

export function createSupabaseServerClient() {
  const url = getEnv('SUPABASE_URL') || getEnv('NEXT_PUBLIC_SUPABASE_URL')
  const anonKey =
    getEnv('SUPABASE_ANON_KEY') || getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')

  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase env. Set SUPABASE_URL and SUPABASE_ANON_KEY (or NEXT_PUBLIC_ equivalents).',
    )
  }

  return createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
