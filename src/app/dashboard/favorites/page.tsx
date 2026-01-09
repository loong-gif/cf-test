'use client'

import Link from 'next/link'
import { Heart, MagnifyingGlass } from '@phosphor-icons/react'
import { useAuth } from '@/lib/context/authContext'
import { getAnonymousDealById } from '@/lib/mock-data'
import { DealCard } from '@/components/features/dealCard'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export default function FavoritesPage() {
  const router = useRouter()
  const { savedDeals } = useAuth()

  // Fetch deal data for each saved ID
  const deals = useMemo(() => {
    return savedDeals
      .map((id) => getAnonymousDealById(id))
      .filter((deal) => deal !== undefined)
  }, [savedDeals])

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <nav className="mb-2">
          <Link
            href="/dashboard"
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Dashboard
          </Link>
          <span className="mx-2 text-text-tertiary">/</span>
          <span className="text-sm text-text-primary">Favorites</span>
        </nav>
        <h1 className="text-2xl font-bold text-text-primary">Saved Deals</h1>
        <p className="text-text-secondary mt-1">
          Deals you&apos;ve saved for later
        </p>
      </div>

      {/* Content */}
      {deals.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-bg-tertiary flex items-center justify-center mb-6">
            <Heart size={40} weight="light" className="text-text-tertiary" />
          </div>
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            No saved deals yet
          </h2>
          <p className="text-text-secondary mb-6 max-w-md">
            Browse deals and tap the heart icon to save them for later.
            Your favorites will appear here.
          </p>
          <Button onClick={() => router.push('/deals')}>
            <MagnifyingGlass size={20} weight="light" className="mr-2" />
            Browse Deals
          </Button>
        </div>
      ) : (
        /* Deals Grid */
        <div>
          <p className="text-sm text-text-tertiary mb-4">
            {deals.length} saved deal{deals.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Link key={deal.id} href={`/deals/${deal.id}`}>
                <DealCard deal={deal} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
