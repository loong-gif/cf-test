'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { MapPin, Spinner } from '@phosphor-icons/react'
import { useLocation } from '@/lib/context/locationContext'
import { Card } from '@/components/ui/card'

/**
 * DealsRedirect - Detects user location and redirects to city deals page
 *
 * Flow:
 * 1. Check if user has a stored/selected city -> redirect immediately
 * 2. Attempt geolocation detection
 * 3. Redirect to detected city or fallback to default
 */
interface DealsRedirectProps {
  defaultCitySlug?: string
  defaultCityName?: string
}

export function DealsRedirect({
  defaultCitySlug,
  defaultCityName,
}: DealsRedirectProps) {
  const router = useRouter()
  const { state: locationState } = useLocation()
  const hasRedirected = useRef(false)
  const fallbackCityName = defaultCityName
  const fallbackCitySlug = defaultCitySlug

  const slugifyCity = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const mapCategory = (value: string) => {
    const normalized = value.toLowerCase()
    if (normalized.includes('botox') || normalized.includes('tox'))
      return 'botox'
    if (normalized.includes('filler')) return 'fillers'
    if (normalized.includes('facial') || normalized.includes('hydrafacial'))
      return 'facials'
    if (normalized.includes('laser') || normalized.includes('ipl'))
      return 'laser'
    if (normalized.includes('body')) return 'body'
    if (normalized.includes('skin')) return 'skincare'
    return 'botox'
  }

  useEffect(() => {
    if (hasRedirected.current) return

    const searchParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : null
    const categoryParam = searchParams?.get('category') ?? ''

    if (
      locationState.current.city &&
      locationState.current.type !== 'default'
    ) {
      const citySlug = slugifyCity(locationState.current.city.name)
      if (categoryParam) {
        router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
      } else {
        router.replace(`/deals/${citySlug}`)
      }
      hasRedirected.current = true
      return
    }

    if (fallbackCitySlug && fallbackCityName) {
      const citySlug = fallbackCitySlug || slugifyCity(fallbackCityName)
      if (categoryParam) {
        router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
      } else {
        router.replace(`/deals/${citySlug}`)
      }
      hasRedirected.current = true
    }
  }, [
    locationState.current.city,
    locationState.current.type,
    fallbackCitySlug,
    fallbackCityName,
    router,
  ])

  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto mt-20">
        <Card variant="glass" padding="lg" className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Spinner
                size={32}
                weight="bold"
                className="text-brand-primary animate-spin"
              />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-text-primary mb-2">
            Redirecting...
          </h1>
          <p className="text-text-secondary">
            Taking you to available deals.
          </p>
        </Card>
      </div>
    </main>
  )
}
