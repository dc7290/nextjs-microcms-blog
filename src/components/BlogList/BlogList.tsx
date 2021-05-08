import Link from 'next/link'
import React from 'react'

import { pagesPath } from '~/lib/$path'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'

import { Meta } from '../Meta'

import styles from './BlogList.module.css'

type ContainerProps =
  | {
      contents: Blog[]
      currentPage: number
      pager: number[]
      selectedCategory?: Category | null
    }
  | {
      contents: Blog[]
      currentPage?: number | null
      pager?: number[] | null
      selectedCategory?: Category | null
    }

export type { ContainerProps as BlogListProps }

type Props = ContainerProps

const Component: React.VFC<Props> = ({ contents, currentPage, pager, selectedCategory }) => (
  <>
    <ul>
      {contents.map((content) => (
        <li key={content.id} className={styles.list}>
          <Link href={pagesPath._slug(content.id).$url()}>
            <a className={styles.link}>
              <picture>
                <source type="image/webp" data-srcset={content.ogimage.url + '?w=670&fm=webp'} />
                <img
                  data-src={content.ogimage.url + '?w=670'}
                  className={'lazyload ' + styles.ogimage}
                  alt="アイキャッチ画像"
                />
              </picture>
              <dl className={styles.content}>
                <dt className={styles.title}>{content.title}</dt>
                <dd>
                  <Meta
                    createdAt={content.publishedAt ?? content.createdAt}
                    author={content.writer !== null ? content.writer.name : ''}
                    category={content.category}
                  />
                </dd>
              </dl>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    {pager && (
      <ul className={styles.pager}>
        {pager.map((page) => (
          <li key={page} className={styles.page} data-is-active={currentPage === page + 1}>
            <Link
              href={
                selectedCategory !== null && selectedCategory !== undefined
                  ? pagesPath.category
                      ._categoryId(selectedCategory.id)
                      .page._pageNumber(page + 1)
                      .$url()
                  : pagesPath.page._pageNumber(page + 1).$url()
              }
            >
              <a>{page + 1}</a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
