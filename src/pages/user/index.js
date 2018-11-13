import React from 'react'
import {Form, Tabs, Button, Table, Tag} from 'antd';
import {authCookie} from '@/mixins';
import './index.less'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

const userTypes = {1: "全部", 2: "男性", 3: "女性"};

@authCookie
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 1,
      types: [
        {typeId: 1, text: '全部'},
        {typeId: 2, text: '男性'},
        {typeId: 3, text: '女性'},
      ],
      columns: [
        {
          title: '姓名',
          key: 'name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: '类型',
          key: 'typeId',
          render: (text, data) => (
              <span>
              { data.type.map((item, index) => {
                return <Tag color="red" key={index}>{userTypes[item]}</Tag>
              })}
            </span>
          )
        }
      ],
      dataSource: [
        {
          key: '1',
          name: '甘釜宾1',
          type: [1, 2],
        },
        {
          key: '2',
          name: '甘釜宾2',
          type: [1, 2],
        },
        {
          key: '3',
          name: '颜玲1',
          type: [1, 3],
        },
        {
          key: '4',
          name: '颜玲2',
          type: [1, 3],
        }
      ]
    };
  }

  onTabClick = (index) => {
    this.setState({
      activeIndex: index
    })
  };

  render() {
    let {types, dataSource, columns, activeIndex} = this.state;

    dataSource = dataSource.filter((item) => {
      return item.type.includes(parseInt(activeIndex))
    });

    let tabPaneTop = types.map((item) => {
      return <TabPane tab={item.text} key={item.typeId}>
        <Table dataSource={dataSource} columns={columns}></Table>
      </TabPane>
    });


    return (
        <div className="user-page">
          <Button className="pl-btn">批量导入数据</Button>
          <Tabs defaultActiveKey="1" onTabClick={this.onTabClick} animated={false}>
            {tabPaneTop}
          </Tabs>
        </div>
    )
  }
}
export default User