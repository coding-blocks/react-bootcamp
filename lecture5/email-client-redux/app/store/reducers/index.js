import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import emailsReducer from './emailsReducer';

const Reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  emails: emailsReducer,
});

export default Reducer;
