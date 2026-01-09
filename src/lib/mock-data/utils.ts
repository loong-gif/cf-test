import type {
  AnonymousDeal,
  Business,
  City,
  Claim,
  ClaimStatus,
  Deal,
  LocationArea,
  TreatmentCategory,
} from '@/types'
import { businesses } from './businesses'
import { claims, consumers } from './consumers'
import { deals, toAnonymousDeal } from './deals'
import { cities, locationAreas } from './locations'

// Deal queries
export function getActiveDeals(): AnonymousDeal[] {
  return deals.filter((d) => d.isActive).map(toAnonymousDeal)
}

export function getDealsByCategory(
  category: TreatmentCategory
): AnonymousDeal[] {
  return deals
    .filter((d) => d.isActive && d.category === category)
    .map(toAnonymousDeal)
}

export function getDealsByCity(cityName: string): AnonymousDeal[] {
  const cityBusinessIds = businesses
    .filter((b) => b.city.toLowerCase() === cityName.toLowerCase())
    .map((b) => b.id)

  return deals
    .filter((d) => d.isActive && cityBusinessIds.includes(d.businessId))
    .map(toAnonymousDeal)
}

export function getFeaturedDeals(): AnonymousDeal[] {
  return deals.filter((d) => d.isActive && d.isFeatured).map(toAnonymousDeal)
}

export function getSponsoredDeals(): AnonymousDeal[] {
  return deals.filter((d) => d.isActive && d.isSponsored).map(toAnonymousDeal)
}

export function getDealById(id: string): Deal | undefined {
  return deals.find((d) => d.id === id)
}

export function getAnonymousDealById(id: string): AnonymousDeal | undefined {
  const deal = deals.find((d) => d.id === id)
  return deal ? toAnonymousDeal(deal) : undefined
}

// Business queries (only for revealed/logged-in views)
export function getBusinessById(id: string): Business | undefined {
  return businesses.find((b) => b.id === id)
}

export function getBusinessForDeal(dealId: string): Business | undefined {
  const deal = deals.find((d) => d.id === dealId)
  return deal ? businesses.find((b) => b.id === deal.businessId) : undefined
}

// Location queries
export function getActiveCities(): City[] {
  return cities.filter((c) => c.isActive)
}

export function getAreasForCity(cityId: string): LocationArea[] {
  return locationAreas.filter((a) => a.cityId === cityId)
}

export function getCityByName(name: string): City | undefined {
  return cities.find((c) => c.name.toLowerCase() === name.toLowerCase())
}

// Consumer queries
export function getConsumerById(id: string) {
  return consumers.find((c) => c.id === id)
}

// Claim queries
export function getClaimsByConsumer(consumerId: string): Claim[] {
  return claims.filter((c) => c.consumerId === consumerId)
}

export function getClaimsByStatus(status: ClaimStatus): Claim[] {
  return claims.filter((c) => c.status === status)
}

export function getClaimById(id: string): Claim | undefined {
  return claims.find((c) => c.id === id)
}

// Filter and sort helpers
export interface DealFilters {
  category?: TreatmentCategory
  city?: string
  minPrice?: number
  maxPrice?: number
  minDiscount?: number
}

export function filterDeals(filters: DealFilters): AnonymousDeal[] {
  let result = getActiveDeals()

  if (filters.category) {
    result = result.filter((d) => d.category === filters.category)
  }

  if (filters.city) {
    const cityBusinessIds = businesses
      .filter((b) => b.city.toLowerCase() === filters.city!.toLowerCase())
      .map((b) => b.id)
    result = result.filter((d) => {
      const deal = deals.find((dd) => dd.id === d.id)
      return deal && cityBusinessIds.includes(deal.businessId)
    })
  }

  if (filters.minPrice !== undefined) {
    result = result.filter((d) => d.dealPrice >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter((d) => d.dealPrice <= filters.maxPrice!)
  }

  if (filters.minDiscount !== undefined) {
    result = result.filter((d) => d.discountPercent >= filters.minDiscount!)
  }

  return result
}

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'discount'
  | 'popular'
  | 'newest'

export function sortDeals(
  dealsToSort: AnonymousDeal[],
  sortBy: SortOption
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
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    default:
      return sorted
  }
}
