import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createRootReducer from './store/index';

const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
