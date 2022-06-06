import React from 'react'

import styles from './Post.module.css'

type ContainerProps = {
  body: string
}

type Props = ContainerProps

const Component: React.FC<Props> = ({ body }) => (
  <div className={styles.post} dangerouslySetInnerHTML={{ __html: body }}></div>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
