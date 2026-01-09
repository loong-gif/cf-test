export type VerificationStatus = 'unverified' | 'email_verified' | 'phone_verified' | 'fully_verified'

export interface Consumer {
  id: string
  email: string
  phone?: string
  firstName?: string
  lastName?: string
  avatarUrl?: string
  // Verification
  verificationStatus: VerificationStatus
  emailVerifiedAt?: string
  phoneVerifiedAt?: string
  // Preferences
  locationCity?: string
  locationState?: string
  alertsEmail: boolean
  alertsSms: boolean
  favoriteCategories: string[]
  // Timestamps
  createdAt: string
  updatedAt: string
  lastLoginAt?: string
}

export interface ConsumerPreferences {
  alertsEmail: boolean
  alertsSms: boolean
  favoriteCategories: string[]
  savedDeals: string[] // deal IDs
}
