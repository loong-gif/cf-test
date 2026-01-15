import Link from 'next/link'
import { Storefront } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/button'

export function BusinessCtaSection() {
  return (
    <section className="py-10 border-t border-glass-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Storefront size={24} weight="light" className="text-text-tertiary shrink-0" />
          <div>
            <p className="text-text-primary font-medium">
              Are you a business owner?
            </p>
            <p className="text-sm text-text-secondary">
              List your medspa and reach new clients
            </p>
          </div>
        </div>
        <Link href="/business">
          <Button variant="secondary" size="sm">
            Learn more
          </Button>
        </Link>
      </div>
    </section>
  )
}
