'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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
export function DealsRedirect() {
  const router = useRouter()
  const { state: locationState, detectLocation } = useLocation()
  const [status, setStatus] = useState<'detecting' | 'redirecting' | 'error'>(
    'detecting'
  )
  const fallbackCityName = 'Austin'

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
    async function handleRedirect() {
      try {
        // If user already has a city (from previous session or manual selection)
        const searchParams =
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search)
            : null
        const categoryParam = searchParams?.get('category') ?? ''

        if (
          locationState.current.city &&
          locationState.current.type !== 'default'
        ) {
          setStatus('redirecting')
          const citySlug = slugifyCity(locationState.current.city.name)
          if (categoryParam) {
            router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
          } else {
            router.replace(`/deals/${citySlug}`)
          }
          return
        }

        // Attempt to detect location
        setStatus('detecting')
        await detectLocation()

        // After detection, check again
        if (locationState.current.city) {
          setStatus('redirecting')
          const citySlug = slugifyCity(locationState.current.city.name)
          if (categoryParam) {
            router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
          } else {
            router.replace(`/deals/${citySlug}`)
          }
        } else {
          // Fallback to default city
          setStatus('redirecting')
          const citySlug = slugifyCity(fallbackCityName)
          if (categoryParam) {
            router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
          } else {
            router.replace(`/deals/${citySlug}`)
          }
        }
      } catch {
        // On error, redirect to default city
        setStatus('redirecting')
        const searchParams =
          typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search)
            : null
        const categoryParam = searchParams?.get('category') ?? ''
        const citySlug = slugifyCity(fallbackCityName)
        if (categoryParam) {
          router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
        } else {
          router.replace(`/deals/${citySlug}`)
        }
      }
    }

    handleRedirect()
  }, [locationState.current.city, locationState.current.type, detectLocation, router])

  // Watch for location changes after detection
  useEffect(() => {
    if (
      status === 'detecting' &&
      locationState.current.city &&
      locationState.current.type === 'detected'
    ) {
      const searchParams =
        typeof window !== 'undefined'
          ? new URLSearchParams(window.location.search)
          : null
      const categoryParam = searchParams?.get('category') ?? ''
      setStatus('redirecting')
      const citySlug = slugifyCity(locationState.current.city.name)
      if (categoryParam) {
        router.replace(`/deals/${mapCategory(categoryParam)}/${citySlug}`)
      } else {
        router.replace(`/deals/${citySlug}`)
      }
    }
  }, [locationState.current.city, locationState.current.type, status, router])

  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto mt-20">
        <Card variant="glass" padding="lg" className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
              {status === 'detecting' ? (
                <MapPin
                  size={32}
                  weight="duotone"
                  className="text-brand-primary animate-pulse"
                />
              ) : (
                <Spinner
                  size={32}
                  weight="bold"
                  className="text-brand-primary animate-spin"
                />
              )}
            </div>
          </div>

          <h1 className="text-xl font-semibold text-text-primary mb-2">
            {status === 'detecting'
              ? 'Finding Deals Near You'
              : 'Redirecting...'}
          </h1>

          <p className="text-text-secondary">
            {status === 'detecting'
              ? 'Detecting your location to show nearby medspa deals'
              : `Taking you to deals in ${locationState.current.city?.name || fallbackCityName}`}
          </p>
        </Card>
      </div>
    </main>
  )
}
