import { useHistory } from "react-router";
import { APP_ROUTES } from "../../router";
import { UserState } from "../../store/state";

export type WaitingRoomProps = {
  user: UserState | undefined;
};

export const WaitingRoom = (props: WaitingRoomProps) => {
  const { user } = props;
  const history = useHistory();

  if (user === undefined) {
    const frontDoor = APP_ROUTES.frontDoor.toPath();
    history.push(frontDoor);

    return <></>;
  }

  return (
    <div>
      <h1>Waiting room for {user.name}</h1>
    </div>
  );
};
