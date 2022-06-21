import React from 'react'
import { Button, Form, Input, Space } from 'antd';
import classNames from 'classnames';

function SearchForm({ show, searchSubmit }) {
    // search表单提交
    function onFinish(values) {
        searchSubmit(values)
    }
    return (
        <div className={
            classNames('site-page-search-form', {
                'show': show
            })
        }>
            <Form layout="inline" onFinish={onFinish}>
                <Form.Item label="任务名称" name="task_name">
                    <Input placeholder="任务名称" />
                </Form.Item>
                <Form.Item label="任务类型" name="task_type">
                    <Input placeholder="任务类型" />
                </Form.Item>
                <Form.Item label="任务发布人" name="task_issuer">
                    <Input placeholder="任务发布人" />
                </Form.Item>
                <Form.Item label="任务接受人" name="task_taker">
                    <Input placeholder="任务接受人" />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button htmlType="reset">重置</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SearchForm;