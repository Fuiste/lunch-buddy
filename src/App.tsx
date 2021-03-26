import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { APP_ROUTES } from "./router";
import "./App.css";

function App() {
  const { frontDoor } = APP_ROUTES;

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route path={frontDoor.pathId}>{frontDoor.component}</Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
