import React from 'react';
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom";
import { Layout, Button, Dropdown, Menu, message } from 'antd';
import { iconComponent } from '@/utils/icons'
const { Header } = Layout;

const PageHeader = observer(({ page, user }) => {
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: 'user-center',
          label: ( <a onClick={handleUserCenterClick}>{iconComponent('UserOutlined')} 用户中心</a>)
        },
        {
          key: 'logout',
          label: ( <a onClick={handleLogoutClick}>{iconComponent('LogoutOutlined')} 登出</a> )
        }
      ]}
    />
  )

  // 用户中心点击
  function handleUserCenterClick() {

  }
  // 登出点击
  function handleLogoutClick(e) {
    e.preventDefault()
    user.logout().then(res => {
      message.success(res.msg)
      console.log(res)
      navigate('/login')
      console.log('退出成功')
    })
  }

  // 展开/关闭导航菜单
  function handleSwitchClick() {
    page.toggleChangeCollapsed()
  }
  return (
    <Header className="site-layout-header">
      <Button
        type="text"
        icon={page.collapsed ? iconComponent('MenuUnfoldOutlined') : iconComponent('MenuFoldOutlined')}
        onClick={handleSwitchClick}
      ></Button>
      <Dropdown overlay={menu}>
        <Button type="link" icon={iconComponent('UserOutlined')}>{user.name}</Button>
      </Dropdown>
    </Header>
  )
})

export default PageHeader;