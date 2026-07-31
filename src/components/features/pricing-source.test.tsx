import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { ListedPriceBadge, PricingSourcePanel } from './verifiedPrice'

test('listed price UI describes source without claiming universal verification', () => {
  const badge = renderToStaticMarkup(<ListedPriceBadge />)
  const panel = renderToStaticMarkup(<PricingSourcePanel compact />)

  assert.match(badge, /Listed price/)
  assert.match(panel, /Confirm the final price/)
  assert.doesNotMatch(`${badge}${panel}`, /Verified price|Price verified/i)
})
