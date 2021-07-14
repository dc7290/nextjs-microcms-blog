import { processer, createTableOfContents } from 'microcms-richedit-processer'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { BlogDetailLayout } from '~/src/components/BlogDetailLayout'
import { BlogDetailLayoutProps } from '~/src/components/BlogDetailLayout/BlogDetailLayout'
import { apiClient } from '~/src/utils/apiClient'
import { getContents } from '~/src/utils/getContents'
import { DESCRIPTION, OG_DESCRIPTION, OG_IMAGE, OG_TITLE, returnTitle } from '~/src/utils/meta'
import { headers } from '~/src/utils/microCMSHeaders'

export const getAllSlugPaths = async () => {
  const { contents } = await getContents()
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

  const contents = await getContents()
  const content = await apiClient.blog._slug(params.slug).$get({
    headers,
    query: {
      depth: 2,
      draftKey: preview ? (previewData as { [key: string]: string }).draftKey : undefined,
    },
  })
  const { body, toc } = await processingDom(content.body)
  content.body = body

  return {
    props: { ...contents, content, toc, latestArticles: contents.contents },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  const title = returnTitle(props.content.title)
  const description = props.content.description

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key={OG_TITLE} property={OG_TITLE} content={title} />
        <meta key={DESCRIPTION} name={DESCRIPTION} content={description} />
        <meta key={OG_DESCRIPTION} property={OG_DESCRIPTION} content={description} />
        <meta key={OG_IMAGE} property={OG_IMAGE} content={props.content.ogimage.url} />
      </Head>
      <BlogDetailLayout {...props} />
    </>
  )
}

export default IndexPage
