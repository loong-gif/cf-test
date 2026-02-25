import { MapPin, Storefront, Tag } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { NeighborhoodCard } from '@/components/features/neighborhoodCard'
import {
  buildCanonicalUrl,
  generateLocationMetadata,
  SITE_CONFIG,
} from '@/lib/seo/metadata'
import {
  getBusinessCountForCitySlug,
  getCityBySlug,
  getDealCountForCitySlug,
  listCities,
} from '@/lib/supabase/offers'

// Generate static params for all supported cities
export async function generateStaticParams() {
  const cities = await listCities()
  return cities.map((city) => ({
    state: 'all',
    city: city.slug,
  }))
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ state: string; city: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params
  const city = await getCityBySlug(citySlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  if (!city) {
    return {
      title: 'City Not Found | CostFinders',
      description: 'The requested city page could not be found.',
    }
  }

  const dealCount = await getDealCountForCitySlug(city.slug)
  return generateLocationMetadata(city.name, stateName, dealCount)
}

// Page props with Next.js 15 async params
interface CityPageProps {
  params: Promise<{ state: string; city: string }>
}

export default async function CityPage({ params }: CityPageProps) {
  const { state: stateSlug, city: citySlug } = await params
  const city = await getCityBySlug(citySlug)
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  if (!city) {
    notFound()
  }

  const neighborhoods: Array<{ id: string; name: string }> = []
  const stats = {
    dealCount: await getDealCountForCitySlug(city.slug),
    businessCount: await getBusinessCountForCitySlug(city.slug),
    neighborhoodCount: neighborhoods.length,
  }

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: stateName, url: buildCanonicalUrl(`/${stateSlug}`) },
    { name: city.name, url: buildCanonicalUrl(`/${stateSlug}/${citySlug}`) },
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
                { label: city.name },
              ]}
            />

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <MapPin size={24} weight="fill" className="text-brand-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  Medspa Deals in {city.name}, {stateName}
                </h1>
              </div>

              <p className="text-text-secondary max-w-2xl mb-6">
                Discover the best medspa deals and aesthetic treatments in{' '}
                {city.name}, {stateName}. Compare prices on Botox, fillers, laser
                treatments, and more from verified providers across{' '}
                {stats.neighborhoodCount}{' '}
                {stats.neighborhoodCount === 1 ? 'neighborhood' : 'neighborhoods'}.
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
                <div className="flex items-center gap-2">
                  <MapPin size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {stats.neighborhoodCount}
                  </span>
                  <span className="text-text-secondary">
                    {stats.neighborhoodCount === 1 ? 'Neighborhood' : 'Neighborhoods'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhoods Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Browse by Neighborhood
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => (
                <NeighborhoodCard
                  key={neighborhood.id}
                  name={neighborhood.name}
                  slug={neighborhood.id}
                  citySlug={citySlug}
                  stateSlug={stateSlug}
                  cityName={city.name}
                  dealCount={0}
                  businessCount={0}
                />
              ))}
            </div>

            {/* Empty State */}
            {neighborhoods.length === 0 && (
              <div className="text-center py-12 bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl">
                <MapPin size={48} weight="light" className="mx-auto text-text-tertiary mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  No Neighborhoods Available Yet
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  We&apos;re expanding to more neighborhoods in {city.name} soon. Check
                  back later for new locations.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}
