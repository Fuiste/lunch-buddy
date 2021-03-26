import flow from "lodash/flow";
import { AppReducer } from ".";
import * as lenses from "../lenses";

export const hangoutReducer: AppReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HANGOUT_ERROR":
    case "FETCH_HISTORY_ERROR":
      return lenses.error.set(action.error)(state);
    case "FETCH_HANGOUT_SUCCESS":
      return flow(
        lenses.activeHangout.set(action.hangout),
        lenses.clearError
      )(state);
    case "FETCH_HISTORY_SUCCESS":
      return flow(lenses.history.set(action.history), lenses.clearError)(state);
    default:
      return state;
  }
};
