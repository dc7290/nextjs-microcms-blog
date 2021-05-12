import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { getContents } from '~/src/utils/getContents'
import { OG_TITLE, returnTitle } from '~/src/utils/meta'

export const getAllPagePaths = async () => {
  const { pager } = await getContents()
  const paths = pager.map((pageNumber) => ({
    params: {
      pageNumber: (pageNumber + 1).toString(),
    },
  }))

  return paths
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPagePaths()

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
  const title = returnTitle(props.currentPage ? `${props.currentPage}ページ目の記事一覧` : undefined)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key={OG_TITLE} property={OG_TITLE} content={title} />
      </Head>
      <BlogListLayout {...props} />
    </>
  )
}

export default PagingPage
