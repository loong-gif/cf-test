'use client'

import { Funnel, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { PriceRangeFilter } from '@/components/patterns/priceRangeFilter'
import { SortSelector } from '@/components/patterns/sortSelector'
import { trackEvent } from '@/lib/analytics'
import type { DealFilters, SortOption } from '@/lib/utils/deal-sorting'

interface FilterPanelProps {
  filters: DealFilters
  sortBy: SortOption
  onFiltersChange: (filters: DealFilters) => void
  onSortChange: (sort: SortOption) => void
  onReset: () => void
  activeFilterCount: number
  sortOptions?: SortOption[]
}

export function FilterPanel({
  filters,
  sortBy,
  onFiltersChange,
  onSortChange,
  onReset,
  activeFilterCount,
  sortOptions,
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handlePriceChange = (
    min: number | undefined,
    max: number | undefined,
  ) => {
    trackEvent('filter_applied', {
      type: 'price',
      min: min ?? 0,
      max: max ?? 0,
    })
    onFiltersChange({
      ...filters,
      minPrice: min,
      maxPrice: max,
    })
  }

  return (
    <div className="space-y-4">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Filter Toggle */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            inline-flex items-center gap-2 px-4 py-2.5
            rounded-xl text-sm font-medium
            transition-all duration-200
            ${
              isExpanded
                ? 'bg-amber-800 text-white'
                : 'bg-[#f2ebe2] border border-[#d4c4b0] text-[#78350f] hover:text-[#451a03] hover:border-[#c4b09a]'
            }
          `}
          aria-expanded={isExpanded}
        >
          <Funnel size={18} weight={isExpanded ? 'fill' : 'regular'} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span
              className={`
              inline-flex items-center justify-center
              w-5 h-5 text-xs font-bold rounded-full
              ${isExpanded ? 'bg-white/20 text-white' : 'bg-amber-800 text-white'}
            `}
            >
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Right Side: Clear All + Sort */}
        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="
                inline-flex items-center gap-1.5 px-3 py-2
                text-sm text-[#78350f] hover:text-[#451a03]
                transition-colors duration-200
              "
            >
              <X size={14} weight="bold" />
              <span>Clear all</span>
            </button>
          )}
          <SortSelector
            value={sortBy}
            onChange={onSortChange}
            options={sortOptions}
          />
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-4 bg-[#f2ebe2] border border-[#d4c4b0] rounded-xl space-y-4">
          <PriceRangeFilter
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onChange={handlePriceChange}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#78350f]">
              Minimum savings
              <select
                value={filters.minDiscount ?? ''}
                onChange={(event) =>
                  onFiltersChange({
                    ...filters,
                    minDiscount: event.target.value
                      ? Number(event.target.value)
                      : undefined,
                  })
                }
                className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#d4c4b0] bg-[#faf5ee] px-3 text-[#451a03] focus:border-amber-800/40 focus:outline-none"
              >
                <option value="">Any discount</option>
                <option value="20">20%+</option>
                <option value="40">40%+</option>
              </select>
            </label>
            <label className="text-sm font-medium text-[#78350f]">
              Provider rating
              <select
                value={filters.minRating ?? ''}
                onChange={(event) =>
                  onFiltersChange({
                    ...filters,
                    minRating: event.target.value
                      ? Number(event.target.value)
                      : undefined,
                  })
                }
                className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#d4c4b0] bg-[#faf5ee] px-3 text-[#451a03] focus:border-amber-800/40 focus:outline-none"
              >
                <option value="">Any rating</option>
                <option value="4.5">4.5+</option>
                <option value="4.8">4.8+</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
