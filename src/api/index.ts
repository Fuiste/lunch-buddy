import { HangoutState, UserState } from "../store/state";

const BASE_API = "http://54.196.86.228:5000";
const USER_ENDPOINT = `${BASE_API}/`;
const OPT_IN_ENDPOINT = `${BASE_API}/confirmation`;
const HANGOUT_ENDPOINT = `${BASE_API}/launchmeeting`;

export type CreateAccountConfig = {
  email: string;
  name: string;
};

export const createUser = async (
  config: CreateAccountConfig
): Promise<UserState> => {
  const res = await fetch(USER_ENDPOINT, {
    method: "post",
    body: JSON.stringify(config),
  });

  if (res.ok) {
    return {
      ...config,
      id: config.email,
    };
  }

  throw new Error(`Error creating user, HTTP ${res.status}`);
};

export const optIn = async (email: string): Promise<boolean> => {
  const res = await fetch(OPT_IN_ENDPOINT, {
    method: "post",
    body: JSON.stringify({ email }),
  });

  if (res.ok) {
    return true;
  }

  throw new Error(`Error opting in, HTTP ${res.status}`);
};

export const pollForHangout = async (
  email: string
): Promise<HangoutState | undefined> => {
  const res = await fetch(
    `${HANGOUT_ENDPOINT}?email=${encodeURIComponent(email)}`
  );

  if (res.ok) {
    return res.json();
  }

  throw new Error(`Error fetching hangout, HTTP ${res.status}`);
};

export const fetchHistory = async (email: string): Promise<HangoutState[]> => {
  return [];
};
