export interface PublicNavLink {
  href: string
  label: string
}

/** Primary marketing navigation links for public headers. */
export const PUBLIC_NAV_LINKS: PublicNavLink[] = [
  { href: '/prices', label: 'Compare prices' },
  { href: '/deals', label: 'Deals' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/businesses', label: 'Businesses' },
]

/** Subset used on authenticated consumer headers (no memberships tab). */
export const CONSUMER_NAV_LINKS: PublicNavLink[] = PUBLIC_NAV_LINKS.filter(
  (link) => link.href !== '/memberships',
)
