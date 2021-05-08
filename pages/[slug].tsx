import hljs from 'highlight.js'
import { JSDOM } from 'jsdom'
import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'

import { BlogDetailLayout } from '~/src/components/BlogDetailLayout'
import { BlogDetailLayoutProps } from '~/src/components/BlogDetailLayout/BlogDetailLayout'
import { apiClient } from '~/src/utils/apiClient'
import { getContents } from '~/src/utils/getContents'
import { headers } from '~/src/utils/microCMSHeaders'

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await getContents()
  const paths: GetStaticPathsResult['paths'] = contents.map((content) => ({
    params: {
      slug: content.id,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

const processingDom = (htmlString: string) => {
  const dom = new JSDOM(htmlString)
  const toc: BlogDetailLayoutProps['toc'] = []
  dom.window.document.querySelectorAll('h1, h2, h3').forEach((heading) => {
    toc.push({
      id: heading.id,
      name: heading.tagName,
      text: heading.textContent ?? '',
    })
  })
  dom.window.document.querySelectorAll('pre code').forEach((element) => {
    const res = hljs.highlightAuto(element.textContent ?? '')
    element.innerHTML = res.value
    element.classList.add('hljs')
  })
  dom.window.document.querySelectorAll('img').forEach((element) => {
    element.classList.add('lazyload')
    element.setAttribute('data-src', element.src)
    element.src = ''
  })

  return { toc }
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
      draftKey: preview ? previewData.draftKey : undefined,
    },
  })
  const { toc } = processingDom(content.body)

  return {
    props: { ...contents, content, toc, latestArticles: contents.contents },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  return <BlogDetailLayout {...props} />
}

export default IndexPage
