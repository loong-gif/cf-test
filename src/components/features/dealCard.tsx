'use client'

import { Lock, MapPin, ShieldCheck, Star } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { BlurredImage } from '@/components/patterns/blurredImage'
import { SaveButton } from '@/components/patterns/saveButton'
import type { AnonymousDeal, TreatmentCategory } from '@/types'
import { formatMoney } from '@/lib/format'

interface DealCardProps {
  deal: AnonymousDeal
  onClick?: () => void
  variant?: 'grid' | 'list'
}

const categoryLabels: Record<TreatmentCategory, string> = {
  botox: 'Botox',
  fillers: 'Fillers',
  facials: 'Facials',
  laser: 'Laser',
  body: 'Body',
  skincare: 'Skincare',
}

export function DealCard({ deal, onClick, variant = 'grid' }: DealCardProps) {
  const isGrid = variant === 'grid'
  const showDiscount =
    deal.originalPrice > 0 && deal.originalPrice !== deal.dealPrice
  const discountAmount = showDiscount
    ? Math.max(0, deal.originalPrice - deal.dealPrice)
    : 0

  return (
    <Card
      variant="glass"
      padding="none"
      hover
      onClick={onClick}
      className={`overflow-hidden ${isGrid ? '' : 'flex'}`}
    >
      {/* Image Section */}
      <div
        className={`
          relative bg-bg-tertiary
          ${isGrid ? 'aspect-[4/3]' : 'w-48 shrink-0 aspect-square'}
        `}
      >
        {/* Blurred Image with Lock Overlay */}
        <BlurredImage
          src={deal.imageUrl}
          alt={deal.title}
          sizes={isGrid ? '(max-width: 768px) 100vw, 33vw' : '192px'}
        />

        {/* Category Badge - Top Left (above blur) */}
        <Badge
          variant="default"
          size="sm"
          className="absolute top-3 left-3 z-10"
        >
          {categoryLabels[deal.category]}
        </Badge>

        {/* Save Button & Discount Badge - Top Right (above blur) */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <SaveButton dealId={deal.id} size="sm" />
          {showDiscount && deal.discountPercent > 0 && (
            <Badge
              variant="default"
              size="sm"
              className="bg-black/40 text-white border-white/20"
            >
              {deal.discountPercent}% OFF
            </Badge>
          )}
          {showDiscount && discountAmount > 0 && (
            <Badge
              variant="default"
              size="sm"
              className="bg-black/40 text-white border-white/20"
            >
              ${formatMoney(discountAmount)} OFF
            </Badge>
          )}
        </div>

        {/* Sponsored Indicator - Bottom Left (above blur) */}
        {deal.isSponsored && (
          <span className="absolute bottom-3 left-3 z-10 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
            Sponsored
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-4 flex flex-col ${isGrid ? '' : 'flex-1'}`}>
        {/* Title */}
        <h3 className="font-semibold text-text-primary line-clamp-2">
          {deal.title}
        </h3>

        {/* Description - List variant only */}
        {!isGrid && (
          <p className="mt-1 text-sm text-text-secondary line-clamp-2">
            {deal.description}
          </p>
        )}

        {/* Pricing */}
        <div className="mt-2 flex items-baseline gap-2 flex-wrap">
          <span className="text-xl font-bold text-brand-primary">
            ${formatMoney(deal.dealPrice)}
          </span>
          {deal.unit && (
            <span className="text-xs text-text-secondary">/ {deal.unit}</span>
          )}
          {showDiscount && (
            <span className="text-xs text-text-tertiary line-through">
              ${formatMoney(deal.originalPrice)}
            </span>
          )}
        </div>

        {/* Location & Rating */}
        <div className="mt-2 flex items-center gap-4 text-sm text-text-secondary">
          <span className="flex items-center gap-1">
            <MapPin size={16} weight="light" className="text-text-tertiary" />
            {deal.locationArea}
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} weight="fill" className="text-amber-400" />
            {deal.businessRating.toFixed(1)}
            <span className="text-text-tertiary">
              ({deal.businessReviewCount})
            </span>
          </span>
        </div>

        {/* Business/Source Section */}
        <div className="mt-3 pt-3 border-t border-glass-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-secondary">
            <ShieldCheck size={16} weight="light" />
            {deal.sourceUrl ? (
              <a
                href={deal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-primary hover:text-text-secondary transition-colors truncate max-w-[180px]"
              >
                {deal.sourceName || 'View source'}
              </a>
            ) : (
              <span className="text-sm">{deal.sourceName || 'Source'}</span>
            )}
          </div>

          {/* Verified Badge for Paid Tier */}
          {deal.businessTier === 'paid' && (
            <Badge
              variant="brand"
              size="sm"
              className="flex items-center gap-1"
            >
              <ShieldCheck size={12} weight="fill" />
              Verified
            </Badge>
          )}
        </div>
      </div>
    </Card>
  )
}
