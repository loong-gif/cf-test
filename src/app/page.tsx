import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import {
  getActiveDeals,
  getActiveCities,
  getFeaturedDeals,
} from '@/lib/mock-data'
import { LocationDisplay } from '@/components/layout/locationDisplay'
import { Card } from '@/components/ui/card'
import { LocationTestSection } from './locationTestSection'

export default function Home() {
  const activeDeals = getActiveDeals()
  const activeCities = getActiveCities()
  const featuredDeals = getFeaturedDeals()

  return (
    <main className="min-h-screen">
      {/* Header Area with Location */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MagnifyingGlass size={24} weight="bold" className="text-brand-primary" />
            <span className="font-semibold text-text-primary">CostFinders</span>
          </div>
          <LocationDisplay />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Find MedSpa Deals Near You
            </h1>
            <p className="text-text-secondary text-lg">
              Compare prices and discover savings on aesthetic treatments
            </p>
          </div>

          {/* Location Test Card */}
          <div className="mb-8">
            <Card className="max-w-md mx-auto">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Location Selector Test
              </h2>
              <LocationTestSection />
            </Card>
          </div>

          {/* Mock Data Stats */}
          <Card className="max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Mock Data Test
            </h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                Active deals: <strong className="text-text-primary">{activeDeals.length}</strong>
              </li>
              <li>
                Active cities: <strong className="text-text-primary">{activeCities.length}</strong>
              </li>
              <li>
                Featured deals: <strong className="text-text-primary">{featuredDeals.length}</strong>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </main>
  )
}
