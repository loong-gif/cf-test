'use client'

import { SignIn } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PublicMobileMenu } from '@/components/layout/publicMobileMenu'
import { buildSignInPath } from '@/lib/auth-redirect'
import { useScrolled } from '@/lib/hooks/useScrolled'
import { PUBLIC_NAV_LINKS } from '@/lib/public-nav-links'

const consumerSignInHref = buildSignInPath('/dashboard')

export function PublicHeader() {
  const pathname = usePathname()
  const scrolled = useScrolled(20)

  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/business/dashboard') ||
    pathname.startsWith('/admin/dashboard')
  ) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[#e8ddd0]/95 backdrop-blur-sm border-b border-[#d4c4b0] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_20px_rgba(69,26,3,0.08)]' : ''}`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.webp"
            alt="CostFinders"
            width={36}
            height={36}
            priority
          />
          <span className="font-bold text-xl text-amber-800">CostFinders</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm font-medium text-[#78350f] md:flex"
        >
          {PUBLIC_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#451a03]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href={consumerSignInHref}
              className="text-sm text-[#78350f] hover:text-[#451a03] transition-colors flex items-center justify-center min-h-[44px] px-3"
            >
              Sign in
            </Link>
            <Link
              href={consumerSignInHref}
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-md bg-amber-800 px-3 py-1.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-amber-700 hover:shadow-[0_0_16px_rgba(146,64,14,0.25)] focus:outline-none focus:ring-2 focus:ring-amber-800/40 focus:ring-offset-2 focus:ring-offset-[#e8ddd0]"
            >
              <SignIn size={18} weight="bold" />
              <span className="hidden sm:inline">Get Started</span>
            </Link>
          </div>
          <PublicMobileMenu
            links={PUBLIC_NAV_LINKS}
            signInAction={
              <Link
                href={consumerSignInHref}
                className="flex-1 text-center text-sm text-[#78350f] hover:text-[#451a03] min-h-[44px] flex items-center justify-center"
              >
                Sign in
              </Link>
            }
            primaryAction={
              <Link
                href={consumerSignInHref}
                className="inline-flex flex-1 min-h-[44px] items-center justify-center gap-2 rounded-md bg-amber-800 px-3 text-sm font-semibold text-white"
              >
                <SignIn size={18} weight="bold" />
                Get Started
              </Link>
            }
          />
        </div>
      </div>
    </header>
  )
}
