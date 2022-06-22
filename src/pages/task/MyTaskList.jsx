import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Space } from 'antd'
import PageFunctions from '@/components/page/PageFunctions'
import TTable from '@/components/TTable'
import { iconComponent } from '@/utils/icons'
import SearchForm from './components/SearchForm'

function MyTaskList() {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)

  const columns = [
    { title: '序号', key: 'number', render: (text, record, index) => (index + 1) },
    { title: '任务名称', dataIndex: 'task_name' },
    { title: '任务类型', dataIndex: 'task_type' },
    { title: '发布人', dataIndex: 'task_issuer' },
    { title: '接受人', dataIndex: 'task_taker' },
    { title: '开始时间', dataIndex: 'start_time' },
    { title: '结束时间', dataIndex: 'end_time' },
    { title: '创建时间', dataIndex: 'create_time' },
    { title: '操作', key: 'action', render: (text, record) => (
      <Space>
        <Button type='link' onClick={() => handleToFinish(record)}>去完成</Button>
      </Space>
    ) }
  ]
  const data = [
    {
      key: '1',
      id: '1',
      task_name: '编辑任务1',
      task_type: '编辑',
      task_issuer: 'User',
      task_taker: 'AA',
    }
  ]

  // 去完成点击事件
  function handleToFinish({ id }) {
    navigate(`/work/${id}`)
  }
  
  function handleShowSearchClick() {
    setShowSearch(!showSearch)
  }
  function searchSubmit(values) {
    console.log(values)
  }

  return (
    <div className="site-my-task-list-page">
      <SearchForm 
        show={showSearch}
        searchSubmit={searchSubmit}
      />
      <PageFunctions>
        <Space>
          <Button type="primary" icon={iconComponent('PlusOutlined')}>领取</Button>
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
      <TTable dataList={data} columns={columns} />
    </div>
  )
}

export default MyTaskList;