import React, { useEffect, useRef } from 'react';
import { Modal, Form, Input } from 'antd';

function DictEditModal({ editRow, visible, handleCancel, handleOk }) {
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
        form.current.validateFields().then(values => {
            handleOk(values)
        })
    }
    return (
        <Modal title="字典设置" visible={visible} onCancel={onCancel} onOk={onOk}>
            <Form
                name="dict"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                ref={form}
                autoComplete="off"
            >
                <Form.Item
                    label="字典名称"
                    name="dict_name"
                    rules={[{ required: true, message: '请输入字典名称!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}


export default DictEditModal;