import React, { useState } from 'react';
import { Button, Space } from 'antd'
import PageFunctions from '@/components/page/PageFunctions'
import TTable from '@/components/TTable'
import { iconComponent } from '@/utils/icons'
import DictEditModal from './DictEditModal'
import DictSetDrawer from './DictSetDrawer'

function DictList() {
    const [editRow, setEditRow] = useState(null);
    const [showSearch, setShowSearch] = useState(false)
    const [setVisible, setSetVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)

    function handleShowSearchClick() {
        setShowSearch(!showSearch)
    }
    const columns = [
        { title: '序号', key: 'number', render: (text, record, index) => (index+1) },
        { title: '字典名称', dataIndex: 'dict_name' },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Button type='link' onClick={() => handleSetClick(record)}>设置</Button>
                    <Button type='link' onClick={() => handleEditClick(record)}>编辑</Button>
                    <Button type='link'>删除</Button>
                </Space>
            )
        }
    ]
    const data = [
        {
            key: '1',
            dict_name: '状态'
        }
    ]

    // 新建点击
    function handleCreateClick() {
        setEditVisible(true)
    }

    function handleSetClick() {
        setSetVisible(true)
    }
    function handleSetClose() {
        setSetVisible(false)
    }

    function handleEditClick(row) {
        setEditRow(row)
        setEditVisible(true)
    }
    function handleEditOk(values) {
        
    }
    function handleEditCancel() {
        setEditRow(null)
        setEditVisible(false)
    }
    return (
        <div className="site-dict-page">

            <PageFunctions>
                <Space>
                    <Button
                        type="primary"
                        icon={iconComponent('PlusOutlined')}
                        onClick={handleCreateClick}>新建</Button>
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
            <DictEditModal
                editRow={editRow}
                visible={editVisible}
                handleCancel={handleEditCancel}
                handleOk={handleEditOk} />
            <DictSetDrawer editRow={editRow} visible={setVisible} handleClose={handleSetClose} />
        </div>
    )
}

export default DictList;