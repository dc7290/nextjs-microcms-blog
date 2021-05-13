import { GetServerSideProps } from 'next'

import generateFeedXml from '~/scripts/generate-rss-feed'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const feed = await generateFeedXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate') // 24時間のキャッシュ
  res.setHeader('Content-Type', 'text/xml')
  res.end(feed)

  return {
    props: {},
  }
}

const FeedPage = () => null

export default FeedPage
