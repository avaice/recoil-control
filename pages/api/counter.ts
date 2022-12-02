// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  count: number
  item: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(() => {
    const count = req.query.count ? parseInt(req.query.count.toString()) : 10
    res.status(200).json({
      count: count,
      item: [...Array(count)].map((v, i) => (i + 1).toString()),
    })
  }, 1000)
}
