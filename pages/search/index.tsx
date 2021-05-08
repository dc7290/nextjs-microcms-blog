import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { Methods } from '~/src/api/blog'
import { BlogList } from '~/src/components/BlogList'
import { Layout } from '~/src/components/Layout'
import { LayoutProps } from '~/src/components/Layout/Layout'
import { Search } from '~/src/components/Search'
import styles from '~/src/styles/pages/search.module.css'
import { getContents } from '~/src/utils/getContents'

type Props = LayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { banner, categories, popularArticles } = await getContents()

  return {
    props: { banner, categories, popularArticles },
  }
}

const SearchPage: NextPage<Props> = (props) => {
  const router = useRouter()
  const { data, error } = useSWR<Methods['get']['resBody']>(`/api/search?q=${router.query.q}`, (url) =>
    fetch(url).then((res) => res.json())
  )

  if (error) {
    // エラー処理用のコンポーネントを表示してください。
    return <p>通信エラーが起きました</p>
  }

  return (
    <Layout {...props}>
      <Search isShowText={false} />
      {data === undefined ? (
        <div v-if="loading === true" className={styles.loader}>
          <img className={styles.loadingIcon} src="/images/icon_loading.svg" alt="検索中..." />
        </div>
      ) : (
        <BlogList contents={data.contents} />
      )}
    </Layout>
  )
}

export default SearchPage
