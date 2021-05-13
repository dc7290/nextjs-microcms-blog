import Head from 'next/head'
import React from 'react'

import { Banner as ApiBanner } from '~/src/types/microCMS/api/Banner'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'
import { DESCRIPTION, SITE_URL, OG_DESCRIPTION, OG_IMAGE, OG_TYPE, description } from '~/src/utils/meta'

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
    <Head>
      <meta key={DESCRIPTION} name={DESCRIPTION} content={description} />
      <meta key={OG_DESCRIPTION} property={OG_DESCRIPTION} content={description} />
      <meta key={OG_TYPE} property={OG_TYPE} content="website" />
      <meta key={OG_IMAGE} property={OG_IMAGE} content={`${SITE_URL}/og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
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
