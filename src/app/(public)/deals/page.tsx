import { AllDealsPage } from '@/components/features/deals/allDealsPage'
import { SupabaseSetupNotice } from '@/components/features/demo/supabaseSetupNotice'
import { getAllDeals } from '@/lib/data/unified'
import { isSupabaseConfigured } from '@/lib/supabase-config'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function DealsPage() {
  if (!isSupabaseConfigured) {
    return <SupabaseSetupNotice />
  }

  const [deals, viewer] = await Promise.all([getAllDeals(), getDealsViewer()])
  return (
    <AllDealsPage
      initialDeals={deals}
      viewerCity={viewer.city}
      isSignedIn={viewer.isSignedIn}
    />
  )
}

async function getDealsViewer(): Promise<{
  city?: string
  isSignedIn: boolean
}> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { isSignedIn: false }
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('location_city')
    .eq('id', user.id)
    .maybeSingle()
  const city = profile?.location_city?.trim()

  return { city: city || undefined, isSignedIn: true }
}
