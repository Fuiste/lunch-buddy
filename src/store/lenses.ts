import { Lens, Prism } from "@atomic-object/lenses";
import { AppState, SessionState } from "./state";

export const session = Lens.from<AppState>().prop("session");
export const activeHangout = Lens.from<AppState>().prop("activeHangout");
export const error = Lens.from<AppState>().prop("error");
export const history = Lens.from<AppState>().prop("history");

// Session lenses
export const activeUser = session.comp(Lens.from<SessionState>().prop("user"));
export const optedIn = session.comp(Lens.from<SessionState>().prop("optedIn"));

// Helpers
export const clearError = error.set(null);
