/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gateway.ipfscdn.io', 'https://gateway.ipfscdn.io/ipfs/'],
  },
}

module.exports = nextConfig
