'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  House,
  Tag,
  Users,
  Buildings,
  FolderSimple,
  ChartBar,
  Database,
  Gear,
  SignOut,
} from '@phosphor-icons/react'
import { useAdminAuth } from '@/lib/context/adminAuthContext'
import { Tooltip } from '@/components/ui/tooltip'

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ size?: number; weight?: 'light' | 'fill' }>
}

const navItems: NavItem[] = [
  { href: '/admin/dashboard', label: 'Home', icon: House },
  { href: '/admin/dashboard/deals', label: 'Deals', icon: Tag },
  { href: '/admin/dashboard/users', label: 'Users', icon: Users },
  { href: '/admin/dashboard/businesses', label: 'Businesses', icon: Buildings },
  { href: '/admin/dashboard/content', label: 'Content', icon: FolderSimple },
  { href: '/admin/dashboard/reports', label: 'Reports', icon: ChartBar },
  { href: '/admin/dashboard/data', label: 'Data', icon: Database },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: Gear },
]

export function AdminDashboardSidebar() {
  const pathname = usePathname()
  const { state, signOut } = useAdminAuth()
  const admin = state.admin

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === '/admin/dashboard'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Sidebar - Icon Only */}
      <aside className="hidden md:flex fixed left-0 top-20 bottom-0 w-16 flex-col items-center bg-glass-bg backdrop-blur-xl border-r border-white/10 z-40">
        {/* Navigation */}
        <nav className="flex-1 py-4 space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.href)
            const Icon = item.icon
            return (
              <Tooltip key={item.href} content={item.label} side="right">
                <Link
                  href={item.href}
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-xl
                    transition-all duration-200
                    ${
                      active
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-text-secondary hover:bg-glass-bg-hover hover:text-text-primary'
                    }
                  `}
                >
                  <Icon size={24} weight={active ? 'fill' : 'light'} />
                </Link>
              </Tooltip>
            )
          })}
        </nav>

        {/* User Section */}
        <div className="py-4 border-t border-white/10 space-y-2">
          {/* Avatar */}
          <Tooltip content={admin?.firstName ? `${admin.firstName} ${admin.lastName}` : admin?.email || 'Admin'} side="right">
            <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto cursor-default">
              <span className="text-sm font-semibold text-brand-primary">
                {admin?.firstName?.[0]?.toUpperCase() ||
                  admin?.email?.[0]?.toUpperCase() ||
                  'A'}
              </span>
            </div>
          </Tooltip>

          {/* Sign Out */}
          <Tooltip content="Sign Out" side="right">
            <button
              type="button"
              onClick={signOut}
              className="flex items-center justify-center w-12 h-12 rounded-xl text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover transition-all duration-200 mx-auto"
            >
              <SignOut size={24} weight="light" />
            </button>
          </Tooltip>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-glass-bg backdrop-blur-xl border-t border-white/10 z-50">
        <div className="flex items-center justify-around py-2">
          {/* Show only first 5 items on mobile */}
          {navItems.slice(0, 5).map((item) => {
            const active = isActive(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1 px-3 py-2 rounded-xl
                  transition-all duration-200
                  ${
                    active
                      ? 'text-brand-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                <Icon size={24} weight={active ? 'fill' : 'light'} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
