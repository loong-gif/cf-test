import type { ReactNode } from 'react'
import { BusinessAppShell } from '@/components/layout/businessAppShell'

interface BusinessLayoutProps {
  children: ReactNode
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  return <BusinessAppShell>{children}</BusinessAppShell>
}
