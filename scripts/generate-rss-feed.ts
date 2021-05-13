import RSS from 'rss'

import { getContents } from '~/src/utils/getContents'
import { description, returnTitle, SITE_URL } from '~/src/utils/meta'

const generateFeedXml = async () => {
  const feed = new RSS({
    title: returnTitle(),
    description,
    feed_url: `${SITE_URL}/feed.xml`,
    site_url: SITE_URL,
    language: 'ja',
  })

  const { contents } = await getContents()
  contents.forEach((content) => {
    feed.item({
      title: returnTitle(content.title),
      description: content.description,
      date: content.publishedAt ?? content.createdAt,
      url: `${SITE_URL}/${content.id}`,
    })
  })

  return feed.xml()
}

export default generateFeedXml
