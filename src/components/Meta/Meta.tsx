import dayjs from 'dayjs'
import React from 'react'

import { MicroCMSCommonValue } from '~/src/types/microCMS/Common'
import { Category } from '~/src/types/microCMS/api/Category'

import styles from './Meta.module.css'

type ContainerProps = {
  createdAt: string
  author?: string
  category?: Omit<Category, keyof MicroCMSCommonValue>
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ author, category, createdAt }) => (
  <div>
    {category && <span className={styles.category}>{category.name}</span>}
    <div className={styles.meta}>
      <span className={styles.timestamp}>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_clock.svg`} alt="時計アイコン" />
        {dayjs(createdAt).format('YYYY/MM/DD')}
      </span>
      {author && (
        <span className={styles.author}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_author.svg`} alt="著者アイコン" />
          {author}
        </span>
      )}
    </div>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
