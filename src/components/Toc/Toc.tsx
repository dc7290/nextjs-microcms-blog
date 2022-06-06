import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useWindowSize } from 'react-use'

import { headerId } from '~/src/utils/ids'

import styles from './Toc.module.css'

type ContainerProps = {
  toc: {
    id: string
    name: string
    text: string
  }[]
}

export type { ContainerProps as TocProps }

type Props = { headerHeight: number } & ContainerProps

const Component: React.FC<Props> = ({ toc, headerHeight }) => (
  <div className={styles.wrapper}>
    <h4 className={styles.title}>目次</h4>
    <ul>
      {toc.map((item) => (
        <li key={item.id} className={`${styles.list} ${item.name}`}>
          <ScrollLink to={item.id} offset={-headerHeight}>
            {item.text}
          </ScrollLink>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.FC<ContainerProps> = (props) => {
  const { width } = useWindowSize(800)
  const [headerHeight, setHeaderHeight] = useState(60)
  useEffect(() => {
    const headerElement = window.document.getElementById(headerId)
    if (headerElement !== null) {
      setHeaderHeight(headerElement.clientHeight)
    }
  }, [width])

  return <Component {...props} headerHeight={headerHeight} />
}

export default Container
