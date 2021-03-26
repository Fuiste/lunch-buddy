import { Lens, Prism } from "@atomic-object/lenses";
import { AppState, SessionState } from "./state";

export const session = Lens.from<AppState>().prop("session");
export const activeHangout = Lens.from<AppState>().prop("activeHangout");

// Session lenses
export const activeUser = session.comp(Lens.from<SessionState>().prop("user"));
export const optedIn = session.comp(Lens.from<SessionState>().prop("optedIn"));
