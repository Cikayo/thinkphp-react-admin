import React from 'react';
import { Layout } from 'antd';
import PageSider from './sider';
import PageHeader from './header';
import page from '@/store/page'
import user from '@/store/user'
import './Layout.scss';

const { Content } = Layout;

function PageLayout({ children }) {
  return (
    <Layout className="site-page-layout">
      <PageSider user={user} page={page}></PageSider>
      <Layout className="layout__container">
        <PageHeader user={user} page={page}></PageHeader>
        <Content className="custom-scrollbar site-layout__content">
          <div className="site-content__box">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageLayout;