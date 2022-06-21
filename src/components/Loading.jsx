import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  )
}

export default Loading;