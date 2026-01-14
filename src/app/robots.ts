import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.costfinders.ai'

  // Check for production environment (Vercel or standard Node)
  const isProduction =
    process.env.VERCEL_ENV === 'production' ||
    process.env.NODE_ENV === 'production'

  return {
    rules: isProduction
      ? {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/admin/', '/dashboard/', '/business/dashboard/'],
        }
      : {
          // Block all crawlers on preview/staging deployments
          userAgent: '*',
          disallow: '/',
        },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
