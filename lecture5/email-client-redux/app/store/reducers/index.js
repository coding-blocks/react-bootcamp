import { combineReducers } from 'redux';

import authReducer from './authReducer';

const Reducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  // emails: emailsReducer,
});

export default Reducer;
