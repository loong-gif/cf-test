import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getPublicSiteUrl,
  getSupabaseOrigin,
  resolveSupabaseConfig,
} from './public-runtime-config'

test('uses the configured canonical site URL and removes trailing slashes', () => {
  assert.equal(
    getPublicSiteUrl({
      NEXT_PUBLIC_BASE_URL: 'https://costfinders-v2.vercel.app/',
    }),
    'https://costfinders-v2.vercel.app',
  )
})

test('falls back to the canonical public domain when the site URL is invalid', () => {
  assert.equal(
    getPublicSiteUrl({ NEXT_PUBLIC_BASE_URL: 'javascript:alert(1)' }),
    'https://www.costfinders.ai',
  )
})

test('resolves the publishable key while supporting the legacy anon key', () => {
  assert.deepEqual(
    resolveSupabaseConfig({
      NEXT_PUBLIC_SUPABASE_URL: 'https://example.supabase.co/',
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: ' publishable ',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'legacy',
    }),
    {
      url: 'https://example.supabase.co',
      publishableKey: 'publishable',
    },
  )

  assert.deepEqual(
    resolveSupabaseConfig({
      NEXT_PUBLIC_SUPABASE_URL: 'https://legacy.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: ' legacy ',
    }),
    {
      url: 'https://legacy.supabase.co',
      publishableKey: 'legacy',
    },
  )
})

test('returns only the validated Supabase origin for resource hints', () => {
  assert.equal(
    getSupabaseOrigin('https://ebamlycrvgtivuluipvn.supabase.co/rest/v1'),
    'https://ebamlycrvgtivuluipvn.supabase.co',
  )
  assert.equal(getSupabaseOrigin('not-a-url'), null)
})
