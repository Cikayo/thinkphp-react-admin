import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate()
  function handleGoHomeClick() {
    navigate('/')
  }

  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="您无权访问该页面~"
        extra={<Button type="primary" onClick={handleGoHomeClick}>回到首页</Button>}
      />
    </div>
  )
}