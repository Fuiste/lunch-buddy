import React from "react";
import { useHistory } from "react-router";
import { CreateAccountConfig } from "../../api";
import { APP_ROUTES } from "../../router";
import { WithSession } from "../../util";
import logo from "./logo.svg";

export type FrontDoorProps = {
  submitAccountCreate: (config: CreateAccountConfig) => void;
} & WithSession;

export const FrontDoor = (props: FrontDoorProps) => {
  const { session } = props;
  const history = useHistory();

  if (session.user !== undefined) {
    const waitingRoom = APP_ROUTES.waitingRoom.toPath();
    history.push(waitingRoom);

    return <></>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default FrontDoor;
