import React from 'react';
import {Modal} from 'antd';
class SmsTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleOk = () => {
    this.props.onSrue(true)
  };
  handleCancel = () => {
    this.props.onSrue(false);
  };
  render() {
    let visible = this.state.visible || this.props.visible;
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
        </Modal>
    )
  }
}

export default SmsTemplate