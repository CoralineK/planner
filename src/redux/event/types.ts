import { ADD_EVENT } from './actionTypes';

export type Event = {
  begin?: Date;
  finish?: Date;
  location: string | null;
  title: string | null;
  exist: boolean;
};

export type EventState = {
  data?: Event;
};

export type EventAction = {
  type: typeof ADD_EVENT;
  payload: Event;
};
