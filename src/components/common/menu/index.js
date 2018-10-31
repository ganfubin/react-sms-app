import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';
import {auth} from '@/utils'


export default  () => {
  let {pathname} = window.location;
  const menuSelectedKeys = {'/': "1","/analysis": "2", "/users": "3", "/system": "4"};
  let selectedKey =  menuSelectedKeys[pathname] || "1";
  if(auth.getUserInfo()){
    return (
        <Menu defaultSelectedKeys={[selectedKey]} mode="inline" theme="dark" inlineCollapsed={false} className="menu">
          <Menu.Item key="1">
            <Link to='/'>发送短信</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/analysis'>数据统计</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/users'>个人中心</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to='/system'>系统管理</Link>
          </Menu.Item>
        </Menu>
    )
  }else {
    return ''
  }
}