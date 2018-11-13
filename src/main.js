import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import Routers from './router'

ReactDOM.render(
    <Provider store={store}>
      <Routers></Routers>
    </Provider>,
    document.getElementById('root')
);

