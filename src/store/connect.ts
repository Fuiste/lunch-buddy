import { AppState } from "./state";
import { Action } from "./actions";
import { Dispatch } from "redux";
import {
  InferableComponentEnhancer,
  connect as reduxConnect,
} from "react-redux";

export const connect = <S, D>(
  mapStateToProps: (state: AppState, _: any) => S,
  mapDispatchToProps: (dispatch: Dispatch<Action>) => D
): InferableComponentEnhancer<S & D> => {
  return reduxConnect(mapStateToProps, mapDispatchToProps);
};
