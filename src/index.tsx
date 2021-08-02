import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reportWebVitals from "./reportWebVitals";

import App, { OrderedProductsInterface, products, StateRoot } from "./App";
import { cardProps } from "./Components/Card";

import "./index.css";

export interface ActionType {
  type: string;
  payload: OrderedProductsInterface;
  id: number;
  product: cardProps;
  products: products;
}

function counterReducer(
  state: StateRoot = {
    products: {} as products,
    orderedProducts: [] as OrderedProductsInterface[],
    favorite: [] as cardProps[],
  },
  action: ActionType
): StateRoot {
  switch (action.type) {
    case "addToStore":
      return {
        ...state,
        products: action.products,
      };
    case "addTOBasket":
      let arr: OrderedProductsInterface[] = [];
      let check = false;
      state.orderedProducts.forEach((item: OrderedProductsInterface) => {
        if (action.payload?.product.id === item.product.id) {
          check = true;
          item.count += action.payload.count;
        }
      });
      if (!check && action.payload) {
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
          (i: OrderedProductsInterface) => i.product.id !== action.id
        ),
      };
    case "clearBasket":
      return {
        ...state,
        orderedProducts: [],
      };
    case "increment":
      return {
        ...state,
        orderedProducts: state.orderedProducts.map(
          (item: OrderedProductsInterface) => {
            if (action.id === item.product.id) {
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
          (item: OrderedProductsInterface) => {
            if (action.id === item.product.id) {
              item.count > 1 ? (item.count -= 1) : (item.count = 1);
              return item;
            } else {
              return item;
            }
          }
        ),
      };
    case "addToFavorite":
      let array: cardProps[] = [...state.favorite];
      array.push(action.product);
      return {
        ...state,
        favorite: [...array],
      };
    case "removeFavorite":
      return {
        ...state,
        favorite: state.favorite.filter(
          (item: cardProps) => item.id !== action.id
        ),
      };
    default:
      return state;
  }
}

export const removeFavorite = (id: number) => ({
  type: "removeFavorite",
  id,
});
export const addToFavorite = (add: cardProps) => ({
  type: "addToFavorite",
  product: add,
});

export const addToStore = (add: products) => ({
  type: "addToStore",
  products: add,
});
export const addToBasket = (add: OrderedProductsInterface) => ({
  type: "addTOBasket",
  payload: add,
});

export const removeFromBasket = (id: number) => ({
  type: "deleteFromBasket",
  id,
});

export const clearBasket = () => ({
  type: "clearBasket",
});

export const increment = (id: number) => ({
  type: "increment",
  id,
});
export const decrement = (id: number) => ({
  type: "decrement",
  id,
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
