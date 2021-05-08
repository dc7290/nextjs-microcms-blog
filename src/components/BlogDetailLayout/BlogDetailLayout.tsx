import React from 'react'

import { Banner } from '~/src/types/microCMS/api/Banner'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'

import { Breadcrumb } from '../Breadcrumb'
import { Conversion } from '../Conversion'
import { Layout } from '../Layout'
import { Meta } from '../Meta'
import { Partner } from '../Partner'
import { Post } from '../Post'
import { RelatedBlogs } from '../RelatedBlogs'
import { Share } from '../Share'
import { Toc } from '../Toc'
import { TocProps } from '../Toc/Toc'
import { Writer } from '../Writer'

import styles from './BlogDetailLayout.module.css'

type ContainerProps = {
  banner: Banner
  categories: Category[]
  content: Blog
  toc: TocProps['toc']
  popularArticles: Blog[]
  latestArticles: Blog[]
}

export type { ContainerProps as BlogDetailLayoutProps }

type Props = ContainerProps

const Component: React.VFC<Props> = ({ content, toc, ...layoutProps }) => (
  <Layout {...layoutProps}>
    <div className={styles.ogimageWrap}>
      <picture>
        <source
          media="(min-width: 1160px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=820&fm=webp, ${content.ogimage.url}?w=1640&fm=webp 2x`}
        />
        <source
          media="(min-width: 820px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=740&fm=webp, ${content.ogimage.url}?w=1480&fm=webp 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=728&fm=webp, ${content.ogimage.url}?w=1456&fm=webp 2x`}
        />
        <source
          media="(max-width: 768px)"
          type="image/webp"
          srcSet={`${content.ogimage.url}?w=375&fm=webp, ${content.ogimage.url}?w=750&fm=webp 2x`}
        />
        <img src={content.ogimage.url + '?w=820&q=100'} className={styles.ogimage} alt="" />
      </picture>
    </div>
    <Breadcrumb category={content.category} />
    <div className={styles.main}>
      <Share id={content.id} title={content.title} />
      <div className={styles.container}>
        <h1 className={styles.title}>{content.title}</h1>
        <Meta
          createdAt={content.publishedAt ?? content.createdAt}
          author={content.writer?.name}
          category={content.category}
        />
        {content.toc_visible && <Toc toc={toc} />}
        <Post body={content.body} />
        {content.writer && <Writer writer={content.writer} />}
        {content.partner && <Partner partner={content.partner} />}
        <Conversion id={content.id} />
        {content.related_blogs.length > 0 && <RelatedBlogs blogs={content.related_blogs} />}
      </div>
    </div>
  </Layout>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
