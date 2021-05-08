import React from 'react'

import { MicroCMSCommonValue } from '~/src/types/microCMS/Common'
import { Banner } from '~/src/types/microCMS/api/Banner'

import styles from './Banner.module.css'

type ContainerProps = {
  banner: Omit<Banner, keyof MicroCMSCommonValue>
  id: string
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ banner, id }) => (
  <div className={styles.wrapper}>
    <a
      href={`${banner.url}?utm_source=CTA&utm_medium=content-text&utm_campaign=${id}-03`}
      className={styles.link}
      target="banner"
    >
      <picture>
        <source
          data-srcset={`${banner.image.url}?w=300&fm=webp, ${banner.image.url}?w=600&fm=webp 2x`}
          type="image/webp"
        />
        <img
          className={'lazyload ' + styles.image}
          data-src={banner.image.url}
          alt={banner.alt}
          width={banner.image.width}
          height={banner.image.height}
        />
      </picture>
    </a>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
