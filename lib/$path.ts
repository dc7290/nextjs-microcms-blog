/* eslint-disable */
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
  page: {
    _pageNumber: (pageNumber: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/page/[pageNumber]' as const, query: { pageNumber }, hash: url?.hash })
    })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
