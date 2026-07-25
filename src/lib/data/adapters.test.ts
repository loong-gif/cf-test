import assert from 'node:assert/strict'
import test from 'node:test'
import type { OfferWithBusiness } from '@/types/supabase'
import { offerToAnonymousDeal } from './adapters'

function offer(overrides: Partial<OfferWithBusiness> = {}): OfferWithBusiness {
  return {
    id: 1,
    business_id: 1,
    membership_plan_id: null,
    promotion_id: null,
    regular_price: 200,
    discount_price: 150,
    discount_percent: null,
    discount_amount: null,
    is_membership_required: null,
    is_active: true,
    is_new_customer_required: false,
    offer_fingerprint: null,
    offer_raw_text: 'Botox special',
    created_at: '2026-01-01T00:00:00Z',
    service_name: 'Botox',
    service_category: 'Neurotoxins',
    unit_type: 'unit',
    original_price: 200,
    master_business_info: {
      business_id: 1,
      name: 'Clinic A',
      address: null,
      city: 'Austin',
      score: 4.5,
      review_count: 10,
      category: null,
      website: null,
    },
    promo_offer_items: [
      {
        offer_item_id: 10,
        offer_id: 1,
        service_id: 100,
        quantity: 3,
        unit_price: 12,
        clinic_services: {
          service_name: 'Botox',
          service_category: 'Neurotoxins',
          unit_type: 'unit',
        },
      },
    ],
    ...overrides,
  }
}

test('offerToAnonymousDeal maps first item quantity and unit_price', () => {
  const deal = offerToAnonymousDeal(offer())
  assert.equal(deal.itemQuantity, 3)
  assert.equal(deal.itemUnitPrice, 12)
})

test('offerToAnonymousDeal maps the live Neurotoxin category to Botox', () => {
  const deal = offerToAnonymousDeal(
    offer({
      service_category: 'Neurotoxin',
      promo_offer_items: [
        {
          offer_item_id: 10,
          offer_id: 1,
          service_id: 100,
          quantity: 3,
          unit_price: 12,
          clinic_services: {
            service_name: 'Botox',
            service_category: 'Neurotoxin',
            unit_type: 'unit',
          },
        },
      ],
    }),
  )

  assert.equal(deal.category, 'botox')
})

test('offerToAnonymousDeal maps the live Filler category to Fillers', () => {
  const deal = offerToAnonymousDeal(
    offer({
      service_category: 'Filler',
      promo_offer_items: [
        {
          offer_item_id: 10,
          offer_id: 1,
          service_id: 100,
          quantity: 1,
          unit_price: 650,
          clinic_services: {
            service_name: 'Dermal Filler',
            service_category: 'Filler',
            unit_type: 'syringe',
          },
        },
      ],
    }),
  )

  assert.equal(deal.category, 'fillers')
})

test('offerToAnonymousDeal prefers the linked clinic service name for its title', () => {
  const deal = offerToAnonymousDeal(
    offer({
      service_name: null,
      offer_raw_text: '40 units of Botox for $400',
      promo_offer_items: [
        {
          offer_item_id: 10,
          offer_id: 1,
          service_id: 100,
          quantity: 40,
          unit_price: 10,
          clinic_services: {
            service_name: 'Botox',
            service_category: 'Neurotoxins',
            unit_type: 'unit',
          },
        },
      ],
    }),
  )
  assert.equal(deal.title, 'Botox')
})

test('offerToAnonymousDeal when promo_offer_items missing', () => {
  const deal = offerToAnonymousDeal(offer({ promo_offer_items: null }))
  assert.equal(deal.itemQuantity, null)
  assert.equal(deal.itemUnitPrice, null)
})

test('offerToAnonymousDeal when quantity and unit_price are null', () => {
  const deal = offerToAnonymousDeal(
    offer({
      promo_offer_items: [
        {
          offer_item_id: 11,
          offer_id: 1,
          service_id: 100,
          quantity: null,
          unit_price: null,
        },
      ],
    }),
  )
  assert.equal(deal.itemQuantity, null)
  assert.equal(deal.itemUnitPrice, null)
})
