import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Menu} from 'antd';
import  auth from './auth'
import CommonHeader from './components/common/header'
import './index.less'

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

const AsyncLogin = Loadable({
  loader: () => import('./pages/login'),
  loading: MyLoadingComponent
});


const PrivateRoute = ({component: Component, ...rest}) => {
  if (auth.getUserInfo()) {
    return <Route {...rest} render={() => (<Component />)}></Route>
  } else {
    return <Route {...rest} render={() => (<Redirect to="/login"/>)}></Route>
  }
};

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
                <Switch>
                  <PrivateRoute path="/" exact component={AsyncIndex}/>
                  <PrivateRoute path="/analysis" component={AsyncAnalysis}/>
                  <PrivateRoute path="/users" component={AsyncUser}/>
                  <PrivateRoute path="/system" component={AsyncSystem}/>
                  <Route path="/login" render={() => {
                    if (auth.getUserInfo()) {
                      return <Redirect to="/"/>
                    } else {
                      return <AsyncLogin/>
                    }
                  }}/>
                </Switch>

              </div>
            </div>
          </div>
        </Router>
    )
  }

}

export  default Routers;