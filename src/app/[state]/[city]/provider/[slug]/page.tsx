import {
  MapPin,
  Storefront,
  Tag,
  Phone,
  Envelope,
  Globe,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { DealCard } from '@/components/features/dealCard'
import { buildCanonicalUrl, SITE_CONFIG } from '@/lib/seo/metadata'
import {
  getBusinessBySlug,
  getOffersForBusiness,
  listBusinesses,
} from '@/lib/supabase/offers'

// Generate static params for all supported providers
export async function generateStaticParams() {
  const businesses = await listBusinesses()
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  return businesses.map((business) => ({
    state: 'all',
    city: slugify(business.city || 'city'),
    slug: business.slug,
  }))
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ state: string; city: string; slug: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug, slug: providerSlug } = await params
  const provider = await getBusinessBySlug(providerSlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  if (!provider) {
    return {
      title: 'Provider Not Found | CostFinders',
      description: 'The requested provider page could not be found.',
    }
  }

  const deals = await getOffersForBusiness(provider.id)
  const stats = { activeDealCount: deals.length }

  return {
    title: `${provider.name} - Medspa Deals in ${provider.city}, ${stateName} | CostFinders`,
    description: `Compare ${stats.activeDealCount} medspa deals from ${provider.name} in ${provider.city}, ${stateName}. Find exclusive prices on Botox, fillers, facials, and laser treatments.`,
    openGraph: {
      title: `${provider.name} - Medspa Deals | CostFinders`,
      description: `Compare ${stats.activeDealCount} medspa deals from ${provider.name} in ${provider.city}.`,
      type: 'website',
    },
  }
}

// Page props with Next.js 15 async params
interface ProviderPageProps {
  params: Promise<{ state: string; city: string; slug: string }>
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { state: stateSlug, city: citySlug, slug: providerSlug } = await params
  const provider = await getBusinessBySlug(providerSlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  if (!provider) {
    notFound()
  }

  const deals = await getOffersForBusiness(provider.id)
  const stats = { activeDealCount: deals.length }

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: stateName, url: buildCanonicalUrl(`/${stateSlug}`) },
    { name: provider.city, url: buildCanonicalUrl(`/${stateSlug}/${citySlug}`) },
    {
      name: provider.name,
      url: buildCanonicalUrl(
        `/${stateSlug}/${citySlug}/provider/${provider.slug}`
      ),
    },
  ]

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12">
            {/* Breadcrumb Navigation */}
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: stateName, href: `/${stateSlug}` },
                { label: provider.city, href: `/${stateSlug}/${citySlug}` },
                { label: provider.name },
              ]}
            />

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <Storefront size={24} weight="fill" className="text-brand-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                    {provider.name}
                  </h1>
                  {provider.rating && (
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={16} weight="fill" className="text-yellow-400" />
                      <span className="text-text-secondary text-sm">
                        {provider.rating.toFixed(1)} rating
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {provider.description && (
                <p className="text-text-secondary max-w-2xl mb-6">
                  {provider.description}
                </p>
              )}

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Tag size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {stats.activeDealCount}
                  </span>
                  <span className="text-text-secondary">Active Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} weight="light" className="text-brand-primary" />
                  <span className="text-text-secondary">
                    {provider.city}, {stateName}
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-glass-border">
                {provider.phone && (
                  <a
                    href={`tel:${provider.phone}`}
                    className="flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    <Phone size={18} weight="light" />
                    <span>{provider.phone}</span>
                  </a>
                )}
                {provider.email && (
                  <a
                    href={`mailto:${provider.email}`}
                    className="flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    <Envelope size={18} weight="light" />
                    <span>{provider.email}</span>
                  </a>
                )}
                {provider.website && (
                  <a
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    <Globe size={18} weight="light" />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Deals Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Deals from {provider.name}
            </h2>

            {deals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-12 bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl">
                <Tag size={48} weight="light" className="mx-auto text-text-tertiary mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  No Deals Available Yet
                </h3>
                <p className="text-text-secondary max-w-md mx-auto mb-6">
                  We&apos;re working to bring you exclusive deals from{' '}
                  {provider.name}. Check back soon for new offers.
                </p>
                <Link
                  href={`/${stateSlug}/${citySlug}`}
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors font-medium"
                >
                  <MapPin size={18} weight="light" />
                  Browse other providers in {provider.city}
                </Link>
              </div>
            )}
          </section>

          {/* Back Navigation */}
          <div className="mt-8 pt-6 border-t border-glass-border">
            <Link
              href={`/${stateSlug}/${citySlug}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <MapPin size={18} weight="light" />
              Back to {provider.city} providers
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
