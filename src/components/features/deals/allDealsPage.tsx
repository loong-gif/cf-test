'use client'

import { Buildings, Tag } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { DealsGrid } from '@/components/features/dealsGrid'
import { FilterPanel } from '@/components/features/filterPanel'
import { CategoryFilter } from '@/components/patterns/categoryFilter'
import {
  type DealFilters,
  type SortOption,
  sortDeals,
} from '@/lib/utils/deal-sorting'
import type { AnonymousDeal, TreatmentCategory } from '@/types/deal'

interface AllDealsPageProps {
  initialDeals: AnonymousDeal[]
}

const ALL_DEALS_SORT_OPTIONS: SortOption[] = [
  'discount',
  'price-asc',
  'price-desc',
]

export function filterAllDeals(
  deals: AnonymousDeal[],
  selectedCategory: TreatmentCategory | 'all',
  filters: DealFilters,
  sortBy: SortOption,
): AnonymousDeal[] {
  const categoryFilteredDeals =
    selectedCategory === 'all'
      ? deals
      : deals.filter((deal) => deal.category === selectedCategory)

  const priceFilteredDeals = categoryFilteredDeals.filter((deal) => {
    if (filters.minPrice !== undefined && deal.dealPrice < filters.minPrice) {
      return false
    }
    if (filters.maxPrice !== undefined && deal.dealPrice > filters.maxPrice) {
      return false
    }
    return true
  })

  return sortDeals(priceFilteredDeals, sortBy)
}

export function AllDealsPage({ initialDeals }: AllDealsPageProps) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<
    TreatmentCategory | 'all'
  >('all')
  const [filters, setFilters] = useState<DealFilters>({})
  const [sortBy, setSortBy] = useState<SortOption>('discount')

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.minPrice !== undefined) count++
    if (filters.maxPrice !== undefined) count++
    return count
  }, [filters.minPrice, filters.maxPrice])

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
            Browse every active promotion currently available from our
            providers.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#78350f]">
            <div className="flex items-center gap-1.5">
              <Tag size={16} weight="fill" className="text-green-400" />
              <span>{initialDeals.length} active deals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Buildings size={16} weight="fill" className="text-blue-600" />
              <span>All locations</span>
            </div>
          </div>
        </div>

        <div className="sticky top-16 z-30 bg-[#e8ddd0] -mx-4 px-4 py-3 mb-3 border-b border-[#d4c4b0]/50 space-y-3">
          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
          <FilterPanel
            filters={filters}
            sortBy={sortBy}
            onFiltersChange={setFilters}
            onSortChange={setSortBy}
            onReset={() => {
              setFilters({})
              setSortBy('discount')
            }}
            activeFilterCount={activeFilterCount}
            sortOptions={ALL_DEALS_SORT_OPTIONS}
          />
        </div>

        <DealsGrid
          deals={filteredDeals}
          onDealClick={(dealId) => router.push(`/deals/${dealId}`)}
        />
      </div>
    </main>
  )
}
