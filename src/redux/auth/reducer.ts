import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING } from './actionTypes';
import { AuthState, AuthAction } from './types';

const defaultState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export default function authReducer(
  state: AuthState = defaultState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: {
          email: action.payload.email,
          id: action.payload.id,
        },
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
