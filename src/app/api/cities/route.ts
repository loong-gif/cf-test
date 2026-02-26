import { NextResponse } from 'next/server'
import { listCitiesWithOffers } from '@/lib/supabase/offers'

export async function GET() {
  try {
    const cities = await listCitiesWithOffers()
    return NextResponse.json({ cities })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to load cities' },
      { status: 500 },
    )
  }
}
