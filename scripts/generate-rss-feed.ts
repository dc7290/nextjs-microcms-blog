import RSS from 'rss'

import { getGlobalContents } from '~/src/utils/microCMS/getContents'

import { title, description } from '../src/components/Head/Head';

const site_url = process.env.NEXT_PUBLIC_SITE_URL

if (site_url === undefined) {
  throw Error('envファイルにNEXT_PUBLIC_SITE_URLを設定してください。')
}

const generateFeedXml = async () => {
  const feed = new RSS({
    title,
    description,
    feed_url: `${site_url}/feed.xml`,
    site_url,
    language: 'ja',
  })

  const { contents } = await getGlobalContents()
  contents.forEach((content) => {
    feed.item({
      title: `${content.title} | ${title}`,
      description: content.description,
      date: content.publishedAt ?? content.createdAt,
      url: `${site_url}/${content.id}`,
    })
  })

  return feed.xml()
}

export default generateFeedXml
