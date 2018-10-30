import React from 'react';
import {Modal} from 'antd';
class SystemModal extends React.Component {
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
    let {visible, title} = this.props;
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
        </Modal>
    )
  }
}

export default SystemModal