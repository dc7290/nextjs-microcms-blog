import React from 'react'

import { Partner } from '~/src/types/microCMS/api/Partner'

import styles from './Partner.module.css'

type ContainerProps = {
  partner: Partner
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ partner }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <picture>
        <source type="image/webp" data-srcset={`${partner.logo.url}?fit=crop&w=100&h=100&fm=webp`} />
        <img
          data-src={`${partner.logo.url}?fit=crop&w=100&h=100&q=100`}
          className={'lazyload ' + styles.image}
          alt=""
        />
      </picture>
      <dl className={styles.content}>
        <dt className={styles.name}>
          <span className={styles.company}>{partner.company}</span>
          <span className={styles.label}>認定パートナー</span>
        </dt>
        <dd className={styles.text}>{partner.description}</dd>
        <dd className={styles.url}>
          <a href={partner.url} target="_blank" rel="noopener noreferrer">
            {partner.url}
          </a>
        </dd>
        <dd>
          <a className={styles.button} href={`https://microcms.io/partners/${partner.id}`} target="partner">
            制作を依頼する
          </a>
        </dd>
      </dl>
    </div>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
