import { MicroCMSListResponse } from 'microcms-js-sdk'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { BlogList } from '~/src/components/BlogList'
import { Layout } from '~/src/components/Layout'
import { LayoutProps } from '~/src/components/Layout/Layout'
import { Search } from '~/src/components/Search'
import styles from '~/src/styles/pages/search.module.css'
import { Blog } from '~/src/types/microCMS/Blog'
import { OG_TITLE, returnTitle } from '~/src/utils/meta'
import { getGlobalContents } from '~/src/utils/microCMS/getContents'

type Props = LayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { banner, categories, popularArticles } = await getGlobalContents()

  return {
    props: { banner, categories, popularArticles },
  }
}

const title = returnTitle('検索結果')

const SearchPage: NextPage<Props> = (props) => {
  const router = useRouter()
  const { data, error } = useSWR<MicroCMSListResponse<Blog>>(`/api/search?q=${router.query.q}`, (url) =>
    fetch(url).then((res) => res.json())
  )

  if (error) {
    // エラー処理用のコンポーネントを表示してください。
    return <p>通信エラーが起きました</p>
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key={OG_TITLE} property={OG_TITLE} content={title} />
      </Head>
      <Layout {...props}>
        <Search isShowText={false} />
        {data === undefined ? (
          <div className={styles.loader}>
            <img className={styles.loadingIcon} src="/images/icon_loading.svg" alt="検索中..." />
          </div>
        ) : data.contents.length === 0 ? (
          <div className={styles.loader}>記事がありません</div>
        ) : (
          <BlogList contents={data.contents} />
        )}
      </Layout>
    </>
  )
}

export default SearchPage
