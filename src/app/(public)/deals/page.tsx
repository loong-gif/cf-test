import { AllDealsPage } from '@/components/features/deals/allDealsPage'
import { getAllDeals } from '@/lib/data/unified'

export const dynamic = 'force-dynamic'

export default async function DealsPage() {
  const deals = await getAllDeals()
  return <AllDealsPage initialDeals={deals} />
}
