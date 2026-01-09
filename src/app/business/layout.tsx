import type { ReactNode } from 'react'

interface BusinessLayoutProps {
  children: ReactNode
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  // BusinessAuthProvider will be added in Plan 06-02
  return <>{children}</>
}
