import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { Head } from '~/src/components/Head'
import { getBlogs, getCategories, getGlobalContents, limit } from '~/src/utils/microCMS/getContents'

export const getAllCategoryPagePaths = async () => {
  const { contents: categories } = await getCategories()
  const paths = await Promise.all(
    categories.map((category) =>
      getBlogs({ filters: `category[equals]${category.id}`, limit: 1 }).then(({ totalCount }) => {
        return [...Array(Math.ceil(totalCount / limit)).keys()].map((num) => ({
          params: {
            categoryId: category.id,
            pageNumber: (num + 1).toString(),
          },
        }))
      })
    )
  )

  return paths.flat()
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCategoryPagePaths()

  return {
    paths,
    fallback: false,
  }
}

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (params === undefined || typeof params.pageNumber !== 'string' || typeof params.categoryId !== 'string')
    throw Error('pagesの、ディレクトリ構造かファイル名が間違っています。')

  const contents = await getGlobalContents(Number(params.pageNumber), params.categoryId)

  return {
    props: { ...contents },
  }
}

const PagingPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head
        title={
          props.currentPage ? `${props.selectedCategory?.name ?? ''} ${props.currentPage}ページ目の記事一覧` : undefined
        }
      />
      <BlogListLayout {...props} />
    </>
  )
}

export default PagingPage
