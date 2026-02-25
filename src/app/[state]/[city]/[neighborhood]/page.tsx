import { MapPin, Storefront, Tag } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { DealCard } from '@/components/features/dealCard'
import {
  buildCanonicalUrl,
  generateLocationMetadata,
  SITE_CONFIG,
} from '@/lib/seo/metadata'
import { getCityBySlug } from '@/lib/supabase/offers'

// Generate static params for all supported neighborhoods
export async function generateStaticParams() {
  return []
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ state: string; city: string; neighborhood: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params
  const city = await getCityBySlug(citySlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const neighborhoodName = neighborhoodSlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  if (!city) {
    return {
      title: 'Neighborhood Not Found | CostFinders',
      description: 'The requested neighborhood page could not be found.',
    }
  }

  return {
    ...generateLocationMetadata(city.name, stateName, 0),
    title: `Medspa Deals in ${neighborhoodName}, ${city.name} | CostFinders`,
    description: `Explore medspa deals in ${neighborhoodName}, ${city.name}, ${stateName}.`,
  }
}

// Page props with Next.js 15 async params
interface NeighborhoodPageProps {
  params: Promise<{ state: string; city: string; neighborhood: string }>
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { state: stateSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params
  const city = await getCityBySlug(citySlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const neighborhoodName = neighborhoodSlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  if (!city) {
    notFound()
  }

  const stats = { dealCount: 0, businessCount: 0 }
  const deals: Array<import('@/types').AnonymousDeal> = []

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: stateName, url: buildCanonicalUrl(`/${stateSlug}`) },
    { name: city.name, url: buildCanonicalUrl(`/${stateSlug}/${citySlug}`) },
    {
      name: neighborhoodName,
      url: buildCanonicalUrl(`/${stateSlug}/${citySlug}/${neighborhoodSlug}`),
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
                { label: city.name, href: `/${stateSlug}/${citySlug}` },
                { label: neighborhoodName },
              ]}
            />

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <MapPin size={24} weight="fill" className="text-brand-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  Medspa Deals in {neighborhoodName}
                </h1>
              </div>

              <p className="text-text-secondary max-w-2xl mb-6">
                Browse exclusive medspa deals and aesthetic treatments in{' '}
                {neighborhoodName}, {city.name}. Compare prices on Botox, fillers,
                laser treatments, and facials from trusted local providers.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Tag size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {stats.dealCount}
                  </span>
                  <span className="text-text-secondary">Active Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Storefront size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {stats.businessCount}
                  </span>
                  <span className="text-text-secondary">Verified Providers</span>
                </div>
              </div>
            </div>
          </section>

          {/* Deals Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Available Deals in {neighborhoodName}
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
                  We&apos;re working to bring you the best medspa deals in{' '}
                  {neighborhoodName}. Check back soon for new offers.
                </p>
                <Link
                  href={`/${stateSlug}/${citySlug}`}
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors font-medium"
                >
                  <MapPin size={18} weight="light" />
                  Browse other neighborhoods in {city.name}
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
              Back to {city.name} neighborhoods
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
