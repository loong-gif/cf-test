import { notFound } from 'next/navigation'
import { ClaimBusinessFlow } from '@/components/features/claimBusinessFlow'
import { Card } from '@/components/ui/card'
import { getBusinessById } from '@/lib/supabase/offers'

interface ClaimBusinessPageProps {
  params: Promise<{
    businessId: string
  }>
}

export default async function ClaimBusinessPage({
  params,
}: ClaimBusinessPageProps) {
  const { businessId } = await params
  const business = await getBusinessById(businessId)

  if (!business) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-bg-primary pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-md mx-auto">
        <Card className="p-6 sm:p-8">
          <ClaimBusinessFlow business={business} />
        </Card>
      </div>
    </main>
  )
}
