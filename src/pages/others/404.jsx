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
        status="404"
        title="404"
        subTitle="不好意思，页面未找到~"
        extra={<Button type="primary" onClick={handleGoHomeClick}>回到首页</Button>}
      />
    </div>
  )
}