import React from 'react'

import { BlogList } from '../BlogList'
import { BlogListProps } from '../BlogList/BlogList'
import { Breadcrumb } from '../Breadcrumb'
import { Layout } from '../Layout'
import { LayoutProps } from '../Layout/Layout'

import styles from './BlogListLayout.module.css'

type ContainerProps = LayoutProps & BlogListProps

export type { ContainerProps as BlogListLayoutProps }

type Props = ContainerProps

const Component: React.FC<Props> = ({ contents, currentPage, pager, selectedCategory, ...layoutProps }) => (
  <Layout {...layoutProps}>
    <Breadcrumb />
    {contents.length === 0 ? (
      <div className={styles.loader}>記事がありません</div>
    ) : (
      <BlogList contents={contents} currentPage={currentPage} pager={pager} selectedCategory={selectedCategory} />
    )}
  </Layout>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
