import React from "react";
import FrontDoor from "./pages/frontDoor";

export type AppRoute = {
  pathId: string;
  toPath: (id?: string) => string;
  component: JSX.Element;
};

const frontDoorRoute: AppRoute = {
  pathId: "/",
  toPath: () => "/",
  component: <FrontDoor />,
};

export const APP_ROUTES = {
  frontDoor: frontDoorRoute,
};
