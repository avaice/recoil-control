// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  now: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  setTimeout(
    () => res.status(200).json({ now: new Date().toISOString() }),
    1000
  )
}
