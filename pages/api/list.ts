// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Item = {
  id: number
  name: string
}
type Data = {
  list: Item[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    list: [
      {id: 1, name: 'Amy'},
      {id: 2, name: 'Frank'},
      {id: 3, name: 'Emma'},
    ] 
  })
}