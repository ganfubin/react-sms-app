import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router";
import Loadable from 'react-loadable';
import CommonHeader from '../header/index'
import CommonMenu from '../menu/index'
import {LoadingComponent, auth} from '@/utils'
import './index.less'


const AsyncIndex = Loadable({
  loader: () => import('@/pages/index'),
  loading: LoadingComponent
});

const AsyncUser = Loadable({
  loader: () => import('@/pages/user'),
  loading: LoadingComponent
});

const AsyncAnalysis = Loadable({
  loader: () => import('@/pages/analysis'),
  loading: LoadingComponent
});

const AsyncSystem = Loadable({
  loader: () => import('@/pages/system'),
  loading: LoadingComponent
});

const PrivateRoute = ({component: Component, ...rest}) => {
  if (auth.getUserInfo()) {
    return <Route {...rest} render={() => (<Component />)}></Route>
  } else {
    return <Route {...rest} render={() => (<Redirect to="/login"/>)}></Route>
  }
};

class Content extends Component {
  render() {
    return (
        <div className="layout-default">
          <CommonHeader></CommonHeader>
          <div className="main-wrapper">
            <CommonMenu/>
            <div className="view">
              <PrivateRoute path="/" exact component={AsyncIndex}/>
              <PrivateRoute path="/analysis" exact component={AsyncAnalysis}/>
              <PrivateRoute path="/users" exact component={AsyncUser}/>
              <PrivateRoute path="/system" exact component={AsyncSystem}/>
            </div>
          </div>
        </div>
    )
  }

}

export default withRouter(Content)