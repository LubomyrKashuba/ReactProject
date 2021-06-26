import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { orderedProductsInterface } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  breakfast,
  pasta,
  salad,
  sandwich,
  soup,
  dessert,
  drink,
} from "./data/data";

interface ActionType {
  type: string;
  payload: never;
}

function counterReducer(
  state = {
    breakfast,
    pasta,
    salad,
    sandwich,
    soup,
    dessert,
    drink,
    orderedProducts: [],
  },
  action: ActionType
) {
  switch (action.type) {
    case "addTOBasket":
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, action.payload],
      };
    default:
      return state;
  }
}

export const addToBasket = (add: orderedProductsInterface) => ({
  type: "addTOBasket",
  payload: add,
});

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
