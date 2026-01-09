'use client'

import { MapPin } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { DealsGrid } from '@/components/features/dealsGrid'
import { FilterPanel } from '@/components/features/filterPanel'
import { CategoryFilter } from '@/components/patterns/categoryFilter'
import { useLocation } from '@/lib/context/locationContext'
import {
  type DealFilters,
  filterDeals,
  getActiveDeals,
  type SortOption,
  sortDeals,
} from '@/lib/mock-data'
import type { TreatmentCategory } from '@/types'

export default function DealsPage() {
  const router = useRouter()
  const { state: locationState } = useLocation()
  const [selectedCategory, setSelectedCategory] = useState<
    TreatmentCategory | 'all'
  >('all')
  const [filters, setFilters] = useState<DealFilters>({})
  const [sortBy, setSortBy] = useState<SortOption>('popular')

  // Calculate active filter count (price filters only for now)
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.minPrice !== undefined) count++
    if (filters.maxPrice !== undefined) count++
    return count
  }, [filters.minPrice, filters.maxPrice])

  // Handlers for FilterPanel
  const handleFiltersChange = (newFilters: DealFilters) => {
    setFilters(newFilters)
  }

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort)
  }

  const handleReset = () => {
    setFilters({})
    setSortBy('popular')
  }

  // Filter deals by category, location, price, and apply sorting
  const filteredDeals = useMemo(() => {
    // Start with all active deals
    let deals = getActiveDeals()

    // Filter by category if not 'all'
    if (selectedCategory !== 'all') {
      deals = filterDeals({ category: selectedCategory })
    }

    // Filter by city if one is selected
    if (locationState.current.city) {
      const cityName = locationState.current.city.name
      deals = filterDeals({
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        city: cityName,
      })
    }

    // Apply price filters
    if (filters.minPrice !== undefined) {
      const minPrice = filters.minPrice
      deals = deals.filter((d) => d.dealPrice >= minPrice)
    }
    if (filters.maxPrice !== undefined) {
      const maxPrice = filters.maxPrice
      deals = deals.filter((d) => d.dealPrice <= maxPrice)
    }

    // Apply sorting
    deals = sortDeals(deals, sortBy)

    return deals
  }, [selectedCategory, locationState.current.city, filters, sortBy])

  const handleDealClick = (dealId: string) => {
    router.push(`/deals/${dealId}`)
  }

  const locationDisplay = locationState.current.city?.name || 'All Locations'
  const hasLocation = !!locationState.current.city

  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
            {hasLocation ? 'Deals Near You' : 'All Deals'}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-text-secondary">
            <MapPin size={18} weight="light" className="text-brand-primary" />
            <span>{locationDisplay}</span>
            {/* Future: Add "Change" link to location modal */}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <CategoryFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Filter Panel */}
        <div className="mb-6">
          <FilterPanel
            filters={filters}
            sortBy={sortBy}
            onFiltersChange={handleFiltersChange}
            onSortChange={handleSortChange}
            onReset={handleReset}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Deals Grid */}
        <DealsGrid deals={filteredDeals} onDealClick={handleDealClick} />
      </div>
    </main>
  )
}
