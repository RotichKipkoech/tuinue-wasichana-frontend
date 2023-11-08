import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import donorReducer from './reducers/donorReducer';
import charityReducer from './reducers/charityReducer';
import adminReducer from './reducers/adminReducer';

const rootReducer = combineReducers({
  donor: donorReducer,
  charity: charityReducer,
  admin: adminReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
