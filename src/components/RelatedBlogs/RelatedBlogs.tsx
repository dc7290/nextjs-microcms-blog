import Link from 'next/link'
import React from 'react'

import { Meta } from '~/src/components/Meta'
import { Blog } from '~/src/types/microCMS/api/Blog'

import styles from './RelatedBlogs.module.css'

type ContainerProps = {
  blogs: Blog[]
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ blogs }) => (
  <div>
    <h2 className={styles.pageTitle}>関連記事</h2>
    <ul className={styles.lists}>
      {blogs.map((blog) => (
        <li key="blog.id" className={styles.list}>
          <Link href={`/${blog.id}`}>
            <a>
              <picture>
                <source type="image/webp" srcSet={`${blog.ogimage.url}?w=820&fm=webp`} />
                <img src={`${blog.ogimage.url}?w=820`} className={styles.img} alt="" />
              </picture>
              <dl className={styles.content}>
                <dt className={styles.title}>{blog.title}</dt>
                <dd>
                  <Meta createdAt={blog.createdAt} author={blog.writer.name} category={blog.category} />
                </dd>
              </dl>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
