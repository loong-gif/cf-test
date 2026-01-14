import { ArrowRight, MapPin, Storefront, Tag } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface NeighborhoodCardProps {
  name: string
  slug: string
  citySlug: string
  stateSlug: string
  cityName: string
  dealCount: number
  businessCount: number
}

/**
 * NeighborhoodCard - Server Component for displaying neighborhood listings on city pages
 * Features glassmorphic styling with hover effects and navigation link
 */
export function NeighborhoodCard({
  name,
  slug,
  citySlug,
  stateSlug,
  cityName,
  dealCount,
  businessCount,
}: NeighborhoodCardProps) {
  return (
    <Link
      href={`/${stateSlug}/${citySlug}/${slug}`}
      className="group bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl p-5 shadow-glass transition-all duration-200 hover:border-glass-border-hover hover:shadow-elevated"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
            <MapPin size={20} weight="light" className="text-brand-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-text-primary group-hover:text-brand-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-text-tertiary">{cityName}</p>
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
          <Storefront size={16} weight="light" className="text-brand-primary" />
          <span>{businessCount} providers</span>
        </div>
      </div>
    </Link>
  )
}
