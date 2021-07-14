const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

const config = {
  reactStrictMode: true,
  future: {
    strictPostcssConfiguration: true,
  },
  basePath,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
}

module.exports = process.env.ANALYZE ? withPlugins([[bundleAnalyzer]], config) : config
