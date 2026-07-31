import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const projectRoot = new URL('../../', import.meta.url)

async function readProjectFile(path: string) {
  return readFile(new URL(path, projectRoot), 'utf8')
}

test('public pages do not receive a shared one-hour cache header', async () => {
  const config = await readProjectFile('next.config.ts')

  assert.doesNotMatch(config, /s-maxage/)
  assert.doesNotMatch(config, /stale-while-revalidate/)
})

test('database-backed public pages render on every request', async () => {
  const dataPages = [
    'src/app/(public)/page.tsx',
    'src/app/(app)/deals/[...slugs]/page.tsx',
    'src/app/(public)/treatments/page.tsx',
    'src/app/(public)/treatments/[category]/page.tsx',
  ]

  for (const path of dataPages) {
    const source = await readProjectFile(path)
    assert.match(
      source,
      /export const dynamic = ['"]force-dynamic['"]/,
      `${path} must render against the current database state`,
    )
    assert.doesNotMatch(source, /export const revalidate\s*=/)
  }
})

test('deals page degrades safely when Supabase is not configured', async () => {
  const source = await readProjectFile('src/app/(public)/deals/page.tsx')

  assert.match(source, /if \(!isSupabaseConfigured\)/)
  assert.match(source, /return <SupabaseSetupNotice \/>/)
})
