import type { NextApiRequest, NextApiResponse } from 'next'

import { getBlogs } from '~/src/utils/microCMS/getContents'

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.q !== 'string') {
    res.status(404).end()
    return
  }

  const data = await getBlogs({
    q: req.query.q,
  })

  res.status(200).json({ ...data })
}

export default search
