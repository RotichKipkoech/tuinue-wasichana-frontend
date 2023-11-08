// reducers/index.js
import { combineReducers } from 'redux';
import donorReducer from './donorReducer';
import charityReducer from './charityReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  donors: donorReducer,
  charities: charityReducer,
  admins: adminReducer,
});

export default rootReducer;
