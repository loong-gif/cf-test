import { CategoryPreviewCard } from './categoryPreviewCard'
import { getHomepageCategoryPreviews } from '@/lib/supabase/homepage'

export async function CategoryPreviewSection() {
  const categoriesWithDeals = await getHomepageCategoryPreviews()

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">
          Browse by treatment
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {categoriesWithDeals.map(({ category, deals }) => (
          <CategoryPreviewCard
            key={category.id}
            category={category}
            deals={deals}
          />
        ))}
      </div>
    </section>
  )
}
