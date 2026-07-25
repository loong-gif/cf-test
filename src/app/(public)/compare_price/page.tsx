import { permanentRedirect } from 'next/navigation'

export default function LegacyComparePricePage() {
  permanentRedirect('/prices')
}
