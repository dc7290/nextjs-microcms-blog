import Link from 'next/link'
import React from 'react'

import { Blog } from '~/src/types/microCMS/api/Blog'

import styles from './Latest.module.css'

type ContainerProps = {
  contents: Blog[]
}
type Props = ContainerProps

const Component: React.FC<Props> = ({ contents }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>最新の記事</h1>
    <ul>
      {contents.map((content) => (
        <li key={content.id} className={styles.list}>
          <Link href={`/${content.id}`}>
            <a className={styles.link}>{content.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
