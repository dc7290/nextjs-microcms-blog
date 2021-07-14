import type { NextApiRequest, NextApiResponse } from 'next'

import { Methods } from '~/src/api/blog'
import { apiClient } from '~/src/utils/apiClient'
import { headers } from '~/src/utils/microCMSHeaders'

type Data = Methods['get']['resBody']

const search = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (typeof req.query.q !== 'string') {
    res.status(404).end()
    return
  }

  const data = await apiClient.blog.$get({
    headers,
    query: {
      q: req.query.q,
    },
  })

  res.status(200).json({ ...data })
}

export default search
