import React from 'react'

import { Author } from '~/src/types/microCMS/api/Author'

import styles from './Writer.module.css'

type ContainerProps = {
  writer: Author
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ writer }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>ABOUT ME</h2>
    <div className={styles.container}>
      <picture>
        <source type="image/webp" srcSet={`${writer.image.url}?fit=crop&w=100&h=100&fm=webp`} />
        <img src={`${writer.image.url}?fit=crop&w=100&h=100&q=100`} className={styles.image} alt="" />
      </picture>
      <dl className={styles.content}>
        <dt className={styles.name}>
          {writer.name}
          <a className={styles.twitterLink} href="`https://twitter.com/${writer.id}`">
            <img
              className={styles.twitter}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_twitter.svg`}
              alt="Twitter"
            />
          </a>
        </dt>
        <dd className={styles.text}>{writer.text}</dd>
      </dl>
    </div>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
