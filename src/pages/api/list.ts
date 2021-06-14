import { NextApiRequest, NextApiResponse } from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: '',
    data: [{ name: 'luffy' }]
  })
}
