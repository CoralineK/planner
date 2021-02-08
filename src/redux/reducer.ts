import { combineReducers } from 'redux';
import auth from './auth/reducer';
import { AuthState } from './auth/types';
// import event from './event/reducer';
// import { EventState } from './event/types';

export type State = {
  auth: AuthState;
  // event: EventState;
};

export const reducer = combineReducers({
  auth,
  // event,
});
