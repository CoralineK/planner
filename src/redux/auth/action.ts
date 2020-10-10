import { AUTH_SUCCESS, AUTH_LOADING, AUTH_ERROR } from './actionTypes';
import { AuthSuccessAction, AuthErrorAction, AuthLoadingAction } from './types';

export function authSuccess(email: string, id: string): AuthSuccessAction {
  return {
    type: AUTH_SUCCESS,
    payload: {
      email,
      id,
    },
  };
}

export function authLoading(): AuthLoadingAction {
  return {
    type: AUTH_LOADING,
  };
}

export function authError(error: string): AuthErrorAction {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
