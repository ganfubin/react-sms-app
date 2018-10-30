import React from 'react'
import {Table, Button} from 'antd';
import './index.less'


class System extends React.Component {


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
            <Button size="small" type="primary" className="btn-edit">编辑</Button>
            <Button size="small" type="danger" className="btn-del">删除</Button>
          </span>
      )
    }];

    return (
        <div className="system-page">
          <Table dataSource={dataSource} columns={columns}/>
        </div>
    )
  }
}


export default System