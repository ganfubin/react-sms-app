import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import Routers from './router'
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
      <Routers></Routers>
    </Provider>,
    document.getElementById('root')
);

