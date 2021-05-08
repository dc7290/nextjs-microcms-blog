import React from 'react'

import { Banner as ApiBanner } from '~/src/types/microCMS/api/Banner'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'

import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Latest } from '../Latest'
import { PopularArticles } from '../PopularArticles'
import { Search } from '../Search'

import styles from './Layout.module.css'

type ContainerProps = {
  banner: ApiBanner
  categories: Category[]
  popularArticles: Blog[]
  latestArticles?: Blog[]
}

export type { ContainerProps as LayoutProps }

type Props = ContainerProps

const Component: React.FC<Props> = ({ banner, categories, children, popularArticles, latestArticles }) => (
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
