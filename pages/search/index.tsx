import { MicroCMSListResponse } from 'microcms-js-sdk'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { BlogList } from '~/src/components/BlogList'
import { Head } from '~/src/components/Head'
import { Layout } from '~/src/components/Layout'
import { LayoutProps } from '~/src/components/Layout/Layout'
import { Search } from '~/src/components/Search'
import styles from '~/src/styles/pages/search.module.css'
import { Blog } from '~/src/types/microCMS/Blog'
import { getGlobalContents } from '~/src/utils/microCMS/getContents'

type Props = LayoutProps

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { banner, categories, popularArticles } = await getGlobalContents()

  return {
    props: { banner, categories, popularArticles },
  }
}

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
      <Head title="検索結果" />
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
