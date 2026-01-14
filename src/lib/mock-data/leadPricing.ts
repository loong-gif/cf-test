// Lead pricing and credit system mock data

export type BusinessTier = 'free' | 'paid'

export interface TierPricing {
  tier: BusinessTier
  pricePerLead: number
  description: string
}

export interface CreditPackage {
  id: string
  credits: number
  price: number
  pricePerLead: number
  savingsPercent: number
  isBestValue: boolean
}

export interface BusinessCredits {
  available: number
  used: number
  totalPurchased: number
}

export interface CreditUsageHistory {
  month: string
  used: number
}

// Lead pricing by tier
const leadPricing: Record<BusinessTier, TierPricing> = {
  free: {
    tier: 'free',
    pricePerLead: 5.0,
    description: 'Standard per-lead pricing',
  },
  paid: {
    tier: 'paid',
    pricePerLead: 3.0,
    description: 'Professional tier pricing - 40% savings',
  },
}

// Credit packages with bulk discounts
const creditPackages: CreditPackage[] = [
  {
    id: 'pkg_10',
    credits: 10,
    price: 45,
    pricePerLead: 4.5,
    savingsPercent: 10,
    isBestValue: false,
  },
  {
    id: 'pkg_25',
    credits: 25,
    price: 100,
    pricePerLead: 4.0,
    savingsPercent: 20,
    isBestValue: false,
  },
  {
    id: 'pkg_50',
    credits: 50,
    price: 175,
    pricePerLead: 3.5,
    savingsPercent: 30,
    isBestValue: false,
  },
  {
    id: 'pkg_100',
    credits: 100,
    price: 300,
    pricePerLead: 3.0,
    savingsPercent: 40,
    isBestValue: true,
  },
]

// Mock business credits
const businessCredits: BusinessCredits = {
  available: 15,
  used: 35,
  totalPurchased: 50,
}

// Mock credit usage history (last 6 months)
const creditUsageHistory: CreditUsageHistory[] = [
  { month: 'Aug', used: 8 },
  { month: 'Sep', used: 12 },
  { month: 'Oct', used: 5 },
  { month: 'Nov', used: 7 },
  { month: 'Dec', used: 3 },
  { month: 'Jan', used: 0 },
]

/**
 * Get lead pricing for a specific tier
 */
export function getLeadPricing(tier: BusinessTier): TierPricing {
  return { ...leadPricing[tier] }
}

/**
 * Get all tier pricing for comparison
 */
export function getAllLeadPricing(): TierPricing[] {
  return Object.values(leadPricing).map((p) => ({ ...p }))
}

/**
 * Get all credit packages
 */
export function getCreditPackages(): CreditPackage[] {
  return creditPackages.map((pkg) => ({ ...pkg }))
}

/**
 * Get a specific credit package by ID
 */
export function getCreditPackageById(id: string): CreditPackage | undefined {
  const pkg = creditPackages.find((p) => p.id === id)
  return pkg ? { ...pkg } : undefined
}

/**
 * Get business credits (current balance)
 */
export function getBusinessCredits(): BusinessCredits {
  return { ...businessCredits }
}

/**
 * Get credit usage history
 */
export function getCreditUsageHistory(): CreditUsageHistory[] {
  return creditUsageHistory.map((h) => ({ ...h }))
}

/**
 * Calculate savings between free and paid tier
 */
export function calculateTierSavings(): { amount: number; percent: number } {
  const freePricing = leadPricing.free
  const paidPricing = leadPricing.paid
  const amount = freePricing.pricePerLead - paidPricing.pricePerLead
  const percent = Math.round((amount / freePricing.pricePerLead) * 100)
  return { amount, percent }
}

/**
 * Mock purchase credits (returns updated balance)
 */
export function purchaseCredits(packageId: string): BusinessCredits | null {
  const pkg = creditPackages.find((p) => p.id === packageId)
  if (!pkg) return null

  // Simulate purchase
  businessCredits.available += pkg.credits
  businessCredits.totalPurchased += pkg.credits

  return { ...businessCredits }
}
