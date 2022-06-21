import React from 'react';
import { Tree, Modal } from 'antd';
import menus from '@/router'

function PermissionListModal({ visible, handleOk, handleCancel }) {
    function onOk() {
        handleCancel()
    }
    function onCancel() {
        handleCancel()
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
        <Modal title="权限设置" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Tree
                checkable
                defaultExpandedKeys={[]}
                defaultSelectedKeys={[]}
                defaultCheckedKeys={[]}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={menus.menus}
                />
        </Modal>
    )
}

export default PermissionListModal;