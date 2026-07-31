import {
  getPublicSiteUrl,
  resolveSupabaseConfig,
} from './public-runtime-config'

const requiredVariables = ['NEXT_PUBLIC_SUPABASE_URL'] as const
const resolvedSupabaseConfig = resolveSupabaseConfig({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
})

export const publicSiteUrl = getPublicSiteUrl({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
})
export const supabaseUrl = resolvedSupabaseConfig.url
export const supabasePublishableKey = resolvedSupabaseConfig.publishableKey

export const missingSupabaseVariables = [
  ...requiredVariables.filter(() => !supabaseUrl),
  ...(!supabasePublishableKey
    ? (['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'] as const)
    : []),
]

export const isSupabaseConfigured = missingSupabaseVariables.length === 0
