import Link from 'next/link'

const footerLinks = [
  { href: '/prices', label: 'Compare prices' },
  { href: '/deals', label: 'Deals' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/business', label: 'For businesses' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d4c4b0] bg-[#f2ebe2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-2">
            <p className="text-lg font-semibold text-amber-800">CostFinders</p>
            <p className="text-sm text-[#78350f]">
              Compare medspa prices and deals from verified providers. Prices
              shown are listed by businesses — confirm final pricing before you
              book.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#78350f] transition-colors hover:text-[#451a03]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-[#92400e]">
          © {year} CostFinders. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
