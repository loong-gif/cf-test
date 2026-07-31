import { TrendUp } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSearch } from '@/components/features/homepage/heroSearch'

interface HeroSectionProps {
  categories: { slug: string; label: string; count: number }[]
  totalOffers: number
  totalBusinesses: number
}

function categorySearchTreatment(slug: string): string {
  const treatmentByCategory: Record<string, string> = {
    neurotoxins: 'botox',
    fillers: 'fillers',
    'facials-lasers': 'facials',
    wellness: 'skincare',
    consultations: 'body',
    other: 'other',
  }
  return treatmentByCategory[slug] ?? ''
}

export function HeroSection({
  categories,
  totalOffers,
  totalBusinesses,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/homepage/hero-bg.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#451a03]/75 via-[#451a03]/50 to-[#e8ddd0]"
        aria-hidden="true"
      />

      {/* Content — CSS animations replace JS mounted state (M16) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Stats badge — frosted glass */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-hero-fade-in [animation-delay:0ms]">
            <TrendUp size={16} weight="bold" className="text-amber-300" />
            <span className="text-sm text-white/90 font-medium">
              {totalOffers} deals from {totalBusinesses}{' '}
              {totalBusinesses === 1 ? 'provider' : 'providers'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight animate-hero-fade-in [animation-delay:200ms]">
            Don&apos;t overpay for medspa.{' '}
            <span className="text-amber-300">Compare listed prices</span> from
            local providers.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto animate-hero-fade-in [animation-delay:400ms]">
            See listed prices, provider ratings, and clear savings with no
            hidden platform fees.
          </p>

          {/* Primary task */}
          <div className="animate-hero-fade-in [animation-delay:500ms]">
            <HeroSearch />
          </div>

          {/* Category chips — frosted glass */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 animate-hero-fade-in [animation-delay:700ms]">
            {categories
              .filter((cat) => cat.count >= 2)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/deals?treatment=${categorySearchTreatment(cat.slug)}`}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 hover:bg-white/20 hover:text-white hover:border-white/30 hover:-translate-y-0.5 rounded-full px-4 py-2 min-h-[44px] flex items-center text-sm transition-all duration-200 cursor-pointer"
                >
                  {cat.label}
                  <span className="ml-1.5 text-amber-300/80">{cat.count}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
