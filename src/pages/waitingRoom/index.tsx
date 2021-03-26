import { useHistory } from "react-router";
import { APP_ROUTES } from "../../router";
import { HangoutState } from "../../store/state";
import { WithSession } from "../../util";

export type WaitingRoomProps = {
  activeHangout: HangoutState | undefined;
  submitOptIn: () => void;
} & WithSession;

export const WaitingRoom = (props: WaitingRoomProps) => {
  const { activeHangout, session, submitOptIn } = props;
  const { user, optedIn } = session;
  const history = useHistory();

  if (user === undefined) {
    const frontDoor = APP_ROUTES.frontDoor.toPath();
    history.push(frontDoor);

    return <></>;
  }

  if (activeHangout !== undefined) {
    const hangout = APP_ROUTES.hangout.toPath();
    history.push(hangout);

    return <></>;
  }

  const userWaiting = (
    <h1 className="waiting-room-pairing__title"> Waiting for a partner...</h1>
  );

  const userPaired = (<div>
    <h2>Are you ready to hang?</h2>
    <button onClick={submitOptIn}>
      <span>Yes!</span>
    </button>
  </div>);

  const content = optedIn ?
    { userWaiting }
    : { userPaired };


  return (
    <div className="waiting-room-page">
      <h1 className="waiting-room-title">Waiting Room</h1>
      {content}
    </div>
  );
};
