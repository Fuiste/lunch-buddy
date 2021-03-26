import { Action } from "../actions";
import { AppState, defaultState } from "../state";

export type AppReducer = (state: AppState, action: Action) => AppState;

export const appReducer = (state = defaultState(), action: Action) => {
  switch (action.type) {
    case "NOOP":
      return state;
    default:
      return state;
  }
};
