import React from "react";
import { FrontDoorConnector } from "./pages/frontDoor/connector";
import { HangoutContainer } from "./pages/hangout/connector";
import { WaitingRoomContainer } from "./pages/waitingRoom/connector";

export const HANGOUT_ID = ":hangoutId";

export type AppRoute = {
  pathId: string;
  toPath: (id?: string) => string;
  component: JSX.Element;
};

const frontDoorRoute: AppRoute = {
  pathId: "/",
  toPath: () => "/",
  component: <FrontDoorConnector />,
};

const waitingRoomRoute: AppRoute = {
  pathId: "/waiting-room",
  toPath: () => "/waiting-room",
  component: <WaitingRoomContainer />,
};

const hangoutRoute: AppRoute = {
  pathId: `/hangout/${HANGOUT_ID}`,
  toPath: (id) => `/hangout/${id || ""}`,
  component: <HangoutContainer />,
};

export const APP_ROUTES = {
  frontDoor: frontDoorRoute,
  hangout: hangoutRoute,
  waitingRoom: waitingRoomRoute,
};
