import type { GetStaticProps, NextPage } from 'next'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { Head } from '~/src/components/Head'
import { getGlobalContents } from '~/src/utils/microCMS/getContents'

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contents = await getGlobalContents()

  return {
    props: { ...contents },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head />
      <BlogListLayout {...props} />
    </>
  )
}

export default IndexPage
