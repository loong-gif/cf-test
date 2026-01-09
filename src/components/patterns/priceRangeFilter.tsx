'use client'

import { CurrencyDollar } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface PriceRangeFilterProps {
  minPrice?: number
  maxPrice?: number
  onChange: (min: number | undefined, max: number | undefined) => void
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  onChange,
}: PriceRangeFilterProps) {
  const [min, setMin] = useState<string>(minPrice?.toString() ?? '')
  const [max, setMax] = useState<string>(maxPrice?.toString() ?? '')

  // Sync external prop changes to internal state
  useEffect(() => {
    setMin(minPrice?.toString() ?? '')
  }, [minPrice])

  useEffect(() => {
    setMax(maxPrice?.toString() ?? '')
  }, [maxPrice])

  const handleMinChange = (value: string) => {
    setMin(value)
    const parsed = value === '' ? undefined : Number(value)
    const maxParsed = max === '' ? undefined : Number(max)
    onChange(parsed, maxParsed)
  }

  const handleMaxChange = (value: string) => {
    setMax(value)
    const minParsed = min === '' ? undefined : Number(min)
    const parsed = value === '' ? undefined : Number(value)
    onChange(minParsed, parsed)
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-secondary">
        Price Range
      </label>
      <div className="flex items-center gap-2">
        {/* Min Price Input */}
        <div className="relative flex-1">
          <CurrencyDollar
            size={18}
            weight="light"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="number"
            value={min}
            onChange={(e) => handleMinChange(e.target.value)}
            placeholder="Min"
            min={0}
            className="
              w-full pl-8 pr-3 py-2.5
              bg-glass-bg backdrop-blur-md
              border border-glass-border rounded-xl
              text-text-primary placeholder:text-text-muted
              focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50
              transition-all duration-200
              [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
            "
          />
        </div>

        <span className="text-text-muted">—</span>

        {/* Max Price Input */}
        <div className="relative flex-1">
          <CurrencyDollar
            size={18}
            weight="light"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="number"
            value={max}
            onChange={(e) => handleMaxChange(e.target.value)}
            placeholder="Max"
            min={0}
            className="
              w-full pl-8 pr-3 py-2.5
              bg-glass-bg backdrop-blur-md
              border border-glass-border rounded-xl
              text-text-primary placeholder:text-text-muted
              focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50
              transition-all duration-200
              [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
            "
          />
        </div>
      </div>
    </div>
  )
}
