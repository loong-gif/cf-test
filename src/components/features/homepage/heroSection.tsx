'use client'

import Link from 'next/link'
import { MapPin } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLocation } from '@/lib/context/locationContext'

export function HeroSection() {
  const { state } = useLocation()
  const cityName = state.current.city?.name || 'your area'

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          Find treatments. Save money.
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          Compare verified deals from medspas near you
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-glass-bg border border-glass-border backdrop-blur-sm">
            <MapPin size={18} weight="fill" className="text-brand-primary" />
            <span className="text-sm text-text-primary">{cityName}</span>
          </div>

          <Link href="/deals">
            <Button size="lg">Browse deals</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
