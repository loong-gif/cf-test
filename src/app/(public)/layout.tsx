import { PublicHeader } from '@/components/layout/publicHeader'
import { SiteFooter } from '@/components/layout/siteFooter'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PublicHeader />
      {children}
      <SiteFooter />
    </>
  )
}
