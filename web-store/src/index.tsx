import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { breakfast, pasta,salad } from "./data/data";
import { createStore } from "redux";

interface ActionType {
  type: string;
  value: string;
}

function counterReducer(
  state = {
    breakfast,
    pasta,
    salad
  },
  action: ActionType
) {
  switch (action.type) {
    // case "filterUsers":
    //   return { users: state.users.filter((item) => item.id > 5) };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
