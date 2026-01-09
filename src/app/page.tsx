import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import {
  getActiveDeals,
  getActiveCities,
  getFeaturedDeals,
} from '@/lib/mock-data'

export default function Home() {
  const activeDeals = getActiveDeals()
  const activeCities = getActiveCities()
  const featuredDeals = getFeaturedDeals()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <MagnifyingGlass size={48} weight="light" className="text-[#FF6D00]" />
      <h1 className="text-4xl font-bold">CostFinders</h1>
      <p className="text-[var(--color-text-secondary)]">
        Find and compare medspa pricing in your area
      </p>

      {/* Mock Data Test */}
      <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-secondary)] p-6">
        <h2 className="mb-4 text-lg font-semibold">Mock Data Test</h2>
        <ul className="space-y-2 text-sm">
          <li>
            Active deals: <strong>{activeDeals.length}</strong>
          </li>
          <li>
            Active cities: <strong>{activeCities.length}</strong>
          </li>
          <li>
            Featured deals: <strong>{featuredDeals.length}</strong>
          </li>
        </ul>
      </div>
    </main>
  )
}
