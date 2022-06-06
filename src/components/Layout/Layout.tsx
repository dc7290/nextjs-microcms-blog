import { MicroCMSListResponse } from 'microcms-js-sdk'
import React, { PropsWithChildren } from 'react'

import { Banner as BannerType } from '~/src/types/microCMS/Banner'
import { Blog } from '~/src/types/microCMS/Blog'
import { Category } from '~/src/types/microCMS/Category'

import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Latest } from '../Latest'
import { PopularArticles } from '../PopularArticles'
import { Search } from '../Search'

import styles from './Layout.module.css'

type ContainerProps = {
  banner: BannerType
  categories: MicroCMSListResponse<Category>['contents']
  popularArticles: MicroCMSListResponse<Blog>['contents']
  latestArticles?: MicroCMSListResponse<Blog>['contents']
}

export type { ContainerProps as LayoutProps }

type Props = ContainerProps

const Component: React.FC<PropsWithChildren<Props>> = ({
  banner,
  categories,
  children,
  popularArticles,
  latestArticles,
}) => (
  <>
    <Header />
    <main className={styles.divider}>
      <div className={styles.container}>{children}</div>
      <aside className={styles.aside}>
        <Banner id="list" banner={banner} />
        <Search />
        <Categories categories={categories} />
        <PopularArticles contents={popularArticles} />
        {latestArticles && <Latest contents={latestArticles} />}
      </aside>
    </main>
    <Footer />
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
