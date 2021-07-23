import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reportWebVitals from "./reportWebVitals";

import App, { orderedProductsInterface, products, StateRoot } from "./App";
import { cardProps } from "./Components/Card";

import "./index.css";

export interface ActionType {
  type: string;
  payload: orderedProductsInterface | any;
}

function counterReducer(
  state: StateRoot = {
    products: {} as products,
    orderedProducts: [],
    favorite: [],
  },
  action: ActionType
) {
  switch (action.type) {
    case "addToStore":
      return {
        ...state,
        products: action.payload,
      };
    case "addTOBasket":
      let arr: orderedProductsInterface[] = [];
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
    case "increment":
      return {
        ...state,
        orderedProducts: state.orderedProducts.map(
          (item: orderedProductsInterface) => {
            if (action.payload === item.product.id) {
              item.count += 1;
              return item;
            } else {
              return item;
            }
          }
        ),
      };
    case "decrement":
      return {
        ...state,
        orderedProducts: state.orderedProducts.map(
          (item: orderedProductsInterface) => {
            if (action.payload === item.product.id) {
              item.count -= 1;
              return item;
            } else {
              return item;
            }
          }
        ),
      };
    case "addToFavorite":
      let array: cardProps[] = [...state.favorite];
      array.push(action.payload);
      return {
        ...state,
        favorite: [...array],
      };
    case "removeFavorite":
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export const removeFavorite = (id: number) => ({
  type: "removeFavorite",
  payload: id,
});
export const addToFavorite = (add: cardProps) => ({
  type: "addToFavorite",
  payload: add,
});

export const addToStore = (add: products) => ({
  type: "addToStore",
  payload: add,
});
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

export const increment = (id: number) => ({
  type: "increment",
  payload: id,
});
export const decrement = (id: number) => ({
  type: "decrement",
  payload: id,
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
