import React from 'react';
import {Modal, Form, Input} from 'antd';
const {TextArea} = Input;
const FormItem = Form.Item;

class SystemModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //console.log(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...(nextProps.modalData.rowData || {})});
  }

  nameInputChange = (event) => {
    this.setState({name: event.target.value});
  };
  contentInputChange = (event) => {
    this.setState({content: event.target.value});
  };

  handleOk = () => {
    let {name, content} = this.state;
    this.props.onSrue(true, {name, content})
  };
  handleCancel = () => {
    this.props.onSrue(false);
  };

  render() {
    let {modalData} = this.props;
    let {visible, title} = modalData;
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
              <Input placeholder="模板名称" value={this.state.name} onChange={this.nameInputChange}/>
            </FormItem>
            <FormItem label="模板内容" {...formItemLayout}>
              <TextArea placeholder="模板内容" autosize={{minRows: 5, maxRows: 5}} value={this.state.content}
                        onChange={this.contentInputChange}/>
            </FormItem>
          </Form>
        </Modal>
    )
  }
}

export default SystemModal