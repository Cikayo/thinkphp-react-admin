import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite"
import { Button, Form, Input } from 'antd';
import user from '@/store/user'
import './Login.scss'

const Login = observer(() => {
  const [btnLoading, setBtnLoading] = useState(false)
  const navigate = useNavigate()
  function onFinish(values) {
    setBtnLoading(true)
    user.login(values, () => {
      setBtnLoading(false)
      navigate('/')
    })
  }
  if(user.token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="site-login-page">
      <div className="site-login-form__container">
        <div className="login-form">
          <div className="login-title">
            <div className="site-login__logo">用户登录</div>
          </div>
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
            <Form.Item label="用户名" name="user_name" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" loading={btnLoading} htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="site-login-bg"></div>
    </div>
  )
})

export default Login;