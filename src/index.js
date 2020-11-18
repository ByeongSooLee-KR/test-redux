import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
// import { numberReducer } from "./Redux/Reducer/numberReducer";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducer/index";

const store = createStore(rootReducer);

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
