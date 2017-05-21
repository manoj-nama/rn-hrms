import { combineReducers } from 'redux';
import approvalReducer from './approval.reducer';
import linksReducer from './links.reducer';
import attendanceReducer from './attendance.reducer';
import navReducer from './nav.reducer';
import userReducer from './user.reducer';

const reducers = combineReducers({
  user: userReducer,
  links: linksReducer,
  attendance: attendanceReducer,
  approvals: approvalReducer,
  nav: navReducer
});

export default reducers;