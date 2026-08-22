'use client'

import { List, X } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import type { PublicNavLink } from '@/lib/public-nav-links'

interface PublicMobileMenuProps {
  links: PublicNavLink[]
  signInAction?: React.ReactNode
  primaryAction?: React.ReactNode
}

export function PublicMobileMenu({
  links,
  signInAction,
  primaryAction,
}: PublicMobileMenuProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#78350f] transition-colors hover:bg-[#f2ebe2] hover:text-[#451a03]"
        aria-expanded={open}
        aria-controls="public-mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-[#451a03]/20"
            onClick={close}
            aria-label="Close menu"
          />
          <nav
            id="public-mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-[#d4c4b0] bg-[#faf5ee] shadow-lg"
          >
            <ul className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {links.map((link) => {
                const active =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-amber-800/8 text-amber-800'
                          : 'text-[#78350f] hover:bg-[#f2ebe2] hover:text-[#451a03]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {(signInAction || primaryAction) && (
              <div className="flex items-center gap-2 border-t border-[#d4c4b0] px-4 py-3">
                {signInAction}
                {primaryAction}
              </div>
            )}
          </nav>
        </>
      ) : null}
    </div>
  )
}
