import React from 'react'
import { withRouter } from "react-router";
import {Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;
import auth from '../../auth'
import './index.less'

class Login extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        auth.setUserInfo('gan');
        window.location.href = '/';
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
        <div className="login-page">
          <Form className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{required: true, message: '请填写用户名'}],
              })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请填写密码'}],
              })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                         placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>

        </div>
    )
  }
}
const LoginForm = Form.create()(Login);


export default withRouter(LoginForm)