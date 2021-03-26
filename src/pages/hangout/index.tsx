import { useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../router";
import { HangoutState, UserState } from "../../store/state";

export type HangoutProps = {
  activeUser: UserState | undefined;
  activeHangout: HangoutState | undefined;
};

export const Hangout = (props: HangoutProps) => {
  const { activeUser, activeHangout } = props;
  const history = useHistory();

  if (activeUser === undefined) {
    const frontDoor = APP_ROUTES.frontDoor.toPath();
    history.push(frontDoor);

    return <></>;
  }

  if (activeHangout === undefined) {
    const waitingRoom = APP_ROUTES.waitingRoom.toPath();
    history.push(waitingRoom);

    return <></>;
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
