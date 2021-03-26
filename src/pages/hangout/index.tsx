import { UserState } from "../../store/state";

export type HangoutProps = {
  user: UserState;
};

export const Hangout = () => {
  return (
    <div>
      <h1>Hanging Out</h1>
    </div>
  );
};
