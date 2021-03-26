export type UserState = {
  id: string;
  email: string;
  name: string;
};

export type HangoutState = {
  timestamp: Date;
  attendees: UserState[];
};

export type SessionState = {
  user: UserState | undefined;
  optedIn: boolean;
};

export type AppState = {
  loading: boolean;
  error: any;
  session: SessionState;
  history: HangoutState[];
  activeHangout: HangoutState | undefined;
};

export const defaultHistoryState = (): HangoutState[] => {
  return [];
};

export const defaultSessionState = (): SessionState => {
  return {
    user: undefined,
    optedIn: false,
  };
};

export const defaultState = (): AppState => {
  const session = defaultSessionState();
  const history = defaultHistoryState();
  return {
    loading: false,
    error: null,
    history,
    session,
    activeHangout: undefined,
  };
};
