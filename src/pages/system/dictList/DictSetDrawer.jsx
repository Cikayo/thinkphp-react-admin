import React from 'react';
import { Drawer, Space, Button } from 'antd';

function DictSetDrawer({ visible, handleClose }) {
    function onClose() {
        handleClose()
    }
    return (
        <Drawer title="设置字典" placement="right" onClose={onClose} visible={visible}>
            <Space className="mb-2">
                <Button type="primary">添加</Button>
            </Space>
            
        </Drawer>
    )
}

export default DictSetDrawer;