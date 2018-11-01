import React from 'react';
import {Form, Input, Button, Row, Col} from 'antd';
const FormItem = Form.Item;
const {TextArea} = Input;

import SmsTemplate from '../../components/index/sms-template'
import {authCookie} from '@/mixins'
import './index.less';

@authCookie
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      layout: 'ds', //分为两种电商和运营商
      visible: false
    };
  }

  showSMStemplate = () => {
    this.setState({
      visible: true
    });
  };

  templateSure = (visible) => {
    this.setState({visible: false});
  };

  render() {
    let formLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 18}
    };
    return (
        <div className="index-page">
          <Form>
            <FormItem label="手机号" {...formLayout} required className="phone-text-area">
              <TextArea placeholder="请输入手机号码，多个号码通过回车换行"/>
            </FormItem>
            <FormItem label="短信内容" {...formLayout} required className="text-message">
              <Row gutter={8}>
                <Col span={20}><TextArea placeholder="短语内容"/></Col>
                <Col span={4}><Button type="primary" onClick={this.showSMStemplate}>选择短信模板</Button></Col>
              </Row>
            </FormItem>
            <FormItem className="send-btn-container">
              <Button type="primary">发送</Button>
            </FormItem>
          </Form>
          <SmsTemplate visible={this.state.visible} onSrue={this.templateSure}></SmsTemplate>
        </div>
    )
  }
}


export default Index