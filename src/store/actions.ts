import { CreateAccountConfig } from "../api";
import { HangoutState, UserState } from "./state";

export type Noop = {
  type: "NOOP";
};

export type CreateUserRequest = {
  type: "CREATE_USER_REQUEST";
  config: CreateAccountConfig;
};

export type CreateUserSuccess = {
  type: "CREATE_USER_SUCCESS";
  user: UserState;
};

export type CreateUserError = {
  type: "CREATE_USER_ERROR";
  error: any;
};

export type OptInRequest = {
  type: "OPT_IN_REQUEST";
  timestamp: Date;
};

export type OptInSuccess = {
  type: "OPT_IN_SUCCESS";
};

export type OptInError = {
  type: "OPT_IN_ERROR";
  error: any;
};

export type FetchHangoutRequest = {
  type: "FETCH_HANGOUT_REQUEST";
};

export type FetchHangoutSuccess = {
  type: "FETCH_HANGOUT_SUCCESS";
  hangout: HangoutState | undefined;
};

export type FetchHangoutError = {
  type: "FETCH_HANGOUT_ERROR";
  error: any;
};

export type FetchHistoryRequest = {
  type: "FETCH_HISTORY_REQUEST";
};

export type FetchHistorySuccess = {
  type: "FETCH_HISTORY_SUCCESS";
  history: HangoutState[];
};

export type FetchHistoryError = {
  type: "FETCH_HISTORY_ERROR";
  error: any;
};

export type Action =
  | Noop
  | CreateUserError
  | CreateUserRequest
  | CreateUserSuccess
  | OptInError
  | OptInRequest
  | OptInSuccess
  | FetchHangoutError
  | FetchHangoutRequest
  | FetchHangoutSuccess
  | FetchHistoryError
  | FetchHistoryRequest
  | FetchHistorySuccess;
