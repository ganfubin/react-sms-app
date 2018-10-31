import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {auth} from '@/utils';

import Content from '@/components/common/content';
import Login from '@/pages/login'


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
          <Switch>
            <Route path="/login" render={() => {
              if (auth.getUserInfo()) {
                return <Redirect to="/"/>
              } else {
                return <Login/>
              }
            }}/>
            <PrivateRoute path="/" component={Content}/>
          </Switch>
        </Router>
    )
  }
}

export default Routers;