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
    filterAllDeals(deals, 'all', {}, 'popular').map((deal) => deal.id),
    ['1', '2'],
  )
})

test('filterAllDeals still supports category and price filters', () => {
  assert.deepEqual(
    filterAllDeals(deals, 'botox', { maxPrice: 20 }, 'popular').map(
      (deal) => deal.id,
    ),
    ['1'],
  )
})
