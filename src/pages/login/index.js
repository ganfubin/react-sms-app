import React from 'react'
import {Button} from 'antd';
import auth from '../../auth'

class Login extends React.Component {
  login = () => {
    auth.setUserInfo('gan')
  };
  render() {
    return (
        <div><Button type="primary" onClick={this.login}>login</Button></div>
    )
  }
}


export default Login