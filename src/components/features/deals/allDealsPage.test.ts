import assert from 'node:assert/strict'
import test from 'node:test'
import type { AnonymousDeal } from '@/types/deal'
import { filterAllDeals } from './allDealsPage'

const deals: AnonymousDeal[] = [
  {
    id: '1',
    title: 'Botox deal',
    description: '',
    category: 'botox',
    originalPrice: 15,
    dealPrice: 10,
    discountPercent: 33,
    unit: 'per unit',
    validFrom: '',
    validUntil: '',
    termsAndConditions: '',
    isActive: true,
    isFeatured: false,
    isSponsored: false,
    claimCount: 0,
    viewCount: 0,
    createdAt: '',
    updatedAt: '',
    locationArea: 'Irvine',
    businessRating: 4.5,
    businessReviewCount: 10,
    businessTier: 'unclaimed',
    templateType: 'FIXED_PRICE',
  },
  {
    id: '2',
    title: 'Facial deal',
    description: '',
    category: 'facials',
    originalPrice: 0,
    dealPrice: 0,
    discountPercent: 0,
    unit: 'per treatment',
    validFrom: '',
    validUntil: '',
    termsAndConditions: '',
    isActive: true,
    isFeatured: false,
    isSponsored: false,
    claimCount: 0,
    viewCount: 0,
    createdAt: '',
    updatedAt: '',
    locationArea: 'Tucson',
    businessRating: 4.5,
    businessReviewCount: 10,
    businessTier: 'unclaimed',
    templateType: 'FIXED_PRICE',
  },
]

test('filterAllDeals preserves offers from every city and without a price', () => {
  assert.deepEqual(
    filterAllDeals(deals, 'all', {}, 'discount').map((deal) => deal.id),
    ['1', '2'],
  )
})

test('filterAllDeals still supports category and price filters', () => {
  assert.deepEqual(
    filterAllDeals(deals, 'botox', { maxPrice: 20 }, 'discount').map(
      (deal) => deal.id,
    ),
    ['1'],
  )
})

test('filterAllDeals sorts by biggest discount percent by default option', () => {
  assert.deepEqual(
    filterAllDeals(
      [
        { ...deals[0], id: 'low', discountPercent: 10, dealPrice: 20 },
        { ...deals[0], id: 'high', discountPercent: 50, dealPrice: 30 },
      ],
      'all',
      {},
      'discount',
    ).map((deal) => deal.id),
    ['high', 'low'],
  )
})

test('filterAllDeals sorts by price ascending', () => {
  assert.deepEqual(
    filterAllDeals(
      [
        { ...deals[0], id: 'expensive', dealPrice: 40 },
        { ...deals[0], id: 'cheap', dealPrice: 12 },
      ],
      'all',
      {},
      'price-asc',
    ).map((deal) => deal.id),
    ['cheap', 'expensive'],
  )
})
