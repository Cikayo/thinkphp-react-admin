import React, { useState } from 'react';
import { Button, Space } from 'antd'
import PageFunctions from '@/components/page/PageFunctions'
import TTable from '@/components/TTable'
import { iconComponent } from '@/utils/icons'
import PermissionSetModal from './PermissionSetModal';

function UserList() {
  const [showSearch, setShowSearch] = useState(false)
  const [perModalVisible, setPerModalVisible] = useState(false)
  
  const columns = [
    { title: '序号', key: 'number', render: (text, record, index) => (index + 1) },
    { title: '用户名', dataIndex: 'user_name' },
    {
      title: '权限',
      key: 'permission',
      render: () => (<Button type="link" icon={iconComponent('AppstoreOutlined')} onClick={handlePerSetClick}></Button>)
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button type='link'>编辑</Button>
          <Button type='link'>删除</Button>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '1',
      user_name: 'admin'
    }
  ]
  function handleShowSearchClick() {
    setShowSearch(!showSearch)
  }
  function handlePerSetClick() {
    setPerModalVisible(true)
  }
  function handlePerModalOk() {

  }
  function handlePerModalCancel() {
    setPerModalVisible(false)
  }
  return (
    <div>
      <PageFunctions>
        <Space>
          <Button type="primary" icon={iconComponent('PlusOutlined')}>新建</Button>
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
      <PermissionSetModal
        visible={perModalVisible}
        handleOk={handlePerModalOk}
        handleCancel={handlePerModalCancel} />
    </div>
  )
}

export default UserList;