export const DEFAULT_DASHBOARD_PATH = '/dashboard'
const LOCAL_REDIRECT_ORIGIN = 'https://costfinders.local'

export function safeDashboardPath(value: string | null): string | null {
  if (!value) return null

  try {
    const url = new URL(value, LOCAL_REDIRECT_ORIGIN)
    const isLocal = url.origin === LOCAL_REDIRECT_ORIGIN
    const isDashboard =
      url.pathname === '/dashboard' || url.pathname.startsWith('/dashboard/')

    if (!isLocal || !isDashboard) return null
    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    return null
  }
}

export function dashboardPathOrDefault(value: string | null): string {
  return safeDashboardPath(value) ?? DEFAULT_DASHBOARD_PATH
}

export function buildSignInPath(next: string | null): string {
  const destination = dashboardPathOrDefault(next)
  return `/sign-in?next=${encodeURIComponent(destination)}`
}

export function buildRequestSignInPath(
  pathname: string,
  search: string,
): string {
  return buildSignInPath(`${pathname}${search}`)
}

export function legacySignInPath(
  pathname: string,
  signin: string | null,
  next: string | null,
): string | null {
  if (pathname !== '/' || signin !== 'required') return null
  return buildSignInPath(next)
}

export function replaceWithDashboard(
  replace: (href: string) => void,
  next: string | null,
): string {
  const destination = dashboardPathOrDefault(next)
  replace(destination)
  return destination
}
