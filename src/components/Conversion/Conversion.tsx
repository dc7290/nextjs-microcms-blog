import React from 'react'

import styles from './Conversion.module.css'

type ContainerProps = {
  id: string
}
type Props = ContainerProps

const list = [
  '開発者、編集者どちらも分かりやすい管理画面',
  '細かな権限管理や豊富な外部サービス・データ連携',
  '安心の日本製・日本語でのチャットサポート',
]

const Component: React.VFC<Props> = ({ id }) => (
  <div>
    <h2 className={styles.pageTitle}>microCMSとは</h2>
    <ol className={styles.lists}>
      {list.map((item) => (
        <li key={item} className={styles.list}>
          <p>
            <strong>{item}</strong>
          </p>
        </li>
      ))}
    </ol>
    <div className={styles.actions}>
      <a
        className={styles.link}
        target="site"
        href={`https://microcms.io/?utm_source=CTA&utm_medium=content-text&utm_campaign=blog-${id}-01`}
      >
        ⇒日本製のヘッドレスCMS【microCMS】の詳細を見る
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_link.svg`} alt="" />
      </a>
      <a target="site" href={`https://microcms.io/?utm_source=CTA&utm_medium=content-text&utm_campaign=blog-${id}-02`}>
        <button className={styles.button}>microCMSを無料で始める</button>
      </a>
    </div>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
