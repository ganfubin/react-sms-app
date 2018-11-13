import React from 'react'
import {Form} from 'antd';
import {authCookie} from '@/mixins';

const FormItem = Form.Item;

@authCookie
class User extends React.Component {
  render() {
    let formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 18}
    };
    return (
        <div>
          <Form>
            <FormItem label="系统名称" {...formItemLayout}>短信营销系统</FormItem>
            <FormItem label="版本信息" {...formItemLayout}>V1.0.0</FormItem>
            <FormItem label="开源地址" {...formItemLayout}>
              <a href="https://github.com/ganfubin/react-sms-app" target="_blank">https://github.com/ganfubin/react-sms-app</a>
            </FormItem>
          </Form>
        </div>
    )
  }
}
export default User