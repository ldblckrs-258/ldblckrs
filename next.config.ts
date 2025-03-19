import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  output: "export"
}

export default nextConfig
