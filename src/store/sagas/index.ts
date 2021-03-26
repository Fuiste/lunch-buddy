import { call, put, takeLatest } from "redux-saga/effects";
import { createUser, fetchHistory, optIn, pollForHangout } from "../../api";
import { AsyncReturnType } from "../../util";
import { Action, CreateUserRequest, OptInRequest } from "../actions";

const putAction = (action: Action) => put(action);

function* createUserSaga(action: CreateUserRequest) {
  const { config } = action;
  try {
    const user: AsyncReturnType<typeof createUser> = yield call(
      createUser,
      config
    );
    yield putAction({ type: "CREATE_USER_SUCCESS", user });
  } catch (error) {
    yield putAction({ type: "CREATE_USER_ERROR", error });
  }
}

function* fetchHistorySaga() {
  try {
    const history: AsyncReturnType<typeof fetchHistory> = yield call(
      fetchHistory
    );
    yield putAction({ type: "FETCH_HISTORY_SUCCESS", history });
  } catch (error) {
    yield putAction({ type: "FETCH_HISTORY_ERROR", error });
  }
}

function* fetchActiveHangoutSaga() {
  try {
    const hangout: AsyncReturnType<typeof pollForHangout> = yield call(
      pollForHangout
    );
    yield putAction({ type: "FETCH_HANGOUT_SUCCESS", hangout });
  } catch (error) {
    yield putAction({ type: "FETCH_HANGOUT_ERROR", error });
  }
}

function* optInSaga(action: OptInRequest) {
  const { timestamp } = action;
  try {
    yield call(optIn, timestamp);
    yield putAction({ type: "OPT_IN_SUCCESS" });
  } catch (error) {
    yield putAction({ type: "OPT_IN_ERROR", error });
  }
}

export function* mainSaga() {
  yield takeLatest("CREATE_USER_REQUEST", createUserSaga);
  yield takeLatest("OPT_IN_REQUEST", optInSaga);
  yield takeLatest("FETCH_HANGOUT_REQUEST", fetchActiveHangoutSaga);
  yield takeLatest("FETCH_HISTORY_REQUEST", fetchHistorySaga);
}

export function* rootSaga() {
  try {
    yield call(mainSaga);
  } catch (error) {
    console.error("Root saga died:", error);
  }
}
