/** @type {import('next').NextConfig} */
const nextConfig = {
  //   image: {
  //     domains: ['thebiblesays.com', 'https:/thebiblesays.com'],
  //   },
}

// module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thebiblesays.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
