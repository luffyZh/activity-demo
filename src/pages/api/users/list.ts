import { NextApiRequest, NextApiResponse } from 'next';
import { generateUserList } from '../../../utils/user-data'
import { sleep } from '../../../utils/methods';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, pageSize } = req.query;
  // 如果 page 为第1页，设置一个5秒的loading
  if (+page === 1) {
    await sleep(3000);
  }
  // 如果 page 为第三页，设置一个10s的loading，验证前端超时，以及可以验证abort
  if (+page === 3) {
    await sleep(10000);
  }
  const { list, total } = generateUserList(+page, +pageSize);
  res.status(200).json({
    success: true,
    message: '',
    data: {
      list,
      total
    }
  })
}
