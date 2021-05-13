import { resolve } from 'path'

import globby from 'globby'
import { resolveConfig, format } from 'prettier'

import { getAllSlugPaths } from '~/pages/[slug]'
import { getAllCategoryPagePaths } from '~/pages/category/[categoryId]/page/[pageNumber]'
import { getAllPagePaths } from '~/pages/page/[pageNumber]'

const generateSitemap = async () => {
  const prettierConfig = await resolveConfig(resolve(__dirname, '.prettierrc.js'))

  const staticPaths = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/**/[*.tsx',
    '!pages/sitemap.xml.tsx',
    '!pages/feed.xml.tsx',
    '!pages/404.tsx',
    '!pages/api',
  ])

  const [allSlugPaths, allCategoryPagePaths, allPagePaths] = await Promise.all([
    getAllSlugPaths(),
    getAllCategoryPagePaths(),
    getAllPagePaths(),
  ])

  const returnUrlXml = (route: string) => `
  <url>
      <loc>${process.env.NEXT_PUBLIC_SITE_URL + route}</loc>
  </url>`

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPaths
              .map((path) => {
                const pathName = path.replace('pages', '').replace('index', '').replace('.tsx', '').replace(/\/$/, '')
                const route = pathName === '/' ? '' : pathName

                return returnUrlXml(route)
              })
              .join('')}
              ${allSlugPaths.map((path) => returnUrlXml(`/${path.params.slug}`)).join('')}
              ${allCategoryPagePaths
                .map((path) => returnUrlXml(`/category/${path.params.categoryId}/page/${path.params.pageNumber}`))
                .join('')}
              ${allPagePaths.map((path) => returnUrlXml(`/page/${path.params.pageNumber}`)).join('')}
        </urlset>
    `

  // If you're not using Prettier, you can remove this.
  const formatted = format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  return formatted
}

export default generateSitemap
