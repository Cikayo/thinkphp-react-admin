import React from 'react'
import {
  HomeOutlined,
  UnorderedListOutlined,
  BarsOutlined,
  SettingOutlined,
  TeamOutlined,
  PlusOutlined,
  UploadOutlined,
  DownOutlined,
  UpOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined 
} from '@ant-design/icons';

const icons = {
  HomeOutlined,
  UnorderedListOutlined,
  BarsOutlined,
  SettingOutlined,
  TeamOutlined,
  PlusOutlined,
  UploadOutlined,
  DownOutlined,
  UpOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined
}

export function iconComponent(icon) {
  const Icon = icon && icons[icon]
  return Icon ? <Icon /> : null
}

export default icons
