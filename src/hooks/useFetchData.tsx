import { useState, useEffect, useRef } from 'react';
import request, { IRequestOptions, IResponseData } from '../utils/request';

interface IFetchResData {
  data: any;
  loading: boolean;
  error: any;
}

function useFetchData(url: string, options?: IRequestOptions): IFetchResData {
  // 如果是一个通用的 fetchData，那么使用any是没办法的，如果只是针对list，any可以替换为 IUserListResStruct
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  /**
   * 超时或者页面销毁/路由跳转，取消请求
   */
  const abortControllerRef = useRef<AbortController>();

  function destory() {
    setData(null);
    setLoading(false);
    setError(null);
    abortControllerRef.current && abortControllerRef.current.abort();
  }

  useEffect(() => {
    setLoading(true);
    abortControllerRef.current = new AbortController();
    request(url, options || {}, abortControllerRef.current).then(res => {
      const { success, message, data } = res as IResponseData;
      if (!success) {
        console.log('Error Msg: ', message);
        throw new Error(message);
      }
      setData(data);
      setLoading(false);
    }).catch(err => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });

    return () => destory();
  }, [url, options]);

  return { loading, data, error };
}
 
export default useFetchData;
