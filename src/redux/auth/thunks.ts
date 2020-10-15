import { Dispatch } from 'redux';
import { AuthAction } from './types';
import { authError, authLoading, authSuccess } from './action';
import { signInUser } from '../../services/firebase';

export function signIn(email: string, password: string) {
  return async function (dispatch: Dispatch<AuthAction>) {
    dispatch(authLoading());

    try {
      const response = await signInUser(email, password);

      if (!response.user?.email || !response.user?.uid) {
        throw Error('Something went wrong');
      }

      return dispatch(authSuccess(response.user.email, response.user.uid));
    } catch (e) {
      return dispatch(authError(e.message));
    }
  };
}
