import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from './actionTypes';

export type User = {
  id: string;
  email: string;
};

export type AuthState = {
  data?: User;
  loading: boolean;
  error?: string;
};

export type AuthLoadingAction = {
  type: typeof AUTH_LOADING;
};

export type AuthErrorAction = {
  type: typeof AUTH_ERROR;
  payload: string;
};

export type AuthSuccessAction = {
  type: typeof AUTH_SUCCESS;
  payload: User;
};

export type AuthAction =
  | AuthLoadingAction
  | AuthErrorAction
  | AuthSuccessAction;
