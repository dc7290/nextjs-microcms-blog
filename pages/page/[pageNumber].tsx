import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { BlogListLayout } from '~/src/components/BlogListLayout'
import { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { Head } from '~/src/components/Head'
import { getGlobalContents } from '~/src/utils/microCMS/getContents'

export const getAllPagePaths = async () => {
  const { pager } = await getGlobalContents()
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

  const contents = await getGlobalContents(Number(params.pageNumber))

  return {
    props: { ...contents },
  }
}

const PagingPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head title={props.currentPage ? `${props.currentPage}ページ目の記事一覧` : undefined} />
      <BlogListLayout {...props} />
    </>
  )
}

export default PagingPage
