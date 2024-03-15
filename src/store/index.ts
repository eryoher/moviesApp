import { Constants } from "../constants";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

let store: any;

const bindMiddleware = (middleware: any) => {
  //   if (process.env.NODE_ENV !== Constants.ENVS.PROD) {
  //     const { composeWithDevTools } = require("redux-devtools-extension");
  //     return composeWithDevTools(applyMiddleware(...middleware));
  //   }
  return applyMiddleware(...middleware);
};

export function configureStore() {
  // store = createStore(reducers, bindMiddleware([sagaMiddleware]));

  store = createStore(reducers, compose(bindMiddleware([sagaMiddleware])));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
}

export function getStore() {
  return store;
}

export default configureStore;
