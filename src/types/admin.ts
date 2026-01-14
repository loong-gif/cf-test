export type AdminRole = 'super_admin' | 'moderator' | 'support'

export type AdminPermission =
  | 'manage_users'
  | 'manage_businesses'
  | 'manage_deals'
  | 'manage_content'
  | 'manage_admins'
  | 'view_analytics'
  | 'manage_settings'

export interface Admin {
  id: string
  email: string
  firstName: string
  lastName: string
  role: AdminRole
  permissions: AdminPermission[]
  createdAt: string
  updatedAt: string
  lastLoginAt?: string
}
