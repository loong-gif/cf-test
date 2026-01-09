import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For Cloudinary handling + static export readiness
  },
}

export default nextConfig
