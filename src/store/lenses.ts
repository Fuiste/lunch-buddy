import flow from "lodash/flow";
import { Lens } from "@atomic-object/lenses";
import { AppState, SessionState } from "./state";

export const session = Lens.from<AppState>().prop("session");
export const activeHangout = Lens.from<AppState>().prop("activeHangout");
export const error = Lens.from<AppState>().prop("error");
export const history = Lens.from<AppState>().prop("history");
export const loading = Lens.from<AppState>().prop("loading");

// Session lenses
export const activeUser = session.comp(Lens.from<SessionState>().prop("user"));
export const optedIn = session.comp(Lens.from<SessionState>().prop("optedIn"));

// Helpers
export const setLoading = loading.set(true);
export const clearLoading = loading.set(false);
export const clearError = error.set(null);
export const makeSuccess = flow(clearError, clearLoading);
export const makeError = (err: any) => flow(error.set(err), clearLoading);
