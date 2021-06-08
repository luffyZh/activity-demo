import { Table } from 'antd';
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

const Basic = () => {
  const { loading, data } = useFetchData(getUserList);
  return (
    <>
      <Table
        rowKey={record => record.id}
        pagination={false}
        loading={loading}
        columns={columns}
        dataSource={data?.list || []}
        scroll={{ y: 600 }}
      />
      {data?.total && <h3 style={{ textAlign: 'center', marginTop: 20 }}>共{data.total}条</h3>}
    </>
  )
}

export default Basic;
