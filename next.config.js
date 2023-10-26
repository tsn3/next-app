/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages/home'
      },
      {
        source: '/about',
        destination: '/pages/about'
      },
      {
        source: '/contacts',
        destination: '/pages/contacts'
      }
    ]
  },
  // experimental: {
  //   api: {
  //     externalResolver: true,
  //   },
  // }
}

module.exports = nextConfig
