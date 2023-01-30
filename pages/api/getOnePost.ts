// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { getPostData } from "lib/getPost";
// this fetchs one post by given id
interface post{
  id:string;
  content:any;
  data:string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // const { id } = req.query;

  // const _allPostsData = await getPostData(id);

  // res.status(200).json(_allPostsData);
  res.status(200).json({ name: 'John Doe' })
}
