import NextHeadSeo from 'next-head-seo'
import React from 'react'

type ContainerProps = {
  title?: string
  description?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

type Props = ContainerProps

export const title = 'microCMSブログ'
export const description = ''

const Component: React.FC<Props> = ({ title: propsTitle, description: propsDescription, ogImage, canonical, noindex = false }) => (
  <NextHeadSeo
    title={propsTitle ? `${propsTitle} | ${title}` : title}
    description={propsDescription ?? description}
    customLinkTags={[
      {
        rel: 'icon',
        href: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`,
      },
    ]}
    og={{
      image: ogImage ?? `${process.env.NEXT_PUBLIC_SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH}/og.png`,
    }}
    twitter={{
      card: 'summary_large_image',
    }}
    robots={noindex ? 'noindex, nofollow' : 'index, follow'}
    canonical={canonical}
  />
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
