import type { GetStaticProps, NextPage } from 'next'

import BlogListLayout, { BlogListLayoutProps } from '~/src/components/BlogListLayout/BlogListLayout'
import { getContents } from '~/src/utils/getContents'

type Props = BlogListLayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contents = await getContents()

  return {
    props: { ...contents },
  }
}

const IndexPage: NextPage<Props> = (props) => {
  return <BlogListLayout {...props} />
}

export default IndexPage
