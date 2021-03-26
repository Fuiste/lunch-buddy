import { HangoutState, UserState } from "../store/state";

export type CreateAccountConfig = {
  email: string;
  name: string;
};

export const createUser = async (
  config: CreateAccountConfig
): Promise<UserState> => {
  const { name, email } = config;
  return { name, email, id: "fake-user" };
};

export const optIn = async (timestamp: Date): Promise<boolean> => {
  return true;
};

export const pollForHangout = async (): Promise<HangoutState | undefined> => {
  console.log("Returning nothing..");
  return undefined;
};

export const fetchHistory = async (): Promise<HangoutState[]> => {
  return [];
};
