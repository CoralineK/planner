import { ADD_EVENT } from './actionTypes';
import { EventState, EventAction } from './types';

const defaultState = {
  data: {
    begin: undefined,
    finish: undefined,
    location: null,
    title: null,
    exist: false,
  },
};

export default function eventReducer(
  state: EventState = defaultState,
  action: EventAction,
): EventState {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        data: {
          begin: action.payload.begin,
          finish: action.payload.finish,
          location: action.payload.location,
          title: action.payload.title,
          exist: action.payload.exist,
        },
      };
    default:
      return state;
  }
}
