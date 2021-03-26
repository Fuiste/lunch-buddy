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
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { session, submitAccountCreate } = props;
  const maybeSubmit = () => {
    if (email !== "" && name !== "") {
      submitAccountCreate({ email, name });
    } else {
      console.log(
        `Invalid email and name, got\nEmail: ${email}\nName: ${name}`
      );
    }
  };

  if (session.user !== undefined) {
    const waitingRoom = APP_ROUTES.waitingRoom.toPath();
    history.push(waitingRoom);
  }

  return (
    <div className="front-door-page">
      <div className="front-door-fake-container">
        <h1 className="front-door-title">🍕Lunch Buddy🌮</h1>
        <p className="front-door-copy">Sign in below to be paired with your lunch buddy!</p>
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
    </div>
  );
};
