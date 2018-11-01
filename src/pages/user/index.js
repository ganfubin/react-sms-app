import React from 'react'
import {Button} from 'antd';
import {authCookie} from '@/mixins';

@authCookie
class User extends React.Component {
  render() {
    return (
        <div><Button type="primary">user</Button></div>
    )
  }
}


export default User