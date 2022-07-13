/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
}
