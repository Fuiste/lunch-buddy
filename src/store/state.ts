export type UserState = {
  email: string;
};

export type AppState = {
  user: UserState | undefined;
};

export const defaultUserState = (): UserState | undefined => {
  return undefined;
};

export const defaultState = (): AppState => {
  const user = defaultUserState();
  return {
    user,
  };
};
