import React from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Modal, Form, Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

@immutableRenderDecorator
@Form.create({
  mapPropsToFields () {
    return {
      smsTemplate: Form.createFormField({value: "1"}),
      target: Form.createFormField({value: "1"}),
    };
  }
})
class SmsTemplate extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleOk = () => {
    this.props.onSrue(true)
  };
  handleCancel = () => {
    this.props.onSrue(false);
  };

  render() {
    let visible = this.props.visible;
    let formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14}
    };
    const {getFieldDecorator} = this.props.form;
    return (
        <Modal
            title="请选择短信模板"
            style={{width: "800px"}}
            okText="确定"
            cancelText="取消"
            visible={visible}
            mask={true}
            centered={true}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}>
          <Form>
            <FormItem label="请选择短信模板" {...formItemLayout}>
              {getFieldDecorator("smsTemplate", {
                rules: [{
                  required: true,
                  message: '请选择短信模板',
                }],
              })(
                  <Select>
                    <Option value="1">联通营销</Option>
                    <Option value="2">联通营销</Option>
                  </Select>
              )}
            </FormItem>
            <FormItem label="请选择发送对象" {...formItemLayout}>
              {getFieldDecorator("target", {
                rules: [{
                  required: true,
                  message: '请选择发送对象',
                }],
              })(
                  <Select>
                    <Option value="1">全部</Option>
                    <Option value="2">男</Option>
                    <Option value="3">女</Option>
                  </Select>
              )}
            </FormItem>
          </Form>
        </Modal>
    )
  }
}

export default SmsTemplate