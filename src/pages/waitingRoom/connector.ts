import { connect } from "../../store/connect";
import { WaitingRoom } from "./";
import * as lenses from "../../store/lenses";

export const WaitingRoomContainer = connect(
  (state) => ({
    session: lenses.session(state),
  }),
  (dispatch) => ({
    submitOptIn: () => {
      dispatch({ type: "OPT_IN_REQUEST" });
    },
  })
)(WaitingRoom);
