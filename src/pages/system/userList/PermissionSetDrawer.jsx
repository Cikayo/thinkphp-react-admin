import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Tree, Drawer, Space, Button } from 'antd';
import menus from '@/router'

const PermissionSetDrawer = observer(({ user, visible, handleOk, handleCancel }) => {
    const [btnLoading, setBtnLoading] = useState(false)
    const perTreeData = menus.menus.concat(menus.others);

    function onClose() {
        handleCancel()
    }
    function handleSaveClick() {
        setBtnLoading(true)
        handleOk()
    }
    // 点击树节点
    function onSelect(checkedKeys, info) {
        console.log('onSelect', checkedKeys, info);
    }
    // 选中树节点
    function onCheck(selectedKeys, info) {
        console.log('onCheck', selectedKeys, info);
    }

    return (
        <Drawer title="权限设置" placement="right" width="500" visible={visible} onClose={onClose} footer={
            <Space>
                <Button onClick={onClose}>取消</Button>
                <Button type="primary" onClick={handleSaveClick} loading={btnLoading}>保存</Button>
            </Space>
        }>
            <Tree
                checkable
                defaultExpandedKeys={user.permissions}
                defaultCheckedKeys={user.permissions}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={perTreeData}
            />
        </Drawer>
    )
})

export default PermissionSetDrawer;