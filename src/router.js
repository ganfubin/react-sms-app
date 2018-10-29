import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import  auth from './auth'
import CommonHeader from './components/common/header'
import CommonMenu from './components/common/menu'
import './index.less'

const LoadingComponent = ({isLoading, error}) => {
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
  loading: LoadingComponent
});

const AsyncUser = Loadable({
  loader: () => import('./pages/user'),
  loading: LoadingComponent
});

const AsyncAnalysis = Loadable({
  loader: () => import('./pages/analysis'),
  loading: LoadingComponent
});

const AsyncSystem = Loadable({
  loader: () => import('./pages/system'),
  loading: LoadingComponent
});

const AsyncLogin = Loadable({
  loader: () => import('./pages/login'),
  loading: LoadingComponent
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
            {auth.getUserInfo() ? <CommonHeader></CommonHeader> : ''}
            <div className="main-wrapper">
              <CommonMenu/>
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

export default Routers;