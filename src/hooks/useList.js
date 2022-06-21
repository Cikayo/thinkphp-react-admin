import { useState, useEffect } from 'react';
import { get } from 'utils/request';

export function useList(url, params = {}) {
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pagination, setPagination] = useState({
      showSizeChanger: true,
      current: 1,
      pageSize: 20,
      total: 0,
      position: ['bottomLeft']
  });

  /**
     * @description 页面加载时运行的副作用
     */
   useEffect(() => {
    getListData(params, pagination);
  }, [])
  
  function getListData(_params, pagination) {
    let { current, pageSize } = pagination;
    let newParams = Object.assign(_params, {
      current, pageSize
    });
    get(url, newParams).then(res => {
      setDataList(res.data);
      setLoading(false);
      setPagination({
        ...pagination,
        current: res.current || current,
        pageSize: res.per_page || pageSize,
        total: res.total,
    });
    }).catch(err => {
      setLoading(false);
      setDataList([]);
    })
  }

  return [dataList, loading, pagination];
}