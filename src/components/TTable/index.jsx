import React from 'react';
import { Table, Pagination } from 'antd';
import './TTable.scss'

const pageSizeOptions = [20, 50, 100]

function TTable({ dataList, columns, pagination }) {
  function handlePaginationChange(page, pageSize) {
    
  }
  return (
    <div>
      <Table size="middle" dataSource={dataList} columns={columns} />
      <div className="site-ttable-pagination">
        <Pagination
          onChange={handlePaginationChange}
          showSizeChanger
          defaultCurrent={1}
          pageSizeOptions={pageSizeOptions}
          defaultPageSize={20}
          total={50} />
      </div>
    </div>
  )
}

export default TTable;