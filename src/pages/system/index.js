import React from 'react'
import {Map, List} from 'immutable';
import {Table, Button, Form, Input, notification} from 'antd';
const FormItem = Form.Item;
import {authCookie} from '@/mixins';
import SystemModal from '../../components/system/modal'
import './index.less'

@authCookie
class System extends React.Component {
  constructor() {
    super();
    this.state = {
      modalData: {
        title: '添加',
        modalType: 'add',
        visible: false
      },
      dataSource: [{
        key: '1',
        name: '联通营销',
        content: '发送#908sgf到10010就可以免费获取寒假节日包，包含500M流量，100条短信',
        isEnable: 0
      }, {
        key: '2',
        name: '支付宝活动',
        content: '打卡支付宝输入4897263，即可获取1-10元不等红包',
        isEnable: 1
      }],
      vis: false
    }
  }

  openModal = (type, data) => {
    this.setState({
      modalData: {
        title: type === 'add' ? '添加' : '编辑',
        modalType: type,
        visible: true,
        rowData: data
      }
    })
  };

  delRow = (data) => {
    let {dataSource} = this.state;
    let findItem = dataSource.filter((item) => {
      return item.key !== data.key
    });
    notification.success({
      message: '系统提示',
      description: '操作成功'
    });
    this.setState({
      dataSource: findItem
    })
  };

  handleSearch = () => {
    this.setState({
      vis: true
    })
  };

  modalSure = (data = {}) => {
    let {dataSource} = this.state;
    if (Object.keys(data).length) {
      if (data.key) {
        dataSource.forEach((item) => {
          if (item.key === data.key) {
            Object.assign(item, {...data})
          }
        });
      } else {
        dataSource.push({...data, key: (new Date).getTime()})
      }
      notification.success({
        message: '系统提示',
        description: '操作成功'
      });
    }
    this.setState({
      modalData: {
        visible: false,
        dataSource
      }
    })
  };

  render() {
    let {dataSource} = this.state;
    const columns = [{
      title: '模板名称',
      key: 'name',
      dataIndex: 'name',
      width: 150,
    },
      {
        title: '模板内容',
        key: 'content',
        dataIndex: 'content',
      },
      {
        title: '是否启用',
        key: 'isEnable',
        width: 100,
        render: (text, record) => (
            <span>
              {record.isEnable ? '是' : '否'}
            </span>
        )
      },
      {
        title: '操作',
        key: 'action',
        className: 'table-action',
        width: 150,
        render: (text, record) => (
            <span>
            <Button size="small" type="primary" className="btn-edit"
                    onClick={this.openModal.bind(this, 'edit', record)}>编辑</Button>
            <Button size="small" type="danger" className="btn-del"
                    onClick={this.delRow.bind(this, record)}>删除</Button>
          </span>
        )
      }];

    return (
        <div className="system-page">
          <div className="form-layout">
            <Form layout="inline" className="inline-block">
              <FormItem>
                <Input placeholder="模板名称"/>
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleSearch}>查询</Button>
              </FormItem>
            </Form>
            <Button type="primary" className="form-layout-btn" onClick={this.openModal.bind(this, 'add')}>添加</Button>
          </div>
          <Table dataSource={dataSource} columns={columns}/>
          <SystemModal modalData={this.state.modalData} onSrue={this.modalSure}></SystemModal>
        </div>
    )
  }
}


export default System