import { BusinessCtaSection } from '@/components/features/homepage/businessCtaSection'
import { CategoryPreviewSection } from '@/components/features/homepage/categoryPreviewSection'
import { HeroSection } from '@/components/features/homepage/heroSection'
import { ValuePropsSection } from '@/components/features/homepage/valuePropsSection'

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <CategoryPreviewSection />
        <ValuePropsSection />
        <BusinessCtaSection />
      </div>
    </main>
  )
}
