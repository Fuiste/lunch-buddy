import createSagaMiddleware from "redux-saga";
import { compose, applyMiddleware, createStore } from "redux";
import { appReducer } from "./reducers";
import { rootSaga } from "./sagas";

// Init store with redux dev tools
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(appReducer, enhancer);

// Kick off root saga
sagaMiddleware.run(rootSaga);
