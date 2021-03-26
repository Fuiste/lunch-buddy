import React, { useState } from "react";
import { useHistory } from "react-router";
import { CreateAccountConfig } from "../../api";
import { APP_ROUTES } from "../../router";
import { WithSession } from "../../util";
import { Input } from '@material-ui/core'

import './style.scss'

export type FrontDoorProps = {
  submitAccountCreate: (config: CreateAccountConfig) => void;
} & WithSession;

export const FrontDoor = (props: FrontDoorProps) => {
  const { session, submitAccountCreate } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  if (session.user !== undefined) {
    const waitingRoom = APP_ROUTES.waitingRoom.toPath();
    history.push(waitingRoom);

    return <></>;
  }

  const maybeSubmit = () => {
    if (email !== "" && name !== "") {
      submitAccountCreate({ email, name });
    } else {
      console.log(
        `Invalid email and name, got\nEmail: ${email}\nName: ${name}`
      );
    }
  };

  return (
    <div className="front-door-page">
      <h1 className="front-door-title">Lunch Buddy</h1>
      <form
        className="front-door-signup"
        onSubmit={(e) => {
          e.preventDefault();
          maybeSubmit();
        }}
      >
        <label>
          Email:
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <Input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FrontDoor;
