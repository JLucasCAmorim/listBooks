import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Reactotron from '../config/reactotron'

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
