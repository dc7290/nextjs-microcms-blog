import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { getContents } from '~/src/utils/getContents'

export const getStaticPaths: GetStaticPaths = async () => {
  const { pager } = await getContents()
  const paths = pager.map((pageNumber) => ({
    params: {
      pageNumber: (pageNumber + 1).toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (params === undefined || typeof params.pageNumber !== 'string')
    throw Error('pagesのディレクトリ構造かファイル名が間違っています。')

  const contents = await getContents(Number(params.pageNumber))

  return {
    props: { ...contents },
  }
}

const PagingPage: NextPage<Props> = (props) => {
  return <BlogListLayout {...props} />
}

export default PagingPage
