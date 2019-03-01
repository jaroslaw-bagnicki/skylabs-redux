import { combineReducers } from 'redux';

import commentsReducer from './commentsReducer';
import usersReducer from './commentsReducer';

export default combineReducers({
  comments: commentsReducer,
  users: usersReducer
});