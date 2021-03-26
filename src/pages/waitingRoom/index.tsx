import { useHistory } from "react-router";
import { APP_ROUTES } from "../../router";
import { HangoutState } from "../../store/state";
import { WithSession } from "../../util";

export type WaitingRoomProps = {
  activeHangout: HangoutState | undefined;
  submitOptIn: () => void;
} & WithSession;

export const WaitingRoom = (props: WaitingRoomProps) => {
  const { session } = props;
  const history = useHistory();

  if (session.user === undefined) {
    const frontDoor = APP_ROUTES.frontDoor.toPath();
    history.push(frontDoor);

    return <></>;
  }

  return (
    <div>
      <h1>Waiting room for {session.user.name}</h1>
    </div>
  );
};
