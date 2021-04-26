import { useRouter } from 'next/router'
import React, { KeyboardEventHandler } from 'react'

import styles from './Search.module.css'

type Props = {
  onKeyPress: KeyboardEventHandler<HTMLInputElement>
}

const Component: React.VFC<Props> = ({ onKeyPress }) => (
  <label className={styles.label}>
    サイト内検索
    <input className={styles.input} type="text" onKeyPress={onKeyPress} />
  </label>
)

const Container: React.VFC = () => {
  const router = useRouter()
  const handleKeyPress: Props['onKeyPress'] = (event) => {
    event.preventDefault()

    if (event.key === 'Enter') {
      router.push(`/search`, {
        query: {
          q: event.currentTarget.value,
        },
      })
    }
  }

  return <Component onKeyPress={handleKeyPress} />
}

export default Container
