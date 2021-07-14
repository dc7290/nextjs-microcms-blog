import { NextApiRequest, NextApiResponse } from 'next'

import { apiClient } from '~/src/utils/apiClient'
import { headers } from '~/src/utils/microCMSHeaders'

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { draftKey, slug } = req.query
  if (typeof draftKey !== 'string' || typeof slug !== 'string') {
    res.status(404).end()
    return
  }

  const data = await apiClient.blog._slug(slug).$get({ headers, query: { fields: 'id', draftKey } })

  if (!data) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({ draftKey })
  res.writeHead(307, { Location: `/${slug}` })
  res.end('Preview mode enabled')
}

export default preview
