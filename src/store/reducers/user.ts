import flow from "lodash/flow";
import { AppReducer } from ".";
import * as lenses from "../lenses";

export const userReducer: AppReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER_ERROR":
    case "OPT_IN_ERROR":
      return lenses.error.set(action.error)(state);
    case "CREATE_USER_SUCCESS":
      return flow(lenses.activeUser.set(action.user), lenses.clearError)(state);
    case "OPT_IN_SUCCESS":
      return flow(lenses.optedIn.set(true), lenses.clearError)(state);
    default:
      return state;
  }
};
