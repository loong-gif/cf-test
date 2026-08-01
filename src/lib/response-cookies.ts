import { NextResponse } from 'next/server'

export function redirectWithResponseCookies(
  destination: URL,
  sourceResponse: NextResponse,
): NextResponse {
  const redirectResponse = NextResponse.redirect(destination)
  for (const cookie of sourceResponse.cookies.getAll()) {
    redirectResponse.cookies.set(cookie)
  }
  return redirectResponse
}
