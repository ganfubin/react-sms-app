import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {hot} from 'react-hot-loader'
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

@hot(module)
class Routers extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login" render={() => {
              return auth.getUserInfo() ? <Redirect to="/"/> : <Login/>
            }}/>
            <PrivateRoute path="/" component={Content}/>
          </Switch>
        </Router>
    )
  }
}

export default Routers;