import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import currentFiatReducer from './currentFiatReducer';

export default combineReducers({
  fetchObject: fetchReducer,
  currentFiat: currentFiatReducer,
});
