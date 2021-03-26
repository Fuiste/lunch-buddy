import { call, takeLatest } from "redux-saga/effects";
import { Noop } from "../actions";

function logNoop(action: Noop) {
  console.log(action);
}

export function* mainSaga() {
  yield takeLatest("NOOP", logNoop);
}

export function* rootSaga() {
  try {
    yield call(mainSaga);
  } catch (error) {
    console.error("Root saga died:", error);
  }
}
