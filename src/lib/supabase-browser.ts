import { createBrowserClient } from '@supabase/ssr'
import { supabasePublishableKey, supabaseUrl } from './supabase-config'

export function createSupabaseBrowserClient() {
  return createBrowserClient(supabaseUrl, supabasePublishableKey)
}
