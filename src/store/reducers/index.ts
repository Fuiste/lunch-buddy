import { Action } from "../actions";
import { AppState, defaultState } from "../state";
import { hangoutReducer } from "./hangout";
import { userReducer } from "./user";

export type AppReducer = (state: AppState, action: Action) => AppState;

export const appReducer = (state = defaultState(), action: Action) => {
  switch (action.type) {
    // User actions
    case "CREATE_USER_ERROR":
    case "CREATE_USER_REQUEST":
    case "CREATE_USER_SUCCESS":
    case "OPT_IN_ERROR":
    case "OPT_IN_REQUEST":
    case "OPT_IN_SUCCESS":
      return userReducer(state, action);

    // Hangout actions
    case "FETCH_HANGOUT_ERROR":
    case "FETCH_HANGOUT_REQUEST":
    case "FETCH_HANGOUT_SUCCESS":
    case "FETCH_HISTORY_ERROR":
    case "FETCH_HISTORY_REQUEST":
    case "FETCH_HISTORY_SUCCESS":
      return hangoutReducer(state, action);

    default:
      return state;
  }
};
