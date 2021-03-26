import { connect } from "../../store/connect";
import { FrontDoor } from "./";
import * as lenses from "../../store/lenses";
import { CreateAccountConfig } from "../../api";

export const FrontDoorConnector = connect(
  (state) => ({
    session: lenses.session(state),
  }),
  (dispatch) => ({
    submitAccountCreate: (config: CreateAccountConfig) => {
      dispatch({ type: "CREATE_USER_REQUEST", config });
    },
  })
)(FrontDoor);
