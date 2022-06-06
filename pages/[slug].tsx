import { processer, createTableOfContents } from 'microcms-richedit-processer'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { BlogDetailLayout } from '~/src/components/BlogDetailLayout'
import { BlogDetailLayoutProps } from '~/src/components/BlogDetailLayout/BlogDetailLayout'
import { Head } from '~/src/components/Head'
import { getBlog, getGlobalContents } from '~/src/utils/microCMS/getContents'

export const getAllSlugPaths = async () => {
  const { contents } = await getGlobalContents()
  const paths = contents.map((content) => ({
    params: {
      slug: content.id,
    },
  }))

  return paths
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllSlugPaths()

  return {
    paths,
    fallback: 'blocking',
  }
}

const processingDom = async (htmlString: string) => {
  return {
    body: await processer(htmlString, { code: { enabled: true } }),
    toc: createTableOfContents(htmlString, { tags: 'h1 h2 h3' }),
  }
}

type Props = BlogDetailLayoutProps

export const getStaticProps: GetStaticProps<Props> = async ({ params, preview, previewData }) => {
  if (params === undefined || typeof params.slug !== 'string')
    throw Error('pagesのディレクトリ構造かファイル名が間違っています。')

  const contents = await getGlobalContents()
  const content = await getBlog({
    depth: 2,
    draftKey: preview ? (previewData as { [key: string]: string }).draftKey : undefined,
  })(params.slug)
  const { body, toc } = await processingDom(content.body)
  content.body = body

  return {
    props: { ...contents, content, toc, latestArticles: contents.contents },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head title={props.content.title} description={props.content.description} ogImage={props.content.ogimage.url} />
      <BlogDetailLayout {...props} />
    </>
  )
}

export default IndexPage
