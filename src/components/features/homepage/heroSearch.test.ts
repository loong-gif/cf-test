import assert from 'node:assert/strict'
import test from 'node:test'
import { buildDealSearchHref } from './heroSearch'

test('buildDealSearchHref only sends the selected treatment', () => {
  assert.equal(buildDealSearchHref('botox'), '/deals?treatment=botox')
})

test('buildDealSearchHref keeps the generic deals route for any treatment', () => {
  assert.equal(buildDealSearchHref(''), '/deals')
})

test('buildDealSearchHref preserves the other treatment filter', () => {
  assert.equal(buildDealSearchHref('other'), '/deals?treatment=other')
})
