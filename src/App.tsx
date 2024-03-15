import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import configureStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
