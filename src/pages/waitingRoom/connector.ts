import { connect } from "../../store/connect";
import { WaitingRoom } from "./";
import * as lenses from "../../store/lenses";

export const WaitingRoomContainer = connect(
  (state) => ({
    user: lenses.activeUser(state),
  }),
  (dispatch) => ({})
)(WaitingRoom);
