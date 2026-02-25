import { MapPin, Storefront, Tag } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import { BreadcrumbSchema, FaqSchema } from '@/components/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Faq } from '@/components/ui/faq'
import { RelatedLinks, type RelatedLink } from '@/components/ui/relatedLinks'
import { CityCard } from '@/components/features/cityCard'
import {
  buildCanonicalUrl,
  generateStateMetadata,
  SITE_CONFIG,
} from '@/lib/seo/metadata'
import { getStateFaqs } from '@/lib/seo/faq-content'
import {
  getAllActiveCitySlugs,
  getBusinessCountForCitySlug,
  getDealCountForCitySlug,
  getTotalBusinessCount,
  getTotalDealCount,
  listCategories,
  listCities,
} from '@/lib/supabase/offers'

// Generate static params for all supported states
export async function generateStaticParams() {
  return [{ state: 'all' }]
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ state: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { state: stateSlug } = await params
  const cityCount = (await listCities()).length
  const dealCount = await getTotalDealCount()
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return generateStateMetadata(stateName, cityCount, dealCount)
}

// Page props with Next.js 15 async params
interface StatePageProps {
  params: Promise<{ state: string }>
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params
  const stateName =
    stateSlug === 'all'
      ? 'All Locations'
      : stateSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const cities = await listCities()
  const stats = {
    cityCount: cities.length,
    dealCount: await getTotalDealCount(),
    businessCount: await getTotalBusinessCount(),
  }

  const cityCards = await Promise.all(
    cities.map(async (city) => {
      const citySlug = city.slug
      const dealCount = await getDealCountForCitySlug(citySlug)
      const businessCount = await getBusinessCountForCitySlug(citySlug)
      return { ...city, slug: citySlug, dealCount, businessCount }
    }),
  )

  // Build category links for related treatments section
  const categories = await listCategories()
  const categoryLinks: RelatedLink[] = categories.slice(0, 6).map((cat) => ({
    label: `${cat.name} in ${stateName}`,
    href: `/treatments/${cat.slug}`,
    description: `Browse ${cat.name.toLowerCase()} offers in ${stateName}.`,
  }))

  // Get FAQ content for this state
  const faqItems = getStateFaqs(stateName)

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: stateName, url: buildCanonicalUrl(`/${stateSlug}`) },
  ]

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FaqSchema items={faqItems} />

      <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12">
            {/* Breadcrumb Navigation */}
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: stateName },
              ]}
            />

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <MapPin size={24} weight="fill" className="text-brand-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  Medspa Deals in {stateName}
                </h1>
              </div>

                <p className="text-text-secondary max-w-2xl mb-6">
                  Discover the best medspa deals and aesthetic treatments across{' '}
                {stateName}. Compare prices on Botox, fillers, laser treatments, and
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
              {cityCards.map((city) => (
                <CityCard
                  key={city.slug}
                  name={city.name}
                  slug={city.slug}
                  stateSlug={stateSlug}
                  stateName={stateName}
                  dealCount={city.dealCount}
                  businessCount={city.businessCount}
                />
              ))}
            </div>

            {/* Empty State */}
            {cities.length === 0 && (
              <div className="text-center py-12 bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl">
                <MapPin size={48} weight="light" className="mx-auto text-text-tertiary mb-4" />
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  No Cities Available Yet
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  We&apos;re expanding to more cities in {stateName} soon. Check back
                  later for new locations.
                </p>
              </div>
            )}
          </section>

          {/* Related Treatments */}
          <section className="mt-12">
            <RelatedLinks
              title="Popular Treatments"
              links={categoryLinks}
            />
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <Faq items={faqItems} />
          </section>
        </div>
      </main>
    </>
  )
}
