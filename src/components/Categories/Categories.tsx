import Link from 'next/link'
import React from 'react'

import { Category } from '~/src/types/microCMS/api/Category'

import styles from './Categories.module.css'

type ContainerProps = {
  categories: Category[]
}
type Props = ContainerProps

const Component: React.VFC<Props> = ({ categories }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>カテゴリー</h1>
    <ul>
      {categories.map((category) => (
        <li key="category.id" className={styles.list}>
          <Link href={`/category/${category.id}/page/1`}>
            <a>{category.name}</a>
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
