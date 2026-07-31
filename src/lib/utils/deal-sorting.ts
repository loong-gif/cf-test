import type { AnonymousDeal, TreatmentCategory } from '@/types/deal'

export interface DealFilters {
  category?: TreatmentCategory
  city?: string
  minPrice?: number
  maxPrice?: number
  minDiscount?: number
  minRating?: number
}

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'discount'
  | 'popular'
  | 'newest'
  | 'unit-price'
  | 'rating'

function comparableUnitPrice(deal: AnonymousDeal): number {
  if (deal.itemUnitPrice != null && deal.itemUnitPrice > 0) {
    return deal.itemUnitPrice
  }
  return Number.POSITIVE_INFINITY
}

export function sortDeals(
  dealsToSort: AnonymousDeal[],
  sortBy: SortOption,
): AnonymousDeal[] {
  const sorted = [...dealsToSort]

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.dealPrice - b.dealPrice)
    case 'price-desc':
      return sorted.sort((a, b) => b.dealPrice - a.dealPrice)
    case 'discount':
      return sorted.sort((a, b) => b.discountPercent - a.discountPercent)
    case 'popular':
      return sorted.sort((a, b) => b.claimCount - a.claimCount)
    case 'newest':
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    case 'unit-price':
      return sorted.sort(
        (a, b) => comparableUnitPrice(a) - comparableUnitPrice(b),
      )
    case 'rating':
      return sorted.sort((a, b) => b.businessRating - a.businessRating)
    default:
      return sorted
  }
}
