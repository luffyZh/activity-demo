import { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import useFetchData from '../hooks/useFetchData';
import { getLimitUserList } from '../constants/Apis';
import { IUserStruct } from '../interfaces';

const BASIC_SIZE = 10;

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

const LoadMore = () => {
  const [page, setPage] = useState(1);
  const [pageSize,] = useState<number>(BASIC_SIZE);
  const [list, setList] = useState<IUserStruct[]>([]);
  const [noMore, setNoMore] = useState<boolean>(false);
  const options = { query: { page, pageSize } };
  const { loading, data } = useFetchData(getLimitUserList, options);
  useEffect(() => {
    // 如果 data 改变了并且返回了，就更新 list
    data && setList(list => {
      setNoMore((list.length + 10) >= data.total)
      return list.concat(data.list);
    });
  }, [data]);
  return (
    <>
      <Table
        rowKey={record => record.id}
        pagination={false}
        loading={loading}
        columns={columns}
        dataSource={list}
        scroll={{ y: 700 }}
      />
      <div className="no-more">
        <style jsx>{`
          .no-more {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
        `}</style>
        <Button type="primary" className="load-more" onClick={() => setPage(page => page + 1)} disabled={noMore}>
          {!noMore ? '加载更多' : '没有更多了'}
        </Button>
      </div>
    </>
  )
};

export default LoadMore;

