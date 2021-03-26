import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { createUser, fetchHistory, optIn, pollForHangout } from "../../api";
import { AsyncReturnType } from "../../util";
import { Action, CreateUserRequest, OptInRequest } from "../actions";
import * as lenses from "../lenses";
import { HangoutState } from "../state";

const putAction = (action: Action) => put(action);

function* createUserSaga(action: CreateUserRequest) {
  const { config } = action;
  console.log("Creating user...", { config });

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
  console.log("Fetching history...");

  try {
    const user: ReturnType<typeof lenses.activeUser> = yield select(
      lenses.activeUser
    );
    if (user !== undefined) {
      const history: AsyncReturnType<typeof fetchHistory> = yield call(
        fetchHistory,
        user.email
      );
      yield putAction({ type: "FETCH_HISTORY_SUCCESS", history });
    } else {
      yield putAction({ type: "FETCH_HISTORY_ERROR", error: "no active user" });
    }
  } catch (error) {
    yield putAction({ type: "FETCH_HISTORY_ERROR", error });
  }
}

function* fetchActiveHangoutSaga() {
  console.log("Fetching active hangout...");

  try {
    const user: ReturnType<typeof lenses.activeUser> = yield select(
      lenses.activeUser
    );
    if (user !== undefined) {
      const hangout: AsyncReturnType<typeof pollForHangout> = yield call(
        pollForHangout,
        user.email
      );
      yield putAction({ type: "FETCH_HANGOUT_SUCCESS", hangout });
    } else {
      yield putAction({ type: "FETCH_HANGOUT_ERROR", error: "no active user" });
    }
  } catch (error) {
    yield putAction({ type: "FETCH_HANGOUT_ERROR", error });
  }
}

function* optInSaga(action: OptInRequest) {
  const { timestamp } = action;
  console.log("Opting in...");

  try {
    const user: ReturnType<typeof lenses.activeUser> = yield select(
      lenses.activeUser
    );
    if (user !== undefined) {
      yield call(optIn, user.email, timestamp);
      yield putAction({ type: "OPT_IN_SUCCESS" });
      yield putAction({ type: "START_POLL_FOR_HANGOUT" });
    } else {
      yield putAction({ type: "OPT_IN_ERROR", error: "no active user" });
    }
  } catch (error) {
    yield putAction({ type: "OPT_IN_ERROR", error });
  }
}

function* pollForHangoutSaga() {
  let hangout: HangoutState | undefined = undefined;

  while (hangout === undefined) {
    yield putAction({ type: "FETCH_HANGOUT_REQUEST" });
    yield delay(5000);
    hangout = yield select(lenses.activeHangout);
  }
}

export function* mainSaga() {
  yield takeLatest("CREATE_USER_REQUEST", createUserSaga);
  yield takeLatest("OPT_IN_REQUEST", optInSaga);
  yield takeLatest("FETCH_HANGOUT_REQUEST", fetchActiveHangoutSaga);
  yield takeLatest("FETCH_HISTORY_REQUEST", fetchHistorySaga);
  yield takeLatest("START_POLL_FOR_HANGOUT", pollForHangoutSaga);

  console.log("Sagas are running...");
}

export function* rootSaga() {
  try {
    yield call(mainSaga);
  } catch (error) {
    console.error("Root saga died:", error);
  }
}
