const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
})
