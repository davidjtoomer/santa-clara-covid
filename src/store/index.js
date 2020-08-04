import {combineReducers} from 'redux';
import {baseReducer, dataReducer} from './reducers';

const createRootReducer = () => combineReducers({
  base: baseReducer,
  data: dataReducer
});

export default createRootReducer;