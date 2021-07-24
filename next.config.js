const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

module.exports = withPlugins([[withBundleAnalyzer]], {
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
})
