import { ADD_EVENT } from './actionTypes';
import { Event, EventAction } from './types';

export function event({
  begin,
  finish,
  location,
  title,
  exist,
}: Event): EventAction {
  return {
    type: ADD_EVENT,
    payload: {
      begin,
      finish,
      location,
      title,
      exist,
    },
  };
}
