import flow from "lodash/flow";
import { AppReducer } from ".";
import * as lenses from "../lenses";

export const userReducer: AppReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER_REQUEST":
    case "OPT_IN_REQUEST":
      return lenses.setLoading(state);
    case "CREATE_USER_ERROR":
    case "OPT_IN_ERROR":
      return lenses.makeError(action.error)(state);
    case "CREATE_USER_SUCCESS":
      return flow(
        lenses.activeUser.set(action.user),
        lenses.makeSuccess
      )(state);
    case "OPT_IN_SUCCESS":
      return flow(lenses.optedIn.set(true), lenses.makeSuccess)(state);
    default:
      return state;
  }
};
