import assert from 'node:assert/strict'
import test from 'node:test'
import type { AnonymousDeal } from '@/types/deal'
import {
  countActiveDealFilters,
  filterAllDeals,
  resolveDealsFilter,
} from './allDealsPage'

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

test('filterAllDeals supports exact service-name filters', () => {
  const serviceDeals = [
    ...deals,
    { ...deals[0], id: '3', title: 'Dysport' },
    {
      ...deals[0],
      id: '4',
      title: 'Dermal Filler',
      category: 'fillers' as const,
    },
    { ...deals[0], id: '5', title: 'Sculptra', category: 'fillers' as const },
  ]

  assert.deepEqual(
    filterAllDeals(serviceDeals, 'dysport', {}, 'popular').map(
      (deal) => deal.id,
    ),
    ['3'],
  )
  assert.deepEqual(
    filterAllDeals(serviceDeals, 'dermal-filler', {}, 'popular').map(
      (deal) => deal.id,
    ),
    ['4'],
  )
  assert.deepEqual(
    filterAllDeals(serviceDeals, 'sculptra', {}, 'popular').map(
      (deal) => deal.id,
    ),
    ['5'],
  )
})

test('filterAllDeals groups non-injectable services under other treatments', () => {
  assert.deepEqual(
    filterAllDeals(
      [
        { ...deals[0], id: 'body', category: 'body' },
        { ...deals[0], id: 'skin', category: 'skincare' },
        { ...deals[0], id: 'botox', category: 'botox' },
      ],
      'other',
      {},
      'popular',
    ).map((deal) => deal.id),
    ['body', 'skin'],
  )
})

test('resolveDealsFilter accepts every homepage treatment option', () => {
  assert.equal(resolveDealsFilter('facials'), 'facials')
  assert.equal(resolveDealsFilter('other'), 'other')
  assert.equal(resolveDealsFilter('unknown'), 'all')
  assert.equal(resolveDealsFilter(null), 'all')
})

test('countActiveDealFilters includes personalized city filtering', () => {
  assert.equal(countActiveDealFilters({ city: 'Irvine' }), 1)
  assert.equal(
    countActiveDealFilters({
      city: 'Irvine',
      maxPrice: 200,
      minDiscount: 20,
    }),
    3,
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

test('filterAllDeals applies city, savings, and rating filters together', () => {
  const comparisonDeals = [
    { ...deals[0], id: 'matches', discountPercent: 45, businessRating: 4.8 },
    {
      ...deals[0],
      id: 'low-rating',
      discountPercent: 45,
      businessRating: 4.2,
    },
    {
      ...deals[0],
      id: 'other-city',
      locationArea: 'Tucson',
      discountPercent: 45,
      businessRating: 4.8,
    },
  ]

  assert.deepEqual(
    filterAllDeals(
      comparisonDeals,
      'all',
      { city: 'irvine', minDiscount: 40, minRating: 4.5 },
      'discount',
    ).map((deal) => deal.id),
    ['matches'],
  )
})

test('filterAllDeals can sort comparable deals by unit price and rating', () => {
  const comparisonDeals = [
    { ...deals[0], id: 'higher-unit', itemUnitPrice: 12, businessRating: 4.6 },
    { ...deals[0], id: 'lower-unit', itemUnitPrice: 9, businessRating: 4.7 },
    { ...deals[0], id: 'no-unit', itemUnitPrice: null, businessRating: 4.9 },
  ]

  assert.deepEqual(
    filterAllDeals(comparisonDeals, 'all', {}, 'unit-price').map(
      (deal) => deal.id,
    ),
    ['lower-unit', 'higher-unit', 'no-unit'],
  )
  assert.deepEqual(
    filterAllDeals(comparisonDeals, 'all', {}, 'rating').map((deal) => deal.id),
    ['no-unit', 'lower-unit', 'higher-unit'],
  )
})
