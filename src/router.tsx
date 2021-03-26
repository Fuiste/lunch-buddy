import React from "react";
import { FrontDoorContainer } from "./pages/frontDoor/connector";
import { HangoutContainer } from "./pages/hangout/connector";
import { WaitingRoomContainer } from "./pages/waitingRoom/connector";

export type AppRoute = {
  pathId: string;
  toPath: (id?: string) => string;
  component: JSX.Element;
};

const frontDoorRoute: AppRoute = {
  pathId: "/",
  toPath: () => "/",
  component: <FrontDoorContainer />,
};

const waitingRoomRoute: AppRoute = {
  pathId: "/waiting-room",
  toPath: () => "/waiting-room",
  component: <WaitingRoomContainer />,
};

const hangoutRoute: AppRoute = {
  pathId: `/hangout`,
  toPath: () => `/hangout`,
  component: <HangoutContainer />,
};

export const APP_ROUTES = {
  frontDoor: frontDoorRoute,
  hangout: hangoutRoute,
  waitingRoom: waitingRoomRoute,
};
