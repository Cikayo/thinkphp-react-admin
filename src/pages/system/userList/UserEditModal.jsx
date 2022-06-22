import React, { useRef, useEffect } from 'react';
import { Form, Input, Modal,Select, Space, Button } from 'antd';

const { Option } = Select;

function UserEditModal({ visible, editRow, handleCancel, handleOk }) {
    const form = useRef(null)

    useEffect(() => {
        if(form.current) {
            if(editRow) {
                form.current.setFieldsValue(editRow)
            } else {
                form.current.resetFields();
            }
        }
    }, [visible])


    function onCancel() {
        handleCancel()
    }

    function onOk() {
        handleOk()
    }

    return (
        <Modal title="用户设置" visible={visible} onCancel={onCancel} onOk={onOk}>
            <Form
                name="user"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                ref={form}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名称"
                    name="user_name"
                    rules={[{ required: true, message: '请输入用户名称!' }]}
                >
                    <Input placeholder="用户名称" disabled={editRow ? true : false} />
                </Form.Item>
                <Form.Item
                    label="用户密码"
                    name="password"
                    rules={[{ required: true, message: '请输入用户密码!' }]}
                >
                    <Input placeholder="用户密码" />
                </Form.Item>
                <Form.Item
                    label="是否启用"
                    name="status"
                    initialValue={1}
                >
                    <Select placeholder="是否启用" >
                        <Option value={0}>关闭</Option>
                        <Option value={1}>启用</Option>
                        </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UserEditModal;