import { useState } from 'react';
import { Table, Alert } from 'antd';
import useFetchData from '../hooks/useFetchData';
import { getUserList } from '../constants/Apis';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number | undefined>(10);
  const { loading, data } = useFetchData(getUserList, { query: { page, pageSize } });
  const onPageNumChange = (page: number, pageSize?: number) => {
    setPage(page);
    setPageSize(pageSize);
  }
  return (
    <>
      <Alert
        message="Abort 步骤"
        description="第3页后端10s返回，前端超时 5s，你可以点击第3页一直等待或者切换路由，然后 Network 查看"
        type="info"
      />
      <Table
        rowKey={record => record.id}
        loading={loading}
        columns={columns}
        dataSource={data?.list || []}
        pagination={{
          current: page,
          pageSize,
          pageSizeOptions: ['10', '20', '30', '40', '50'],
          onChange: onPageNumChange,
          total: data?.total || 0
        }}
        scroll={{ y: 640 }}
      />
    </>
  )
}

export default Page;
