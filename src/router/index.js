const menus = {
  menus: [
    { key: '/', index: true, title: '首页', icon: 'HomeOutlined', element: 'Home' },
    {
      key: '/task',
      title: '任务列表',
      icon: 'UnorderedListOutlined',
      children: [
        { key: '/task/list', title: '任务列表', icon: 'BarsOutlined', element: 'TaskList' },
        { key: '/task/my-list', title: '我的任务', icon: 'UserOutlined', element: 'MyTaskList' },
      ]
    },
    {
      key: '/system',
      title: '系统管理',
      icon: 'SettingOutlined',
      children: [
        { key: '/system/dict/list', title: '字典管理', icon: 'TeamOutlined', element: 'DictList' },
        { key: '/system/user/list', title: '用户管理', icon: 'TeamOutlined', element: 'UserList' },
        { key: '/system/menu/list', title: '菜单管理', icon: 'TeamOutlined', element: 'UserList' },
      ]
    }
  ],
  others: [
    { key: '/work/:id', hidden: true, title: '任务编辑', element: 'Work' },
  ]
}

export default menus