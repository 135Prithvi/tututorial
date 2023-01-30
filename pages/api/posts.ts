// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import {getSortedPostsData} from "lib/getPost"

// this fetchs all the post with title and id
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //   const _allPostsData = getSortedPostsData()

  // res.status(200).json(_allPostsData)
  res.status(200).json({ name: 'John Doe' })
}
