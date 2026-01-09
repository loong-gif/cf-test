// Raw data exports
export { deals, toAnonymousDeal } from './deals'
export { businesses } from './businesses'
export { cities, locationAreas } from './locations'
export { consumers, claims } from './consumers'

// Query utilities
export {
  // Deals
  getActiveDeals,
  getDealsByCategory,
  getDealsByCity,
  getFeaturedDeals,
  getSponsoredDeals,
  getDealById,
  getAnonymousDealById,
  // Businesses
  getBusinessById,
  getBusinessForDeal,
  // Locations
  getActiveCities,
  getAreasForCity,
  getCityByName,
  // Consumers
  getConsumerById,
  // Claims
  getClaimsByConsumer,
  getClaimsByStatus,
  getClaimById,
  // Filtering & Sorting
  filterDeals,
  sortDeals,
  type DealFilters,
  type SortOption,
} from './utils'
