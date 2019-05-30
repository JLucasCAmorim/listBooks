import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';

import "./src/config/reactotron";
import store from "./src/store";
import Routes from "./src/routes";

const App = () => (
  <Provider store={store}>
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FEE034" />
      <Routes />
    </>
  </Provider>
);

export default App;
