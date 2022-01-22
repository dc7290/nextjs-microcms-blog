import { MicroCMSListContent, MicroCMSListResponse, MicroCMSObjectContent, MicroCMSQueries } from 'microcms-js-sdk'

import { Author } from '~/src/types/microCMS/Author'
import { Banner } from '~/src/types/microCMS/Banner'
import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'
import { Partner } from '~/src/types/microCMS/Partner'
import { PopularArticles } from '~/src/types/microCMS/PopularArticles'
import { apiClient } from '~/src/utils/microCMS/apiClient'

export const getAuthors = (queries?: MicroCMSQueries) => apiClient.getList<Author>({ endpoint: 'authors', queries })
export const getBanner = (queries?: MicroCMSQueries) => apiClient.getObject<Banner>({ endpoint: 'banner', queries })
export const getBlogs = (queries?: MicroCMSQueries) => apiClient.getList<Blog>({ endpoint: 'blog', queries })
export const getBlog = (queries?: MicroCMSQueries) => (contentId: string) =>
  apiClient.getListDetail<Blog>({ endpoint: 'blog', contentId, queries })
export const getCategories = (queries?: MicroCMSQueries) =>
  apiClient.getList<Category>({ endpoint: 'categories', queries })
export const getPartner = (queries?: MicroCMSQueries) => apiClient.getList<Partner>({ endpoint: 'partners', queries })
export const getPopularArticles = (queries?: MicroCMSQueries) =>
  apiClient.getObject<PopularArticles>({ endpoint: 'popular-articles', queries })

export const limit = 10

type ReturnCommonGetGlobalContentsType = {
  currentPage: number
  contents: MicroCMSListResponse<Blog>['contents']
  pager: number[]
  banner: Banner & MicroCMSObjectContent
  categories: MicroCMSListResponse<Category>['contents']
  popularArticles: MicroCMSListResponse<Blog>['contents']
}

export async function getGlobalContents(currentPage?: number): Promise<
  {
    selectedCategory: null
  } & ReturnCommonGetGlobalContentsType
>

export async function getGlobalContents(
  currentPage: number,
  categoryId: string
): Promise<
  {
    selectedCategory: Category & MicroCMSListContent
  } & ReturnCommonGetGlobalContentsType
>

export async function getGlobalContents(currentPage = 1, categoryId?: string) {
  const filters = categoryId === undefined ? '' : `category[equals]${categoryId}`
  const offset = (currentPage - 1) * limit

  const [{ contents, totalCount }, banner, { contents: categories }, { articles: popularArticles }] = await Promise.all(
    [
      getBlogs({ limit, filters, offset }),
      getBanner(),
      getCategories({ limit: 100, fields: 'id' }),
      getPopularArticles(),
    ]
  )

  const pager = [...Array(Math.ceil(totalCount / limit)).keys()]

  if (categoryId === undefined) {
    return { currentPage, contents, pager, banner, categories, popularArticles, selectedCategory: null }
  }

  const selectedCategory = categories.find((content) => content.id === categoryId)
  if (selectedCategory === undefined) throw Error()

  return { currentPage, contents, pager, banner, categories, popularArticles, selectedCategory }
}
