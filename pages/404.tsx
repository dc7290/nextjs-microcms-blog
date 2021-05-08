import type { NextPage } from 'next'

import styles from '~/src/styles/pages/404.module.css'

const ErrorPage: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <dl>
          <dt className={styles.status}>404</dt>
          <dd className={styles.message}>ページが見つかりません</dd>
        </dl>
      </div>
    </>
  )
}

export default ErrorPage
