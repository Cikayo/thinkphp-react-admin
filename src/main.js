import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import Page from './Page'
import 'antd/dist/antd.css';
import './styles/index.scss'

ReactDOM.render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Page />
    </ConfigProvider>
  </Router>,
  document.getElementById('app'));