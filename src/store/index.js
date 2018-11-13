import {createStore, combineReducers} from 'redux';
import {info} from './info'

const reducers = combineReducers({
  info
});

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())