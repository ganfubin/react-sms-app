import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Menu} from 'antd';
import CommonHeader from './components/common/header'
import './styles/index.less'

const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const AsyncIndex = Loadable({
  loader: () => import('./pages/index'),
  loading: MyLoadingComponent
});

const AsyncUser = Loadable({
  loader: () => import('./pages/user'),
  loading: MyLoadingComponent
});

const AsyncAnalysis = Loadable({
  loader: () => import('./pages/analysis'),
  loading: MyLoadingComponent
});

const AsyncSystem = Loadable({
  loader: () => import('./pages/system'),
  loading: MyLoadingComponent
});

class Routers extends React.Component {
  render() {
    return (
        <Router>
          <div className="layout-default">
            <CommonHeader></CommonHeader>
            <div className="main-wrapper">
              <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" inlineCollapsed={false} className="menu">
                <Menu.Item key="1">
                  <Link to='/'>首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/analysis'>统计</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/users'>个人</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to='/system'>系统</Link>
                </Menu.Item>
              </Menu>
              <div className="view">
                <Route path="/" exact component={AsyncIndex}/>
                <Route path="/analysis" exact component={AsyncAnalysis}/>
                <Route path="/users" component={AsyncUser}/>
                <Route path="/system" component={AsyncSystem}/>
              </div>
            </div>
          </div>
        </Router>
    )
  }

}

export  default Routers;