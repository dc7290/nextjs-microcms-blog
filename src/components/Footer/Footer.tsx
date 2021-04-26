import React from 'react'

import styles from './Footer.module.css'

const list = [
  {
    href: 'https://wanta.co.jp',
    text: '運営会社',
  },
  {
    href: 'https://microcms.io/law',
    text: '特定商取引法に基づく表記',
  },
  {
    href: 'https://microcms.io/terms',
    text: '利用規約',
  },
  {
    href: 'https://microcms.io/policy',
    text: 'プライバシーポリシー',
  },
  {
    href: 'https://microcms.io/contact',
    text: 'お問い合わせ',
  },
]

const Component: React.VFC = () => (
  <footer className={styles.footer}>
    <ul className={styles.lists}>
      {list.map((item) => (
        <li key={item.text} className={styles.list}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
    <p className={styles.cr}>© Wanta Inc.</p>
  </footer>
)

const Container: React.VFC = () => {
  return <Component />
}

export default Container
