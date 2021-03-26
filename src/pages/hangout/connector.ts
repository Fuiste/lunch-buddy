import { connect } from "../../store/connect";
import { Hangout } from "./";
import * as lenses from "../../store/lenses";

export const HangoutContainer = connect(
  (state) => ({
    activeUser: lenses.activeUser(state),
    activeHangout: lenses.activeHangout(state),
  }),
  (dispatch) => ({})
)(Hangout);
