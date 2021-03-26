import { UserState } from "../../store/state";

export type WaitingRoomProps = {
  user: UserState | undefined;
};

export const WaitingRoom = (props: WaitingRoomProps) => {
  const { user } = props;

  if (user === undefined) {
    throw new Error("No user");
  }

  return (
    <div>
      <h1>Waiting room for {user.name}</h1>
    </div>
  );
};
