import { MicroCMSListResponse } from 'microcms-js-sdk'
import Link from 'next/link'
import React from 'react'

import { Category } from '~/src/types/microCMS/Category'
import { pagesPath } from '~/src/utils/$path'

import styles from './Categories.module.css'

type ContainerProps = {
  categories: MicroCMSListResponse<Category>['contents']
}
type Props = ContainerProps

const Component: React.VFC<Props> = ({ categories }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>カテゴリー</h1>
    <ul>
      {categories.map((category) => (
        <li key={category.id} className={styles.list}>
          <Link href={pagesPath.category._categoryId(category.id).page._pageNumber(1).$url()}>
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
