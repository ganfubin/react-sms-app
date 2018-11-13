import React from 'react';
import {Modal, Form, Input, Switch} from 'antd';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
const {TextArea} = Input;
const FormItem = Form.Item;

@immutableRenderDecorator
@Form.create({
  mapPropsToFields (props) {
    let {name, content, isEnable} = props.modalData.rowData || {};
    return {
      name: Form.createFormField({value: name}),
      content: Form.createFormField({value: content}),
      isEnable: Form.createFormField({value: isEnable ? true : false})
    };
  }
})
class SystemModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //console.log(this)
  }

  componentWillReceiveProps(nextProps) {
    const {key, name, content} = nextProps.modalData.rowData || {};
    this.setState({
      key,
      name,
      content
    });
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSrue({...values, key: this.state.key, isEnable: values.isEnable ? 1 : 0})
      }
    });

  };
  handleCancel = () => {
    this.props.onSrue();
  };

  render() {
    let {modalData} = this.props;
    let {visible, title} = modalData;
    const {getFieldDecorator} = this.props.form;
    let formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14}
    };
    return (
        <Modal
            title={title}
            width={800}
            okText="确定"
            cancelText="取消"
            visible={visible}
            mask={true}
            centered={true}
            onOk={this.handleOk}
            maskClosable={false}
            onCancel={this.handleCancel}>
          <Form layout="horizontal">
            <FormItem label="模板名称" {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请填写模板名称',
                }],
              })(
                  <Input placeholder="模板名称"/>
              )}
            </FormItem>
            <FormItem label="模板内容" {...formItemLayout}>
              {getFieldDecorator('content', {
                rules: [{
                  required: true,
                  message: '请填写模板内容',
                }],
              })(
                  <TextArea placeholder="模板内容" autosize={{minRows: 5, maxRows: 5}}/>
              )}
            </FormItem>
            <FormItem label="是否启用" {...formItemLayout}>
              {getFieldDecorator('isEnable', {valuePropName: 'checked'})(
                  <Switch />
              )}
            </FormItem>
          </Form>
        </Modal>
    )
  }
}

export default SystemModal