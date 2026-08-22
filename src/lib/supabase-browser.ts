import { createBrowserClient } from '@supabase/ssr'
import { supabasePublishableKey, supabaseUrl } from './supabase-config'

// Keep auth providers importable before local demo credentials are configured.
const clientSupabaseUrl = supabaseUrl || 'https://local-demo.invalid'
const supabaseAnonKey = supabasePublishableKey || 'local-demo-anon-key'

export function createSupabaseBrowserClient() {
  return createBrowserClient(clientSupabaseUrl, supabaseAnonKey)
}
