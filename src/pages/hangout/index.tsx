import { HangoutState, UserState } from "../../store/state";

export type HangoutProps = {
  activeUser: UserState | undefined;
  activeHangout: HangoutState | undefined;
};

export const Hangout = (props: HangoutProps) => {
  const { activeUser, activeHangout } = props;

  if (activeUser === undefined || activeHangout === undefined) {
    throw new Error("Somethign was undefined");
  }
  const toUserNames = (user: UserState) => {
    return <p>{user.name}</p>;
  };

  return (
    <div>
      <h1>Hanging Out with:</h1>
      <div>{activeHangout.attendees.map(toUserNames)}</div>
    </div>
  );
};
