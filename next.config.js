const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const bundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        imagesPublicPath: `${basePath}/_next/static/images/`,
        imagesName: '[name][contenthash].[ext]',
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
    [bundleAnalyzer],
  ],
  {
    reactStrictMode: true,
    future: {
      webpack5: true,
      strictPostcssConfiguration: true,
    },
    basePath,
    trailingSlash: true,
  }
)
