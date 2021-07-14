/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  _slug: (slug: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[slug]' as const, query: { slug }, hash: url?.hash })
  }),
  category: {
    _categoryId: (categoryId: string | number) => ({
      page: {
        _pageNumber: (pageNumber: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/category/[categoryId]/page/[pageNumber]' as const, query: { categoryId, pageNumber }, hash: url?.hash })
        })
      }
    })
  },
  feed_xml: {
    $url: (url?: { hash?: string }) => ({ pathname: '/feed.xml' as const, hash: url?.hash })
  },
  page: {
    _pageNumber: (pageNumber: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/page/[pageNumber]' as const, query: { pageNumber }, hash: url?.hash })
    })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  sitemap_xml: {
    $url: (url?: { hash?: string }) => ({ pathname: '/sitemap.xml' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
