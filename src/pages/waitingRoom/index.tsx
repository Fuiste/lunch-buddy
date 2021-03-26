import { useHistory } from "react-router";
import { APP_ROUTES } from "../../router";
import { HangoutState } from "../../store/state";
import { WithSession } from "../../util";

export type WaitingRoomProps = {
  activeHangout: HangoutState | undefined;
  submitOptIn: () => void;
} & WithSession;

export const WaitingRoom = (props: WaitingRoomProps) => {
  const history = useHistory();
  const { activeHangout, session, submitOptIn } = props;
  const { user, optedIn } = session;

  const content = optedIn ? (
    <h1>Waiting for partner...</h1>
  ) : (
    <div>
      <h2>Ready to hang?</h2>
      <button onClick={submitOptIn}>
        <span>Yes!</span>
      </button>
    </div>
  );

  if (user === undefined) {
    const frontDoor = APP_ROUTES.frontDoor.toPath();
    history.push(frontDoor);
  } else if (activeHangout !== undefined) {
    const hangout = APP_ROUTES.hangout.toPath();
    history.push(hangout);
  }

  return (
    <div>
      <h1>Waiting Room</h1>
      {content}
    </div>
  );
};
