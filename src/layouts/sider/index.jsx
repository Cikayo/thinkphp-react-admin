import React from 'react';
import { observer } from 'mobx-react-lite'
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import menus from '@/router/index'
import { iconComponent } from '@/utils/icons'

const { Sider } = Layout;

const PageSider = observer(({ page, user }) => {
  let navigate = useNavigate();
  function handleMenuSelect({ key }) {
    page.changeActiveSiderKey(key)
    navigate(key);
  }

  function formatMenu(r) {
    if(r.hidden) return;

    const menu = (m) => {
      // 判断是否有访问权限
      if(!user.permissions.includes(m.key)) return;
      return {
        label: m.title,
        key: m.key,
        icon: iconComponent(m.icon)
      }
    }
    
    if(r.children) {
      // 判断是否有访问权限
      if(!user.permissions.includes(r.key)) return;
      return {
        ...menu(r),
        children: r.children.map(m => m.children ? formatMenu(m) : menu(m))
      }
    }

    return menu(r);
  }

  return (
    <Sider collapsed={page.collapsed} className="custom-scrollbar site-page-sider">
      <Logo />
      <Menu
        theme="dark"
        mode="inline"
        onSelect={handleMenuSelect}
        selectedKeys={[page.activeSiderKey]}
        items={[
          ...menus.menus.map(formatMenu)
        ]}
      />
    </Sider>
  )
})

export default PageSider;