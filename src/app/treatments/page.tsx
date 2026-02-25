import {
  ArrowRight,
  Sparkle,
  Tag,
  Storefront,
  Syringe,
  Drop,
  Lightning,
  Person,
  Leaf,
} from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { buildCanonicalUrl, SITE_CONFIG } from '@/lib/seo/metadata'
import type { CategoryInfo } from '@/lib/supabase/offers'
import { listCategories } from '@/lib/supabase/offers'

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  Syringe: <Syringe size={24} weight="fill" className="text-brand-primary" />,
  Drop: <Drop size={24} weight="fill" className="text-brand-primary" />,
  Sparkle: <Sparkle size={24} weight="fill" className="text-brand-primary" />,
  Lightning: <Lightning size={24} weight="fill" className="text-brand-primary" />,
  Person: <Person size={24} weight="fill" className="text-brand-primary" />,
  Leaf: <Leaf size={24} weight="fill" className="text-brand-primary" />,
}

// Static metadata for SEO
export const metadata: Metadata = {
  title: 'Browse Aesthetic Treatments | CostFinders',
  description:
    'Explore aesthetic treatment categories including Botox, fillers, facials, laser treatments, body contouring, and skincare. Compare deals from verified medspa providers.',
  alternates: {
    canonical: buildCanonicalUrl('/treatments'),
  },
  openGraph: {
    title: 'Browse Aesthetic Treatments | CostFinders',
    description:
      'Explore aesthetic treatment categories including Botox, fillers, facials, laser treatments, body contouring, and skincare.',
    url: buildCanonicalUrl('/treatments'),
    siteName: SITE_CONFIG.name,
    type: 'website',
  },
}

// Category card component
function categoryDescription(name: string) {
  return `Browse ${name.toLowerCase()} offers and compare prices from providers.`
}

function CategoryCard({ category }: { category: CategoryInfo }) {
  const icon = categoryIcons[category.icon] || (
    <Tag size={24} weight="fill" className="text-brand-primary" />
  )

  return (
    <Link
      href={`/treatments/${category.slug}`}
      className="group bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl p-5 shadow-glass transition-all duration-200 hover:border-glass-border-hover hover:shadow-elevated"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-text-primary group-hover:text-brand-primary transition-colors">
              {category.name}
            </h3>
          </div>
        </div>
        <ArrowRight
          size={20}
          weight="light"
          className="text-text-tertiary group-hover:text-brand-primary group-hover:translate-x-1 transition-all"
        />
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-text-secondary line-clamp-2">
        {categoryDescription(category.name)}
      </p>

      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-glass-border flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-text-secondary">
          <Tag size={16} weight="light" className="text-brand-primary" />
          <span>{category.dealCount} deals</span>
        </div>
        <div className="flex items-center gap-1.5 text-text-secondary">
          <Storefront size={16} weight="light" className="text-brand-primary" />
          <span>{Math.ceil(category.dealCount / 2)} providers</span>
        </div>
      </div>
    </Link>
  )
}

export default async function TreatmentsPage() {
  const categories = await listCategories()

  // Build breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Treatments', url: buildCanonicalUrl('/treatments') },
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
              items={[{ label: 'Home', href: '/' }, { label: 'Treatments' }]}
            />

            {/* Hero Content */}
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-8 shadow-glass">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <Sparkle size={24} weight="fill" className="text-brand-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                  Browse Treatments
                </h1>
              </div>

              <p className="text-text-secondary max-w-2xl mb-6">
                Explore our curated categories of aesthetic treatments. Compare prices
                from verified medspa providers and find the best deals near you.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Tag size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {categories.reduce((sum, c) => sum + c.dealCount, 0)}
                  </span>
                  <span className="text-text-secondary">Total Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Storefront size={20} weight="light" className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">
                    {categories.length}
                  </span>
                  <span className="text-text-secondary">Treatment Categories</span>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Treatment Categories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </section>

          {/* Browse All Deals CTA */}
          <section className="mt-12">
            <div className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-2xl p-6 shadow-glass text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Looking for something specific?
              </h3>
              <p className="text-text-secondary mb-4">
                Browse all available deals and filter by location, price, and more.
              </p>
              <Link
                href="/deals"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-colors"
              >
                <Tag size={20} weight="light" />
                Browse All Deals
              </Link>
            </div>
          </section>

          {/* Back Navigation */}
          <div className="mt-8 pt-6 border-t border-glass-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowRight size={18} weight="light" className="rotate-180" />
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
