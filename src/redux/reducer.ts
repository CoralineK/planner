import { combineReducers } from 'redux';
import auth from './auth/reducer';
import { AuthState } from './auth/types';

export type State = {
  auth: AuthState;
};

export const reducer = combineReducers({
  auth,
});
