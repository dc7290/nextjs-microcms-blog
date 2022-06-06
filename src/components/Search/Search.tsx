import { useRouter } from 'next/router'
import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'

import { pagesPath } from '~/src/utils/$path'

import styles from './Search.module.css'

type ContainerProps = {
  isShowText?: boolean
}

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onKeyPress: KeyboardEventHandler<HTMLInputElement>
} & ContainerProps

const Component: React.FC<Props> = ({ value, onChange, onKeyPress, isShowText = true }) => (
  <label className={styles.label}>
    {isShowText && 'サイト内検索'}
    <input className={styles.input} type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} />
  </label>
)

const Container: React.FC<ContainerProps> = (props) => {
  const [value, setValue] = useState('')
  const handleChange: Props['onChange'] = (event) => setValue(event.currentTarget.value)

  const router = useRouter()
  const handleKeyPress: Props['onKeyPress'] = (event) => {
    if (value === '') {
      return
    }
    if (event.key === 'Enter') {
      router.push({
        pathname: pagesPath.search.$url().pathname,
        query: { q: value },
      })
    }
  }

  return <Component {...props} value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
}

export default Container
