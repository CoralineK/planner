import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
// Auth
import authReducer from './auth/reducer';
import { AuthState } from './auth/types';

export type State = {
  authReducer: AuthState;
};

export const reducer = combineReducers({
  firebaseReducer,
  authReducer,
});
