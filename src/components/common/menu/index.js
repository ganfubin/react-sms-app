import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';


export default MenuLink = () => {
  return (
      <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" inlineCollapsed={false} className="menu">
        <Menu.Item key="1">
          <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/analysis'>统计</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/users'>个人</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to='/system'>系统</Link>
        </Menu.Item>
      </Menu>
  )
}