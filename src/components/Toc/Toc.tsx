import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import styles from './Toc.module.css'

type ContainerProps = {
  toc: {
    id: string
    name: string
    text: string
  }[]
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ toc }) => (
  <div className={styles.wrapper}>
    <h4 className={styles.title}>目次</h4>
    <ul>
      {toc.map((item) => (
        <li key={item.id} className={`${styles.list} ${item.name}`}>
          <ScrollLink to={`#${item.id}`}>{item.text}</ScrollLink>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
