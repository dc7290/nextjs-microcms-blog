import Link from 'next/link'
import React from 'react'

import { pagesPath } from '~/lib/$path'
import { Category } from '~/src/types/microCMS/api/Category'

import styles from './Breadcrumb.module.css'

type ContainerProps = {
  category?: Category
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ category }) => (
  <ul className={styles.breadcrumb}>
    <li className={styles.breadcrumbList}>
      <Link href={pagesPath.$url()}>
        <a>記事一覧</a>
      </Link>
    </li>
    {category && (
      <li className={styles.breadcrumbList}>
        <Link href={pagesPath.category._categoryId(category.id).page._pageNumber(1).$url()}>{category.name}</Link>
      </li>
    )}
  </ul>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
