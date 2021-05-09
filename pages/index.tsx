import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { getContents } from '~/src/utils/getContents'
import { OG_TITLE, returnTitle } from '~/src/utils/meta'

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contents = await getContents()

  return {
    props: { ...contents },
  }
}

const title = returnTitle()

const IndexPage: NextPage<Props> = (props) => {
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

export default IndexPage
