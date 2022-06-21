import React, { useState } from 'react'
import { Button, Space } from 'antd'
import PageFunctions from '@/components/page/PageFunctions'
import TTable from '@/components/TTable'
import { iconComponent } from '@/utils/icons'
import SearchForm from './components/SearchForm'

function TaskList() {
  const [showSearch, setShowSearch] = useState(false)

  const columns = [
    { title: '任务名称', dataIndex: 'task_name' },
    { title: '发布人', dataIndex: 'task_issuer' },
    { title: '接受人', dataIndex: 'task_taker' },
    { title: '开始时间', dataIndex: 'start_time' },
    { title: '结束时间', dataIndex: 'end_time' },
    { title: '创建时间', dataIndex: 'create_time' },
  ]
  function handleShowSearchClick() {
    setShowSearch(!showSearch)
  }
  function searchSubmit(values) {
    console.log(values)
  }
  return (
    <div className="site-task-list-page">
      <SearchForm 
        show={showSearch}
        searchSubmit={searchSubmit}
      />
      <PageFunctions>
        <Space>
          <Button type="primary" icon={iconComponent('PlusOutlined')}>新建</Button>
          <Button type="primary" icon={iconComponent('UploadOutlined')}>导入</Button>
        </Space>
        <Space>
          <Button
            type="link"
            icon={showSearch ? iconComponent('UpOutlined') : iconComponent('DownOutlined')}
            onClick={handleShowSearchClick}>
              {showSearch ? '隐藏' : '展开'}
            </Button>
        </Space>
      </PageFunctions>
      <TTable columns={columns} />
    </div>
  )
}

export default TaskList;