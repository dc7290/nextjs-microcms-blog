import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { apiClient } from '~/src/utils/apiClient'
import { getContents, limit } from '~/src/utils/getContents'
import { headers } from '~/src/utils/microCMSHeaders'

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents: categories } = await apiClient.categories.$get({ headers })
  const [paths] = await Promise.all(
    categories.map((category) =>
      apiClient.blog
        .$get({ headers, query: { filters: `category[equals]${category.id}`, limit: 1 } })
        .then(({ totalCount }) => {
          return [...Array(Math.ceil(totalCount / limit)).keys()].map((num) => ({
            params: {
              categoryId: category.id,
              pageNumber: (num + 1).toString(),
            },
          }))
        })
    )
  )

  return {
    paths,
    fallback: false,
  }
}

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (params === undefined || typeof params.pageNumber !== 'string' || typeof params.categoryId !== 'string')
    throw Error('pagesの、ディレクトリ構造かファイル名が間違っています。')

  const contents = await getContents(Number(params.pageNumber), params.categoryId)

  return {
    props: { ...contents },
  }
}

const PagingPage: NextPage<Props> = (props) => {
  return <BlogListLayout {...props} />
}

export default PagingPage
