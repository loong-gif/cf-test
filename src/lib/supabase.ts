import { createClient } from '@supabase/supabase-js'
import {
  isSupabaseConfigured,
  supabasePublishableKey,
  supabaseUrl,
} from './supabase-config'

// Keep route modules importable before local demo credentials are configured.
// Data-fetching routes render a setup notice before issuing a request in that case.
const clientSupabaseUrl = supabaseUrl || 'https://local-demo.invalid'
const supabaseAnonKey = supabasePublishableKey || 'local-demo-anon-key'

const emptySupabaseFetch: typeof fetch = async () =>
  new Response(JSON.stringify([]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })

export const supabase = createClient(
  clientSupabaseUrl,
  supabaseAnonKey,
  isSupabaseConfigured ? undefined : { global: { fetch: emptySupabaseFetch } },
)
