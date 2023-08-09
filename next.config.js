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
      {
        protocol: 'http',
        hostname: 'thebiblesays.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '13.51.172.229',
        port: '',
        pathname: '**',
      },
    ],
  },
}
