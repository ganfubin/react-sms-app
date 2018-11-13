import React from 'react'
import {Form} from 'antd';
import {authCookie} from '@/mixins';

const FormItem = Form.Item;

@authCookie
class User extends React.Component {
  render() {

    return (
        <div>用户管理</div>
    )
  }
}
export default User