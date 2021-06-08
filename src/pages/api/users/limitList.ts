import { NextApiRequest, NextApiResponse } from 'next';
import { generateUserList } from '../../../utils/user-data'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, pageSize } = req.query;
  const { list } = generateUserList(+page, +pageSize);
  res.status(200).json({
    success: true,
    message: '',
    data: {
      list,
      total: 28
    }
  })
}
