import type { HomepageCategory, HomepageDealPreview } from '@/types/homepage'
import { createSupabaseServerClient } from './server'

type DealRow = {
  id: number
  business_id: number | null
  service_name: string | null
  service_category: string | null
  discount_percent: number | null
  discount_price: string | null
  original_price: string | null
  delivered_unit: number | null
  unit_type: string | null
  service_area: string | null
  source_name: string | null
  template_type: string | null
}

type CategoryBucket = {
  name: string
  slug: string
  icon: string
  dealCount: number
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

function toText(value: string | null | undefined, fallback: string): string {
  return value && value.length > 0 ? value : fallback
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

function slugifyCategory(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function pickIcon(name: string): string {
  const normalized = name.toLowerCase()
  if (normalized.includes('botox') || normalized.includes('tox')) return 'Syringe'
  if (normalized.includes('filler')) return 'Drop'
  if (normalized.includes('laser') || normalized.includes('ipl')) return 'Lightning'
  if (normalized.includes('facial') || normalized.includes('hydrafacial')) return 'Sparkle'
  if (normalized.includes('skincare')) return 'Leaf'
  if (normalized.includes('body')) return 'Person'
  return 'Sparkle'
}

export async function getHomepageCategoryPreviews(): Promise<
  Array<{ category: HomepageCategory; deals: HomepageDealPreview[] }>
> {
  const supabase = createSupabaseServerClient()

  const { data: categoryRows, error: categoryError } = await supabase
    .from('promo_offer_master')
    .select('service_category,created_at')
    .not('service_category', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1000)

  if (categoryError) {
    throw new Error(`Failed to load categories: ${categoryError.message}`)
  }

  const buckets = new Map<string, CategoryBucket>()
  for (const row of categoryRows ?? []) {
    const rawName = (row as { service_category: string | null }).service_category
    if (!rawName) continue
    const name = rawName.trim()
    if (!name) continue
    const slug = slugifyCategory(name)
    const existing = buckets.get(slug)
    if (existing) {
      existing.dealCount += 1
    } else {
      buckets.set(slug, {
        name,
        slug,
        icon: pickIcon(name),
        dealCount: 1,
      })
    }
  }

  const categories = Array.from(buckets.values()).sort(
    (a, b) => b.dealCount - a.dealCount,
  )

  const previews = await Promise.all(
    categories.map(async (category) => {
      const { data: deals, error: dealError } = await supabase
        .from('promo_offer_master')
        .select(
          'id,business_id,service_name,service_category,discount_percent,discount_price,original_price,delivered_unit,unit_type,source_name,template_type',
        )
        .eq('service_category', category.name)
        .order('discount_percent', { ascending: false })
        .limit(3)

      if (dealError) {
        throw new Error(
          `Failed to load offers for ${category.slug}: ${dealError.message}`,
        )
      }

      const dealRows = (deals ?? []) as DealRow[]
      const businessIds = dealRows
        .map((deal) => deal.business_id)
        .filter((id): id is number => typeof id === 'number')
      const businessMap =
        businessIds.length > 0
          ? await supabase
              .from('master_business_info')
              .select('business_id,city')
              .in('business_id', businessIds)
          : { data: [], error: null }

      if (businessMap.error) {
        throw new Error(
          `Failed to load businesses for ${category.slug}: ${businessMap.error.message}`,
        )
      }

      const cityByBusinessId = new Map<number, string>()
      for (const row of businessMap.data ?? []) {
        const entry = row as { business_id: number; city: string | null }
        if (entry.business_id && entry.city) {
          cityByBusinessId.set(entry.business_id, entry.city)
        }
      }

      const dealPreviews = dealRows.map((deal: DealRow) => {
        const discountPercent = toNumber(deal.discount_percent, 0)
        const originalPrice = parsePrice(deal.original_price) ?? 0
        const discountPrice =
          parsePrice(deal.discount_price) ??
          (originalPrice > 0 ? originalPrice : null)
        const deliveredUnit = toNumber(deal.delivered_unit, 0)
        const resolvedDiscountPrice =
          discountPrice !== null
            ? discountPrice
            : deliveredUnit > 0
              ? deliveredUnit
              : 0

        return {
          id: String(deal.id),
          title: toText(
            deal.service_name ?? deal.service_category ?? deal.source_name,
            category.name,
          ),
          sourceName: toText(deal.source_name, 'Unknown source'),
          templateType: toText(deal.template_type, 'Offer'),
          serviceName: toText(
            deal.service_name ?? deal.service_category,
            category.name,
          ),
          locationArea: toText(
            deal.business_id ? cityByBusinessId.get(deal.business_id) : null,
            'Local area',
          ),
          originalPrice,
          discountPrice: resolvedDiscountPrice,
          discountPercent,
        }
      })

      return {
        category: {
          id: category.slug,
          name: category.name,
          slug: category.slug,
          icon: category.icon,
          dealCount: category.dealCount,
        },
        deals: dealPreviews,
      }
    }),
  )

  return previews
}
