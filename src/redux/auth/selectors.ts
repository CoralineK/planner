import { State } from '../reducer';

export function getEmail(state: State) {
  return state.authReducer.data?.email;
}

export function getId(state: State) {
  return state.authReducer.data?.id;
}
