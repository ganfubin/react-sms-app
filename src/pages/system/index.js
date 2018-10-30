import React from 'react'
import {Table, Button, Form, Input} from 'antd';
const FormItem = Form.Item;
import SystemModal from '../../components/system/modal'
import './index.less'


class System extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '添加',
      modalType: 'add',
      visible: false
    }
  }

  openModal = (type) => {
    this.setState({
      title: type === 'add' ? '添加' : '编辑',
      modalType: type,
      visible: true
    })
  };

  modalSure = () => {
    this.setState({
      visible: false
    })
  };

  render() {
    const dataSource = [{
      key: '1',
      name: '联通营销',
      content: '发送#908sgf到10010就可以免费获取寒假节日包，包含500M流量，100条短信',
    }, {
      key: '2',
      name: '支付宝活动',
      content: '打卡支付宝输入4897263，即可获取1-10元不等红包',
    }];

    const columns = [{
      title: '模板名称',
      key: 'name',
      dataIndex: 'name',
      width: 150,
    }, {
      title: '模板内容',
      key: 'content',
      dataIndex: 'content',
    }, {
      title: '操作',
      key: 'action',
      className: 'table-action',
      width: 150,
      render: (text, record) => (
          <span>
            <Button size="small" type="primary" className="btn-edit"
                    onClick={this.openModal.bind(this, 'edit')}>编辑</Button>
            <Button size="small" type="danger" className="btn-del">删除</Button>
          </span>
      )
    }];

    return (
        <div className="system-page">
          <Form layout="inline" className="form-layout">
            <FormItem>
              <Input placeholder="模板名称"/>
            </FormItem>
            <FormItem>
              <Button type="primary">查询</Button>
            </FormItem>
          </Form>
          <Table dataSource={dataSource} columns={columns}/>
          <SystemModal visible={this.state.visible} onSrue={this.modalSure}></SystemModal>
        </div>
    )
  }
}


export default System