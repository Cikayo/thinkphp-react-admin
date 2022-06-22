import React, { useState } from 'react';
import { Button, Space, Popconfirm } from 'antd'
import PageFunctions from '@/components/page/PageFunctions'
import TTable from '@/components/TTable'
import { iconComponent } from '@/utils/icons'
import PermissionSetDrawer from './PermissionSetDrawer';
import UserEditModal from './UserEditModal';
import user from '@/store/user'

function UserList() {
  const [editRow, setEditRow] = useState(null);
  const [showSearch, setShowSearch] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [perSetVisible, setPerSetVisible] = useState(false)
  
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
          <Button type='link' onClick={() => handleEditClick(record)}>编辑</Button>
          <Popconfirm title="确认删除吗?" onConfirm={handleDelConfirm}>
            <Button type='link'>删除</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '1',
      status: 1,
      user_name: 'admin'
    }
  ]
  function handleShowSearchClick() {
    setShowSearch(!showSearch)
  }
  function handlePerSetClick() {
    setPerSetVisible(true)
  }
  function handlePerSetOk() {

  }
  function handlePerSetCancel() {
    setPerSetVisible(false)
  }
  // 新建点击
  function handleCreateClick() {
    setEditRow(null)
    setEditVisible(true)
  }
  // 编辑点击
  function handleEditClick(row) {
    setEditRow(row)
    setEditVisible(true)
  }
  function handleEditOk() {
    setEditVisible(false)
  }
  function handleEditCancel() {
    setEditVisible(false)
  }
  // 确认删除
  function handleDelConfirm() {
    console.log(1)
  }
  return (
    <div>
      <PageFunctions>
        <Space>
          <Button type="primary" icon={iconComponent('PlusOutlined')} onClick={handleCreateClick}>新建</Button>
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
      <PermissionSetDrawer
        user={user}
        visible={perSetVisible}
        handleOk={handlePerSetOk}
        handleCancel={handlePerSetCancel} />
      <UserEditModal
        visible={editVisible}
        editRow={editRow}
        handleOk={handleEditOk}
        handleCancel={handleEditCancel}
      />
    </div>
  )
}

export default UserList;