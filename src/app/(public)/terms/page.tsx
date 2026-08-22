import type { Metadata } from 'next'
import Link from 'next/link'
import { buildCanonicalUrl } from '@/lib/seo/metadata'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for using the CostFinders medspa price comparison platform.',
  alternates: {
    canonical: buildCanonicalUrl('/terms'),
  },
}

export default function TermsPage() {
  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#451a03] mb-2">
          Terms of service
        </h1>
        <p className="text-sm text-[#92400e] mb-8">Last updated: August 2026</p>

        <div className="space-y-8 text-[#78350f]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Acceptance of terms
            </h2>
            <p className="text-sm leading-relaxed">
              By using CostFinders, you agree to these terms. If you do not
              agree, please do not use the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              What CostFinders provides
            </h2>
            <p className="text-sm leading-relaxed">
              CostFinders is a comparison and lead-generation platform. We
              display pricing and deal information submitted by medspa
              businesses. We do not provide medical services and are not a
              healthcare provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Pricing and deals
            </h2>
            <p className="text-sm leading-relaxed">
              Listed prices and promotions are provided by businesses and may
              change. Always confirm final pricing, eligibility, and
              availability directly with the provider before booking treatment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Accounts and claims
            </h2>
            <p className="text-sm leading-relaxed">
              You are responsible for keeping your account credentials secure.
              When you claim a deal, you authorize us to share your contact
              information with the business so they can follow up about
              scheduling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Acceptable use
            </h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
              <li>Do not scrape, reverse engineer, or abuse the platform.</li>
              <li>Do not submit false claims or impersonate others.</li>
              <li>Do not use the service for unlawful purposes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Limitation of liability
            </h2>
            <p className="text-sm leading-relaxed">
              CostFinders is provided &quot;as is.&quot; To the fullest extent
              permitted by law, we are not liable for treatment outcomes,
              business conduct, or indirect damages arising from use of the
              platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">Contact</h2>
            <p className="text-sm leading-relaxed">
              Questions about these terms? Email{' '}
              <a
                href="mailto:legal@costfinders.ai"
                className="text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                legal@costfinders.ai
              </a>{' '}
              or review our{' '}
              <Link
                href="/privacy"
                className="text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                privacy policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
