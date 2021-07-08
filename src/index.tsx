import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App, { orderedProductsInterface } from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  breakfast,
  pasta,
  salad,
  sandwich,
  soup,
  dessert,
  drink,
} from "./data/data";

import "./index.css";

export interface ActionType {
  type: string;
  payload: any;
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
      let arr: any = [];
      let check = false;
      state.orderedProducts.forEach((item: orderedProductsInterface) => {
        if (action.payload.product.id === item.product.id) {
          check = true;
          item.count += action.payload.count;
        }
      });
      if (!check) {
        arr.push(action.payload);
      }
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, ...arr],
      };
    case "deleteFromBasket":
      return {
        ...state,
        orderedProducts: state.orderedProducts.filter(
          (i: orderedProductsInterface) => i.product.id !== action.payload
        ),
      };
    case "clearBasket":
      return {
        ...state,
        orderedProducts: action.payload,
      };
    default:
      return state;
  }
}

export const addToBasket = (add: orderedProductsInterface) => ({
  type: "addTOBasket",
  payload: add,
});

export const removeFromBasket = (id: number) => ({
  type: "deleteFromBasket",
  payload: id,
});

export const clearBasket = () => ({
  type: "clearBasket",
  payload: [],
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
