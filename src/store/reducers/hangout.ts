import flow from "lodash/flow";
import { AppReducer } from ".";
import * as lenses from "../lenses";

export const hangoutReducer: AppReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HANGOUT_REQUEST":
    case "FETCH_HISTORY_REQUEST":
      return lenses.setLoading(state);
    case "FETCH_HANGOUT_ERROR":
    case "FETCH_HISTORY_ERROR":
      return lenses.makeError(action.error)(state);
    case "FETCH_HANGOUT_SUCCESS":
      return flow(
        lenses.activeHangout.set(action.hangout),
        lenses.makeSuccess
      )(state);
    case "FETCH_HISTORY_SUCCESS":
      return flow(
        lenses.history.set(action.history),
        lenses.makeSuccess
      )(state);
    default:
      return state;
  }
};
