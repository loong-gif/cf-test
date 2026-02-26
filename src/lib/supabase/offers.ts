import type { AnonymousDeal, Deal, TreatmentCategory } from '@/types'
import type { Business } from '@/types/business'
import { createSupabaseServerClient } from './server'

type OfferRow = {
  id: number
  business_id: number | null
  service_name: string | null
  service_category: string | null
  offer_raw_text: string | null
  start_date: string | null
  end_date: string | null
  eligibility: string | null
  discount_percent: number | null
  discount_price: string | null
  original_price: string | null
  delivered_unit: number | null
  min_unit: string | null
  unit_type: string | null
  service_area: string | null
  source_name: string | null
  source_url: string | null
  template_type: string | null
  created_at: string
}

type BusinessRow = {
  business_id: number
  name: string | null
  address: string | null
  city: string | null
  website: string | null
  review_count: number | null
  score: number | null
  category: string | null
  website_clean: string | null
  facebook_url: string | null
  instagram_url: string | null
  updated_at: string | null
  created_at: string | null
}

export type CityInfo = { name: string; slug: string }

export type CategoryInfo = {
  name: string
  slug: TreatmentCategory
  icon: string
  dealCount: number
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function parsePrice(text: string | number | null | undefined): number | null {
  if (typeof text === 'number') {
    return Number.isNaN(text) ? null : text
  }
  if (!text) return null
  const cleaned = String(text).replace(/[^0-9.]/g, '')
  const parsed = Number.parseFloat(cleaned)
  return Number.isNaN(parsed) ? null : parsed
}

function toNumber(
  value: number | string | null | undefined,
  fallback = 0,
): number {
  if (typeof value === 'number') {
    return Number.isNaN(value) ? fallback : value
  }
  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value.replace(/[^0-9.]/g, ''))
    return Number.isNaN(parsed) ? fallback : parsed
  }
  return fallback
}

export function mapCategory(value?: string | null): TreatmentCategory {
  const normalized = (value ?? '').toLowerCase()
  if (normalized.includes('botox') || normalized.includes('tox')) return 'botox'
  if (normalized.includes('filler')) return 'fillers'
  if (normalized.includes('facial') || normalized.includes('hydrafacial'))
    return 'facials'
  if (normalized.includes('laser') || normalized.includes('ipl'))
    return 'laser'
  if (normalized.includes('body')) return 'body'
  if (normalized.includes('skin')) return 'skincare'
  return 'botox'
}

function categoryLabel(category: TreatmentCategory): string {
  switch (category) {
    case 'botox':
      return 'Botox'
    case 'fillers':
      return 'Fillers'
    case 'facials':
      return 'Facials'
    case 'laser':
      return 'Laser'
    case 'body':
      return 'Body'
    case 'skincare':
      return 'Skincare'
    default:
      return 'Botox'
  }
}

function categoryIcon(category: TreatmentCategory): string {
  switch (category) {
    case 'botox':
      return 'Syringe'
    case 'fillers':
      return 'Drop'
    case 'facials':
      return 'Sparkle'
    case 'laser':
      return 'Lightning'
    case 'body':
      return 'Person'
    case 'skincare':
      return 'Leaf'
    default:
      return 'Syringe'
  }
}

function mapBusiness(row?: BusinessRow | null): Business | null {
  if (!row) return null
  const city = row.city ?? ''
  return {
    id: String(row.business_id),
    name: row.name ?? 'Unknown Provider',
    slug: slugify(row.name ?? `business-${row.business_id}`),
    description: row.category ?? 'Aesthetic provider',
    tier: 'unclaimed',
    status: 'active',
    address: row.address ?? '',
    city,
    state: '',
    zipCode: '',
    locationArea: city,
    latitude: 0,
    longitude: 0,
    phone: '',
    email: '',
    website: row.website ?? undefined,
    logoUrl: undefined,
    coverImageUrl: undefined,
    rating: toNumber(row.score, 0),
    reviewCount: toNumber(row.review_count, 0),
    isVerified: false,
    verifiedAt: undefined,
    claimedBy: undefined,
    claimedAt: undefined,
    createdAt: row.created_at ?? new Date().toISOString(),
    updatedAt: row.updated_at ?? row.created_at ?? new Date().toISOString(),
  }
}

function mapOfferToDeal(
  offer: OfferRow,
  business?: BusinessRow | null,
): { deal: Deal; anonymous: AnonymousDeal; business: Business | null } {
  const category = mapCategory(offer.service_category)
  const originalPrice =
    parsePrice(offer.original_price) ??
    parsePrice(offer.discount_price) ??
    0
  const dealPrice =
    parsePrice(offer.discount_price) ??
    toNumber(offer.delivered_unit, 0)
  const discountPercent =
    toNumber(offer.discount_percent, 0) ||
    (originalPrice > 0 ? Math.round(((originalPrice - dealPrice) / originalPrice) * 100) : 0)
  const businessInfo = mapBusiness(business)
  const locationArea = businessInfo?.city ?? 'Local area'
  const createdAt = offer.created_at ?? new Date().toISOString()

  const deal: Deal = {
    id: String(offer.id),
    businessId: String(offer.business_id ?? ''),
    title:
      offer.service_name ??
      offer.service_category ??
      offer.source_name ??
      'Offer',
    description:
      offer.offer_raw_text ??
      offer.eligibility ??
      'Details available on request.',
    category,
    originalPrice,
    dealPrice,
    discountPercent,
    unit: offer.unit_type ?? 'per session',
    minUnits: offer.min_unit ? Number.parseFloat(offer.min_unit) : undefined,
    maxUnits: undefined,
    validFrom: offer.start_date ?? createdAt,
    validUntil: offer.end_date ?? '',
    termsAndConditions:
      offer.eligibility ??
      'Please contact the provider for terms and conditions.',
    imageUrl: undefined,
    isActive: true,
    isFeatured: false,
    isSponsored: false,
    claimCount: 0,
    viewCount: 0,
    createdAt,
    updatedAt: createdAt,
    moderationStatus: undefined,
    moderationNotes: undefined,
    sourceName: offer.source_name ?? undefined,
    sourceUrl: offer.source_url ?? undefined,
    templateType: offer.template_type ?? undefined,
    serviceName: offer.service_name ?? undefined,
    serviceCategoryRaw: offer.service_category ?? undefined,
    serviceCategorySlug: offer.service_category
      ? slugify(offer.service_category)
      : undefined,
    offerRawText: offer.offer_raw_text ?? undefined,
    eligibility: offer.eligibility ?? undefined,
    originalUnitPrice: offer.original_price ?? undefined,
    discountUnitPrice: offer.discount_price ?? undefined,
  }

  const anonymous: AnonymousDeal = {
    ...deal,
    locationArea,
    businessRating: businessInfo?.rating ?? 0,
    businessReviewCount: businessInfo?.reviewCount ?? 0,
    businessTier: businessInfo?.tier ?? 'unclaimed',
  }

  return { deal, anonymous, business: businessInfo }
}

async function fetchBusinessesByIds(ids: number[]): Promise<Map<number, BusinessRow>> {
  if (ids.length === 0) return new Map()
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('master_business_info')
    .select(
      'business_id,name,address,city,website,review_count,score,category,website_clean,facebook_url,instagram_url,updated_at,created_at',
    )
    .in('business_id', ids)

  if (error) {
    throw new Error(`Failed to load businesses: ${error.message}`)
  }
  const map = new Map<number, BusinessRow>()
  for (const row of (data ?? []) as BusinessRow[]) {
    map.set(row.business_id, row)
  }
  return map
}

export async function getOfferById(id: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select(
      'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at',
    )
    .eq('id', Number(id))
    .limit(1)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load offer: ${error.message}`)
  }
  if (!data) return null
  const offer = data as OfferRow
  const businessMap = await fetchBusinessesByIds(
    offer.business_id ? [offer.business_id] : [],
  )
  const business = offer.business_id
    ? businessMap.get(offer.business_id) ?? null
    : null
  return mapOfferToDeal(offer, business)
}

export async function getOffersByCitySlug(citySlug: string) {
  const city = await getCityBySlug(citySlug)
  if (!city) return []

  const supabase = createSupabaseServerClient()
  const businessIds = await getBusinessIdsForCity(supabase, city.name)

  const offerSelect =
    'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at'

  let offers: OfferRow[] = []
  if (businessIds.length > 0) {
    const { data, error } = await supabase
      .from('promo_offer_master')
      .select(offerSelect)
      .in('business_id', businessIds)
      .order('discount_percent', { ascending: false })
      .limit(200)

    if (error) {
      throw new Error(`Failed to load offers: ${error.message}`)
    }
    offers = (data ?? []) as OfferRow[]
  }

  const businessMap = await fetchBusinessesByIds(businessIds)
  return offers.map((offer) =>
    mapOfferToDeal(
      offer,
      offer.business_id ? businessMap.get(offer.business_id) : null,
    ).anonymous,
  )
}

export async function getOffersByCategoryAndCity(
  category: TreatmentCategory,
  citySlug: string,
) {
  const city = await getCityBySlug(citySlug)
  if (!city) return []

  const supabase = createSupabaseServerClient()
  const businessIds = await getBusinessIdsForCity(supabase, city.name)

  const offerSelect =
    'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at'

  let offers: OfferRow[] = []
  if (businessIds.length > 0) {
    const { data, error } = await supabase
      .from('promo_offer_master')
      .select(offerSelect)
      .in('business_id', businessIds)
      .order('discount_percent', { ascending: false })
      .limit(200)

    if (error) {
      throw new Error(`Failed to load offers: ${error.message}`)
    }
    offers = (data ?? []) as OfferRow[]
  }

  const filtered = offers.filter(
    (offer) => mapCategory(offer.service_category) === category,
  )
  const businessMap = await fetchBusinessesByIds(businessIds)
  return filtered.map((offer) =>
    mapOfferToDeal(
      offer,
      offer.business_id ? businessMap.get(offer.business_id) : null,
    ).anonymous,
  )
}

export async function getOffersByCategory(category: TreatmentCategory) {
  const offers = await getAllActiveOffers()
  return offers.filter((offer) => offer.category === category)
}

export async function getDealsByCategory(category: TreatmentCategory) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select(
      'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at',
    )
    .order('discount_percent', { ascending: false })
    .limit(500)

  if (error) {
    throw new Error(`Failed to load offers: ${error.message}`)
  }

  const offers = (data ?? []) as OfferRow[]
  const filtered = offers.filter(
    (offer) => mapCategory(offer.service_category) === category,
  )
  const businessIds = filtered
    .map((offer) => offer.business_id)
    .filter((id): id is number => typeof id === 'number')
  const businessMap = await fetchBusinessesByIds(businessIds)
  return filtered.map((offer) =>
    mapOfferToDeal(offer, offer.business_id ? businessMap.get(offer.business_id) : null).deal,
  )
}

export async function listCities(): Promise<CityInfo[]> {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('master_business_info')
    .select('city')
    .not('city', 'is', null)
    .limit(5000)

  if (error) {
    throw new Error(`Failed to load cities: ${error.message}`)
  }

  const names = new Set<string>()
  for (const row of data ?? []) {
    const city = (row as { city: string | null }).city
    if (city && city.trim().length > 0) names.add(city.trim())
  }

  return Array.from(names)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, slug: slugify(name) }))
}

export async function listCitiesWithOffers(): Promise<CityInfo[]> {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('master_business_info')
    .select('city,business_id')
    .not('city', 'is', null)
    .limit(10000)

  if (error) {
    throw new Error(`Failed to load cities: ${error.message}`)
  }

  const rows = data ?? []
  const ids = rows
    .map((row) => (row as { business_id: number }).business_id)
    .filter((id) => typeof id === 'number')

  if (ids.length === 0) return []

  const { data: offerRows, error: offerError } = await supabase
    .from('promo_offer_master')
    .select('business_id')
    .in('business_id', ids)

  if (offerError) {
    throw new Error(`Failed to load offers: ${offerError.message}`)
  }

  const hasOffer = new Set(
    (offerRows ?? []).map((row) => (row as { business_id: number }).business_id),
  )

  const names = new Set<string>()
  for (const row of rows) {
    const city = (row as { city: string | null }).city
    const businessId = (row as { business_id: number }).business_id
    if (!city || !hasOffer.has(businessId)) continue
    const name = city.trim()
    if (name) names.add(name)
  }

  return Array.from(names)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, slug: slugify(name) }))
}

export async function getCityBySlug(slug: string): Promise<CityInfo | null> {
  const cities = await listCities()
  return cities.find((city) => city.slug === slug) ?? null
}

export async function listCategories(): Promise<CategoryInfo[]> {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select('service_category')
    .not('service_category', 'is', null)
    .limit(5000)

  if (error) {
    throw new Error(`Failed to load categories: ${error.message}`)
  }

  const counts = new Map<TreatmentCategory, number>()
  for (const row of data ?? []) {
    const value = (row as { service_category: string | null }).service_category
    const mapped = mapCategory(value)
    counts.set(mapped, (counts.get(mapped) ?? 0) + 1)
  }

  return Array.from(counts.entries()).map(([slug, count]) => ({
    name: categoryLabel(slug),
    slug,
    icon: categoryIcon(slug),
    dealCount: count,
  }))
}

export async function getDealCountForCitySlug(citySlug: string) {
  const city = await getCityBySlug(citySlug)
  if (!city) return 0
  const supabase = createSupabaseServerClient()
  const businessIds = await getBusinessIdsForCity(supabase, city.name)

  if (businessIds.length === 0) return 0

  const { count } = await supabase
    .from('promo_offer_master')
    .select('id', { count: 'exact', head: true })
    .in('business_id', businessIds)
  return toNumber(count ?? 0, 0)
}

async function getBusinessIdsForCity(
  supabase: ReturnType<typeof createSupabaseServerClient>,
  cityName: string,
): Promise<number[]> {
  const trimmed = cityName.trim()
  const { data: exact, error: exactError } = await supabase
    .from('master_business_info')
    .select('business_id,city')
    .eq('city', trimmed)

  if (exactError) {
    throw new Error(`Failed to load businesses: ${exactError.message}`)
  }

  let rows = exact ?? []

  if (rows.length === 0) {
    const { data: ilike, error: ilikeError } = await supabase
      .from('master_business_info')
      .select('business_id,city')
      .ilike('city', `${trimmed}%`)
    if (ilikeError) {
      throw new Error(`Failed to load businesses: ${ilikeError.message}`)
    }
    rows = ilike ?? []
  }

  return rows
    .map((row) => (row as { business_id: number }).business_id)
    .filter((id) => typeof id === 'number')
}

export async function getDealCountForTreatmentAndCity(
  category: TreatmentCategory,
  citySlug: string,
) {
  const deals = await getOffersByCategoryAndCity(category, citySlug)
  return deals.length
}

export async function getBusinessCountForCitySlug(citySlug: string) {
  const city = await getCityBySlug(citySlug)
  if (!city) return 0
  const supabase = createSupabaseServerClient()
  const { count } = await supabase
    .from('master_business_info')
    .select('business_id', { count: 'exact', head: true })
    .eq('city', city.name)
  return toNumber(count ?? 0, 0)
}

export async function getTotalBusinessCount() {
  const supabase = createSupabaseServerClient()
  const { count } = await supabase
    .from('master_business_info')
    .select('business_id', { count: 'exact', head: true })
  return toNumber(count ?? 0, 0)
}

export async function getTotalDealCount() {
  const supabase = createSupabaseServerClient()
  const { count } = await supabase
    .from('promo_offer_master')
    .select('id', { count: 'exact', head: true })
  return toNumber(count ?? 0, 0)
}

export async function getMinPriceForCitySlug(citySlug: string) {
  const deals = await getOffersByCitySlug(citySlug)
  if (deals.length === 0) return 0
  return Math.min(...deals.map((deal) => deal.dealPrice))
}

export async function getMinPriceForTreatmentAndCity(
  category: TreatmentCategory,
  citySlug: string,
) {
  const deals = await getOffersByCategoryAndCity(category, citySlug)
  if (deals.length === 0) return 0
  return Math.min(...deals.map((deal) => deal.dealPrice))
}

export async function getAllTreatmentCityCombos() {
  const cities = await listCities()
  const categories = await listCategories()
  const combos: Array<{ treatment: TreatmentCategory; city: string }> = []
  for (const city of cities) {
    for (const category of categories) {
      combos.push({ treatment: category.slug, city: city.slug })
    }
  }
  return combos
}

export async function getAllActiveCitySlugs() {
  const cities = await listCities()
  return cities.map((city) => city.slug)
}

export async function getAllActiveOffers() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select(
      'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at',
    )
    .order('created_at', { ascending: false })
    .limit(500)

  if (error) {
    throw new Error(`Failed to load offers: ${error.message}`)
  }

  const offers = (data ?? []) as OfferRow[]
  const businessIds = offers
    .map((offer) => offer.business_id)
    .filter((id): id is number => typeof id === 'number')
  const businessMap = await fetchBusinessesByIds(businessIds)
  return offers.map((offer) =>
    mapOfferToDeal(offer, offer.business_id ? businessMap.get(offer.business_id) : null).anonymous,
  )
}

export async function getAllOfferIds() {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select('id,created_at')
    .order('created_at', { ascending: false })
    .limit(1000)

  if (error) {
    throw new Error(`Failed to load offer ids: ${error.message}`)
  }

  return (data ?? []).map((row) => ({
    id: String((row as { id: number }).id),
    updatedAt: (row as { created_at: string }).created_at ?? new Date().toISOString(),
  }))
}

export async function getBusinessById(businessId: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('master_business_info')
    .select(
      'business_id,name,address,city,website,review_count,score,category,website_clean,facebook_url,instagram_url,updated_at,created_at',
    )
    .eq('business_id', Number(businessId))
    .limit(1)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to load business: ${error.message}`)
  }
  return mapBusiness((data ?? null) as BusinessRow | null)
}

export async function getBusinessForOffer(dealId: string) {
  const offer = await getOfferById(dealId)
  return offer?.business ?? null
}

export async function listBusinesses(): Promise<Business[]> {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('master_business_info')
    .select(
      'business_id,name,address,city,website,review_count,score,category,website_clean,facebook_url,instagram_url,updated_at,created_at',
    )
    .order('updated_at', { ascending: false })
    .limit(2000)

  if (error) {
    throw new Error(`Failed to load businesses: ${error.message}`)
  }

  return (data ?? [])
    .map((row) => mapBusiness(row as BusinessRow))
    .filter((business): business is Business => Boolean(business))
}

export async function getBusinessBySlug(slug: string) {
  const businesses = await listBusinesses()
  return businesses.find((business) => business.slug === slug) ?? null
}

export async function getOffersForBusiness(businessId: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from('promo_offer_master')
    .select(
      'id,business_id,service_name,service_category,offer_raw_text,start_date,end_date,eligibility,discount_percent,discount_price,original_price,delivered_unit,min_unit,unit_type,service_area,source_name,source_url,template_type,created_at',
    )
    .eq('business_id', Number(businessId))
    .order('discount_percent', { ascending: false })
    .limit(200)

  if (error) {
    throw new Error(`Failed to load offers: ${error.message}`)
  }

  const offers = (data ?? []) as OfferRow[]
  const business = await getBusinessById(businessId)
  return offers.map((offer) => mapOfferToDeal(offer, null).anonymous)
}
