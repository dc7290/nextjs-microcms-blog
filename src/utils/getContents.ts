import { Banner } from '../types/microCMS/api/Banner'
import { Blog } from '../types/microCMS/api/Blog'
import { Category } from '../types/microCMS/api/Category'

import { apiClient } from './apiClient'
import { headers } from './microCMSHeaders'

export const limit = 10

export async function getContents(): Promise<{
  currentPage: number
  contents: Blog[]
  pager: number[]
  banner: Banner
  categories: Category[]
  popularArticles: Blog[]
  selectedCategory: null
}>

export async function getContents(
  currentPage: number
): Promise<{
  currentPage: number
  contents: Blog[]
  pager: number[]
  banner: Banner
  categories: Category[]
  popularArticles: Blog[]
  selectedCategory: null
}>

export async function getContents(
  currentPage: number,
  categoryId: string
): Promise<{
  currentPage: number
  contents: Blog[]
  pager: number[]
  banner: Banner
  categories: Category[]
  popularArticles: Blog[]
  selectedCategory: Category
}>

export async function getContents(currentPage = 1, categoryId?: string) {
  const filters = categoryId === undefined ? '' : `category[equals]${categoryId}`
  const offset = (currentPage - 1) * limit

  const [
    { contents, totalCount },
    banner,
    { contents: categories },
    { articles: popularArticles },
  ] = await Promise.all([
    apiClient.blog.$get({ headers, query: { limit, filters, offset } }),
    apiClient.banner.$get({ headers }),
    apiClient.categories.$get({ headers, query: { limit: 100 } }),
    apiClient.popular_articles.$get({ headers }),
  ])

  const pager = [...Array(Math.ceil(totalCount / limit)).keys()]

  if (categoryId === undefined) {
    return { currentPage, contents, pager, banner, categories, popularArticles, selectedCategory: null }
  }

  const selectedCategory = categories.find((content) => content.id === categoryId)
  if (selectedCategory === undefined) throw Error()

  return { currentPage, contents, pager, banner, categories, popularArticles, selectedCategory }
}
