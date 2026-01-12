'use client'

import {
  User,
  Bell,
  SignOut,
  Trash,
  EnvelopeSimple,
} from '@phosphor-icons/react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProfileForm } from '@/components/features/profileForm'
import { AlertPreferences } from '@/components/features/alertPreferences'
import { useAuth } from '@/lib/context/authContext'

export default function SettingsPage() {
  const { signOut } = useAuth()

  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <Card variant="glass" padding="lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <User size={20} weight="duotone" className="text-brand-primary" />
            </div>
            <div>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card variant="glass" padding="lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Bell size={20} weight="duotone" className="text-green-400" />
            </div>
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Control how CostFinders contacts you about deals and claims
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <AlertPreferences />
        </CardContent>
      </Card>

      {/* Account Section */}
      <Card variant="glass" padding="lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <SignOut size={20} weight="duotone" className="text-red-400" />
            </div>
            <div>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Manage your account settings
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-glass-border">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Sign out
                </p>
                <p className="text-sm text-text-secondary">
                  Sign out of your account on this device
                </p>
              </div>
              <Button variant="secondary" size="sm" onClick={signOut}>
                <SignOut size={16} weight="bold" />
                Sign out
              </Button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Delete account
                </p>
                <p className="text-sm text-text-secondary">
                  Permanently delete your account and all data
                </p>
              </div>
              <button
                type="button"
                className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5"
                onClick={() =>
                  alert('Contact support@costfinders.com to delete your account')
                }
              >
                <EnvelopeSimple size={16} weight="bold" />
                Contact support
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
