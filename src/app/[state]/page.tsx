import { MapPin, Storefront, Tag, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo'
import {
  buildCanonicalUrl,
  generateStateMetadata,
  SITE_CONFIG,
} from '@/lib/seo/metadata'
import {
  getStates,
  getStateBySlug,
  getCitiesForState,
  getStateStats,
  slugifyCity,
} from '@/lib/mock-data/states'
import {
  getDealCountForCity,
  getBusinessCountForCity,
} from '@/lib/mock-data/locations'

// Generate static params for all supported states
export async function generateStaticParams() {
  const states = getStates()
  return states.map((state) => ({ state: state.slug }))
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ state: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { state: stateSlug } = await params
  const state = getStateBySlug(stateSlug)

  if (!state) {
    return {
      title: 'State Not Found | CostFinders',
      description: 'The requested state page could not be found.',
    }
  }

  const stats = getStateStats(state.code)
  return generateStateMetadata(state.name, stats.cityCount, stats.dealCount)
}

// Page props with Next.js 15 async params
interface StatePageProps {
  params: Promise<{ state: string }>
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params
  const state = getStateBySlug(stateSlug)

  if (!state) {
    notFound()
  }

  const cities = getCitiesForState(state.code)
  const stats = getStateStats(state.code)

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: state.name, url: buildCanonicalUrl(`/${state.slug}`) },
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
            <nav className="mb-6 text-sm text-text-tertiary">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-primary">{state.name}</li>
              </ol>
            </nav>

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <MapPin size={24} weight="fill" className="text-brand-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  Medspa Deals in {state.name}
                </h1>
              </div>

              <p className="text-text-secondary max-w-2xl mb-6">
                Discover the best medspa deals and aesthetic treatments across{' '}
                {state.name}. Compare prices on Botox, fillers, laser treatments, and
                more from verified providers in {stats.cityCount}{' '}
                {stats.cityCount === 1 ? 'city' : 'cities'}.
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
                    {stats.cityCount}
                  </span>
                  <span className="text-text-secondary">
                    {stats.cityCount === 1 ? 'City' : 'Cities'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Cities Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Browse by City
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => {
                const citySlug = slugifyCity(city.name)
                const dealCount = getDealCountForCity(city.id)
                const businessCount = getBusinessCountForCity(city.id)

                return (
                  <Link
                    key={city.id}
                    href={`/${state.slug}/${citySlug}`}
                    className="group bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl p-5 shadow-glass transition-all duration-200 hover:border-glass-border-hover hover:shadow-elevated"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                          <MapPin
                            size={20}
                            weight="light"
                            className="text-brand-primary"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-text-primary group-hover:text-brand-primary transition-colors">
                            {city.name}
                          </h3>
                          <p className="text-sm text-text-tertiary">{state.name}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={20}
                        weight="light"
                        className="text-text-tertiary group-hover:text-brand-primary group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    {/* Stats */}
                    <div className="mt-4 pt-4 border-t border-glass-border flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <Tag size={16} weight="light" className="text-brand-primary" />
                        <span>{dealCount} deals</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <Storefront
                          size={16}
                          weight="light"
                          className="text-brand-primary"
                        />
                        <span>{businessCount} providers</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Empty State */}
            {cities.length === 0 && (
              <div className="text-center py-12 bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl">
                <MapPin size={48} weight="light" className="mx-auto text-text-tertiary mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  No Cities Available Yet
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  We&apos;re expanding to more cities in {state.name} soon. Check back
                  later for new locations.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}
