import { ConsumerAppShell } from '@/components/layout/consumerAppShell'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <ConsumerAppShell>{children}</ConsumerAppShell>
}
