import type { Metadata } from 'next'
import Link from 'next/link'
import { buildCanonicalUrl } from '@/lib/seo/metadata'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How CostFinders collects, uses, and protects your personal information.',
  alternates: {
    canonical: buildCanonicalUrl('/privacy'),
  },
}

export default function PrivacyPage() {
  return (
    <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-amber">
        <h1 className="text-3xl font-bold text-[#451a03] mb-2">
          Privacy policy
        </h1>
        <p className="text-sm text-[#92400e] mb-8">Last updated: August 2026</p>

        <div className="space-y-8 text-[#78350f]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">Overview</h2>
            <p className="text-sm leading-relaxed">
              CostFinders helps you compare medspa prices and claim deals from
              verified providers. This policy explains what information we
              collect, why we collect it, and the choices you have.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              Information we collect
            </h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
              <li>
                Account details such as your name, email address, and city when
                you create an account.
              </li>
              <li>
                Activity on the platform, including saved deals, claims, and
                messages with businesses.
              </li>
              <li>
                Technical data such as device type, browser, and approximate
                usage analytics to improve the product.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">
              How we use your information
            </h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
              <li>To show relevant deals and pricing near you.</li>
              <li>
                To connect you with businesses when you claim a deal or send a
                message.
              </li>
              <li>
                To send account and deal notifications you opt into (email or
                SMS where available).
              </li>
              <li>To keep the platform secure and prevent abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">Sharing</h2>
            <p className="text-sm leading-relaxed">
              When you claim a deal or message a business, we share the contact
              details needed to complete that request with the relevant
              provider. We do not sell your personal information. Service
              providers (such as hosting, analytics, and email delivery) may
              process data on our behalf under contractual safeguards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">Your choices</h2>
            <p className="text-sm leading-relaxed">
              You can update profile and notification preferences in your{' '}
              <Link
                href="/dashboard/settings"
                className="text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                account settings
              </Link>
              . You may request access to or deletion of your account by
              contacting support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#451a03]">Contact</h2>
            <p className="text-sm leading-relaxed">
              Questions about this policy? Email{' '}
              <a
                href="mailto:privacy@costfinders.ai"
                className="text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                privacy@costfinders.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
