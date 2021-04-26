import React from 'react'

import { Banner as ApiBanner } from '~/src/types/microCMS/api/Banner'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'

import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { PopularArticles } from '../PopularArticles'
import { Search } from '../Search'

type ContainerProps = {
  banner: ApiBanner
  categories: Category[]
  popularArticles: Blog[]
}

type Props = ContainerProps

const Component: React.FC<Props> = ({ banner, categories, children, popularArticles }) => (
  <>
    <Header />
    <main>
      {children}
      <aside>
        <Banner id="list" banner={banner} />
        <Search />
        <Categories categories={categories} />
        <PopularArticles contents={popularArticles} />
      </aside>
    </main>
  </>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
