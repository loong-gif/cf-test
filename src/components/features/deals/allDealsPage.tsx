'use client'

import {
  Buildings,
  ListBullets,
  MapPin,
  Rows,
  Tag,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { DealsCompareTable } from '@/components/features/deals/dealsCompareTable'
import { DealsGrid } from '@/components/features/dealsGrid'
import { FilterPanel } from '@/components/features/filterPanel'
import {
  type DealFilters,
  type SortOption,
  sortDeals,
} from '@/lib/utils/deal-sorting'
import { trackEvent } from '@/lib/analytics'
import type { AnonymousDeal } from '@/types/deal'

interface AllDealsPageProps {
  initialDeals: AnonymousDeal[]
  viewerCity?: string
  isSignedIn?: boolean
}

export type DealsFilter =
  | 'all'
  | 'botox'
  | 'fillers'
  | 'facials'
  | 'laser'
  | 'body'
  | 'skincare'
  | 'other'
  | 'dysport'
  | 'dermal-filler'
  | 'sculptra'

const dealsFilters: { value: DealsFilter; label: string }[] = [
  { value: 'all', label: 'All Deals' },
  { value: 'botox', label: 'Botox' },
  { value: 'fillers', label: 'Fillers' },
  { value: 'facials', label: 'Facials' },
  { value: 'laser', label: 'Laser' },
  { value: 'body', label: 'Body' },
  { value: 'skincare', label: 'Skincare' },
  { value: 'other', label: 'Other' },
  { value: 'dysport', label: 'Dysport' },
  { value: 'dermal-filler', label: 'Dermal Filler' },
  { value: 'sculptra', label: 'Sculptra' },
]

export function resolveDealsFilter(value: string | null): DealsFilter {
  return dealsFilters.find((filter) => filter.value === value)?.value ?? 'all'
}

export function countActiveDealFilters(filters: DealFilters): number {
  return [
    filters.city,
    filters.minPrice,
    filters.maxPrice,
    filters.minDiscount,
    filters.minRating,
  ].filter((value) => value !== undefined && value !== '').length
}

function matchesServiceName(deal: AnonymousDeal, serviceName: string): boolean {
  return deal.title.toLocaleLowerCase().includes(serviceName)
}

const ALL_DEALS_SORT_OPTIONS: SortOption[] = [
  'discount',
  'price-asc',
  'price-desc',
]

const DEAL_COMPARE_SORT_OPTIONS: SortOption[] = [
  ...ALL_DEALS_SORT_OPTIONS,
  'unit-price',
  'rating',
]

export function filterAllDeals(
  deals: AnonymousDeal[],
  selectedCategory: DealsFilter,
  filters: DealFilters,
  sortBy: SortOption,
): AnonymousDeal[] {
  const categoryFilteredDeals = deals.filter((deal) => {
    switch (selectedCategory) {
      case 'all':
        return true
      case 'botox':
      case 'fillers':
      case 'facials':
      case 'laser':
      case 'body':
      case 'skincare':
        return deal.category === selectedCategory
      case 'other':
        return ['body', 'skincare'].includes(deal.category)
      case 'dysport':
        return matchesServiceName(deal, 'dysport')
      case 'dermal-filler':
        return matchesServiceName(deal, 'dermal filler')
      case 'sculptra':
        return matchesServiceName(deal, 'sculptra')
      default:
        return false
    }
  })

  const priceFilteredDeals = categoryFilteredDeals.filter((deal) => {
    if (filters.minPrice !== undefined && deal.dealPrice < filters.minPrice) {
      return false
    }
    if (filters.maxPrice !== undefined && deal.dealPrice > filters.maxPrice) {
      return false
    }
    if (
      filters.city &&
      !deal.locationArea
        .toLocaleLowerCase()
        .includes(filters.city.toLocaleLowerCase())
    ) {
      return false
    }
    if (
      filters.minDiscount !== undefined &&
      deal.discountPercent < filters.minDiscount
    ) {
      return false
    }
    if (
      filters.minRating !== undefined &&
      deal.businessRating < filters.minRating
    ) {
      return false
    }
    return true
  })

  return sortDeals(priceFilteredDeals, sortBy)
}

export function AllDealsPage({
  initialDeals,
  viewerCity,
  isSignedIn = false,
}: AllDealsPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialCategory = resolveDealsFilter(searchParams.get('treatment'))
  const [selectedCategory, setSelectedCategory] =
    useState<DealsFilter>(initialCategory)
  const [filters, setFilters] = useState<DealFilters>({
    city: viewerCity,
  })
  const [sortBy, setSortBy] = useState<SortOption>('discount')
  const [view, setView] = useState<'cards' | 'compare'>('cards')

  const handleCategorySelect = (filter: DealsFilter) => {
    setSelectedCategory(filter)
    if (filter !== 'all') {
      trackEvent('category_selected', { category: filter })
    }
  }

  const activeFilterCount = useMemo(
    () => countActiveDealFilters(filters),
    [filters],
  )

  const filteredDeals = useMemo(
    () => filterAllDeals(initialDeals, selectedCategory, filters, sortBy),
    [initialDeals, selectedCategory, filters, sortBy],
  )

  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#451a03]">
            All Medspa Deals
          </h1>
          <p className="mt-2 text-[#78350f] max-w-2xl">
            Compare listed prices, savings, and provider ratings before you
            book. Confirm final pricing with the provider.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#78350f]">
            <div className="flex items-center gap-1.5">
              <Tag size={16} weight="fill" className="text-green-400" />
              <span>{initialDeals.length} active deals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Buildings size={16} weight="fill" className="text-blue-600" />
              <span>{viewerCity ? `Near ${viewerCity}` : 'All locations'}</span>
            </div>
            {viewerCity && (
              <Link
                href="/dashboard/settings"
                className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                Change in settings
              </Link>
            )}
          </div>
          {isSignedIn && !viewerCity && (
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-amber-700/20 bg-amber-50 px-4 py-3 text-sm text-[#78350f]">
              <MapPin size={18} weight="fill" className="text-amber-800" />
              <span>Add your city to personalize local deals.</span>
              <Link
                href="/dashboard/settings"
                className="font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                Add your city
              </Link>
            </div>
          )}
        </div>

        <div className="sticky top-16 z-30 bg-[#e8ddd0] -mx-4 px-4 py-3 mb-3 border-b border-[#d4c4b0]/50 space-y-3">
          <div className="flex flex-wrap gap-2">
            {dealsFilters.map((filter) => {
              const isSelected = selectedCategory === filter.value

              return (
                <button
                  type="button"
                  key={filter.value}
                  onClick={() => handleCategorySelect(filter.value)}
                  className={`inline-flex min-h-[44px] items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-amber-800 text-white shadow-[0_0_16px_rgba(146,64,14,0.25)]'
                      : 'border border-[#d4c4b0] bg-[#f2ebe2] text-[#78350f] hover:-translate-y-0.5 hover:border-[#c4b09a] hover:text-[#451a03]'
                  }`}
                  aria-pressed={isSelected}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
          <FilterPanel
            filters={filters}
            sortBy={sortBy}
            onFiltersChange={setFilters}
            onSortChange={setSortBy}
            onReset={() => {
              setFilters({ city: viewerCity })
              setSortBy('discount')
            }}
            activeFilterCount={activeFilterCount}
            sortOptions={DEAL_COMPARE_SORT_OPTIONS}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#78350f]">View</span>
            <div className="inline-flex rounded-xl border border-[#d4c4b0] bg-[#f2ebe2] p-1">
              <button
                type="button"
                onClick={() => setView('cards')}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-medium ${view === 'cards' ? 'bg-[#faf5ee] text-amber-800 shadow-sm' : 'text-[#78350f]'}`}
                aria-pressed={view === 'cards'}
              >
                <Rows size={16} /> Cards
              </button>
              <button
                type="button"
                onClick={() => setView('compare')}
                className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-medium ${view === 'compare' ? 'bg-[#faf5ee] text-amber-800 shadow-sm' : 'text-[#78350f]'}`}
                aria-pressed={view === 'compare'}
              >
                <ListBullets size={16} /> Compare
              </button>
            </div>
          </div>
        </div>

        {view === 'compare' ? (
          <DealsCompareTable deals={filteredDeals} />
        ) : (
          <DealsGrid
            deals={filteredDeals}
            onDealClick={(dealId) => router.push(`/deals/${dealId}`)}
          />
        )}
      </div>
    </main>
  )
}
