'use client'

import { useState } from 'react'
import {
  MapPin,
  Phone,
  Globe,
  Star,
  CheckCircle,
} from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Business, Deal } from '@/types'

interface BusinessInfoProps {
  business: Business
  deal: Deal
}

export function BusinessInfo({ business, deal: _deal }: BusinessInfoProps) {
  const [claiming, setClaiming] = useState(false)

  const handleClaim = () => {
    setClaiming(true)
    // Simulate a brief loading state, then show placeholder message
    setTimeout(() => {
      setClaiming(false)
      alert('Claim flow coming in Phase 5')
    }, 300)
  }

  return (
    <Card variant="glass" padding="lg">
      <div className="space-y-4">
        {/* Business Name & Verified Badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-text-primary">
            {business.name}
          </h3>
          {business.tier === 'paid' && (
            <div className="flex items-center gap-1 text-amber-400 shrink-0">
              <CheckCircle size={18} weight="fill" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <Star size={16} weight="fill" className="text-amber-400" />
          <span className="text-sm text-text-secondary">
            {business.rating.toFixed(1)} ({business.reviewCount} reviews)
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 pt-2 border-t border-glass-border">
          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin size={18} className="text-text-muted mt-0.5 shrink-0" />
            <span className="text-sm text-text-secondary">
              {business.address}
              <br />
              {business.city}, {business.state} {business.zipCode}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-text-muted shrink-0" />
            <a
              href={`tel:${business.phone.replace(/\D/g, '')}`}
              className="text-sm text-brand-primary hover:text-brand-secondary transition-colors"
            >
              {business.phone}
            </a>
          </div>

          {/* Website */}
          {business.website && (
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-text-muted shrink-0" />
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-primary hover:text-brand-secondary transition-colors truncate"
              >
                {business.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>

        {/* Claim Button */}
        <Button
          size="lg"
          className="w-full mt-2"
          onClick={handleClaim}
          disabled={claiming}
          type="button"
        >
          {claiming ? 'Processing...' : 'Claim This Deal'}
        </Button>
      </div>
    </Card>
  )
}
