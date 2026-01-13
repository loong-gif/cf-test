import { Storefront, Tag } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo'
import { DealCard } from '@/components/features/dealCard'
import { buildCanonicalUrl, SITE_CONFIG } from '@/lib/seo/metadata'
import {
  getAllCategorySlugs,
  getCategoryWithStats,
} from '@/lib/mock-data/categories'
import { getDealsForCategory, toAnonymousDeal } from '@/lib/mock-data/deals'
import {
  Syringe,
  Drop,
  Sparkle,
  Lightning,
  Person,
  Leaf,
} from '@phosphor-icons/react/dist/ssr'

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  Syringe: <Syringe size={24} weight="fill" className="text-brand-primary" />,
  Drop: <Drop size={24} weight="fill" className="text-brand-primary" />,
  Sparkle: <Sparkle size={24} weight="fill" className="text-brand-primary" />,
  Lightning: <Lightning size={24} weight="fill" className="text-brand-primary" />,
  Person: <Person size={24} weight="fill" className="text-brand-primary" />,
  Leaf: <Leaf size={24} weight="fill" className="text-brand-primary" />,
}

// Generate static params for all categories
export async function generateStaticParams() {
  const slugs = getAllCategorySlugs()
  return slugs.map((category) => ({ category }))
}

// Generate metadata for SEO
interface MetadataProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryWithStats(categorySlug)

  if (!category) {
    return {
      title: 'Treatment Not Found | CostFinders',
      description: 'The requested treatment category page could not be found.',
    }
  }

  const title = `${category.name} Deals & Discounts | CostFinders`
  const description = `Compare ${category.dealCount} ${category.name.toLowerCase()} deals from ${category.businessCount} verified providers. ${category.description}`

  return {
    title,
    description,
    alternates: {
      canonical: buildCanonicalUrl(`/treatments/${category.slug}`),
    },
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(`/treatments/${category.slug}`),
      siteName: SITE_CONFIG.name,
      type: 'website',
    },
  }
}

// Page props with Next.js 15 async params
interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getCategoryWithStats(categorySlug)

  if (!category) {
    notFound()
  }

  const deals = getDealsForCategory(categorySlug).map(toAnonymousDeal)
  const CategoryIcon = categoryIcons[category.icon] || (
    <Tag size={24} weight="fill" className="text-brand-primary" />
  )

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Treatments', url: buildCanonicalUrl('/treatments') },
    {
      name: category.name,
      url: buildCanonicalUrl(`/treatments/${category.slug}`),
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
            <nav className="mb-6 text-sm text-text-tertiary">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/treatments"
                    className="hover:text-text-primary transition-colors"
                  >
                    Treatments
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-primary">{category.name}</li>
              </ol>
            </nav>

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  {CategoryIcon}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  {category.name} Deals
                </h1>
              </div>

              <p className="text-text-secondary max-w-2xl mb-6">
                {category.description}. Compare prices from verified medspa
                providers and find the best deals on {category.name.toLowerCase()}{' '}
                treatments near you.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Tag size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {deals.length}
                  </span>
                  <span className="text-text-secondary">Active Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Storefront size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {category.businessCount}
                  </span>
                  <span className="text-text-secondary">Verified Providers</span>
                </div>
              </div>
            </div>
          </section>

          {/* Deals Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Available {category.name} Deals
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
                  No {category.name} Deals Available Yet
                </h3>
                <p className="text-text-secondary max-w-md mx-auto mb-6">
                  We&apos;re working to bring you the best {category.name.toLowerCase()}{' '}
                  deals. Check back soon for new offers from verified providers.
                </p>
                <Link
                  href="/deals"
                  className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors font-medium"
                >
                  <Tag size={18} weight="light" />
                  Browse all deals
                </Link>
              </div>
            )}
          </section>

          {/* Back Navigation */}
          <div className="mt-8 pt-6 border-t border-glass-border">
            <Link
              href="/deals"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Tag size={18} weight="light" />
              Back to all deals
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
