import assert from 'node:assert/strict'
import test from 'node:test'
import { NextResponse } from 'next/server'
import {
  buildRequestSignInPath,
  buildSignInPath,
  legacySignInPath,
  replaceWithDashboard,
  safeDashboardPath,
} from './auth-redirect'
import { redirectWithResponseCookies } from './response-cookies'

test('accepts only local consumer dashboard paths', () => {
  assert.equal(safeDashboardPath('/dashboard'), '/dashboard')
  assert.equal(safeDashboardPath('/dashboard/settings'), '/dashboard/settings')
  assert.equal(
    safeDashboardPath('/dashboard/messages?conversation=123'),
    '/dashboard/messages?conversation=123',
  )
  assert.equal(safeDashboardPath('//evil.example'), null)
  assert.equal(safeDashboardPath('https://evil.example'), null)
  assert.equal(safeDashboardPath('/dashboard/../admin/dashboard'), null)
  assert.equal(safeDashboardPath('/dashboard/%2e%2e/admin/dashboard'), null)
  assert.equal(safeDashboardPath('/admin/dashboard'), null)
  assert.equal(safeDashboardPath('/business/dashboard'), null)
  assert.equal(safeDashboardPath(null), null)
})

test('builds a canonical sign-in path with a safe dashboard destination', () => {
  assert.equal(buildSignInPath('/dashboard'), '/sign-in?next=%2Fdashboard')
  assert.equal(
    buildSignInPath('/dashboard/settings'),
    '/sign-in?next=%2Fdashboard%2Fsettings',
  )
  assert.equal(
    buildSignInPath('https://evil.example'),
    '/sign-in?next=%2Fdashboard',
  )
  assert.equal(buildSignInPath(null), '/sign-in?next=%2Fdashboard')
})

test('preserves dashboard query parameters in the sign-in destination', () => {
  assert.equal(
    buildRequestSignInPath('/dashboard/messages', '?conversation=123'),
    '/sign-in?next=%2Fdashboard%2Fmessages%3Fconversation%3D123',
  )
})

test('preserves refreshed Supabase cookies on redirects', () => {
  const sourceResponse = NextResponse.next()
  sourceResponse.cookies.set('sb-session', 'refreshed', {
    httpOnly: true,
    path: '/',
  })

  const redirectResponse = redirectWithResponseCookies(
    new URL('https://costfinders.local/sign-in'),
    sourceResponse,
  )

  assert.equal(redirectResponse.status, 307)
  assert.equal(
    redirectResponse.headers.get('location'),
    'https://costfinders.local/sign-in',
  )
  assert.equal(redirectResponse.cookies.get('sb-session')?.value, 'refreshed')
})

test('normalizes only the legacy homepage sign-in query', () => {
  assert.equal(
    legacySignInPath('/', 'required', '/dashboard/messages'),
    '/sign-in?next=%2Fdashboard%2Fmessages',
  )
  assert.equal(
    legacySignInPath('/', 'required', '//evil.example'),
    '/sign-in?next=%2Fdashboard',
  )
  assert.equal(legacySignInPath('/prices', 'required', '/dashboard'), null)
  assert.equal(legacySignInPath('/', null, '/dashboard'), null)
})

test('replaces the route exactly once after authentication', () => {
  const destinations: string[] = []

  const destination = replaceWithDashboard(
    (href) => destinations.push(href),
    '/dashboard/favorites',
  )

  assert.equal(destination, '/dashboard/favorites')
  assert.deepEqual(destinations, ['/dashboard/favorites'])
})

test('falls back to the consumer dashboard for an unsafe post-auth route', () => {
  const destinations: string[] = []

  const destination = replaceWithDashboard(
    (href) => destinations.push(href),
    '/admin/dashboard',
  )

  assert.equal(destination, '/dashboard')
  assert.deepEqual(destinations, ['/dashboard'])
})
