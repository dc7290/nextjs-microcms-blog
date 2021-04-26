import Link from 'next/link'
import React from 'react'

import { Blog } from '~/src/types/microCMS/api/Blog'

import styles from './PopularArticles.module.css'

type ContainerProps = {
  contents: Blog[]
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ contents }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>人気の記事</h1>
    <ul>
      {contents.map((content) => (
        <li key={content.id} className={styles.list}>
          <Link href={`/${content.id}`}>
            <a className={styles.link}>
              <picture>
                <source type="image/webp" srcSet={`${content.ogimage.url}?w=560&fm=webp`} />
                <img src={`${content.ogimage.url}?w=560&q=100`} className={styles.image} alt="" />
              </picture>
              <p className={styles.title}>{content.title}</p>
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
