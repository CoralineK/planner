import { State } from '../reducer';

export function getEmail(state: State) {
  return state.auth.data?.email;
}

export function getId(state: State) {
  return state.auth.data?.id;
}
