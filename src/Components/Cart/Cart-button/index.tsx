import React from "react";
import { useSelector } from "react-redux";
import { orderedProductsInterface, StateRoot } from "../../../App";

import "./Cart-button.scss";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const store = useSelector((state: StateRoot) => {
    return state;
  });

  return (
    <div
      className={
        store.orderedProducts.length === 0
          ? "CartButton"
          : "CartButton open-cart"
      }
      onClick={onClick}
    >
      <img
        src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/basket_green.svg"
        alt=" "
      />
      <div className="CartButton__img">
        <img
          src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/basket.svg"
          alt="  "
        />
        <span>
          {store.orderedProducts.reduce(
            (acc: number, cur: orderedProductsInterface) => {
              return acc + cur.count;
            },
            0
          )}
        </span>
      </div>
      <div className="CartButton__price">
        <p>
          {store.orderedProducts.reduce(
            (acc: number, cur: orderedProductsInterface) => {
              return acc + cur.product.price * cur.count;
            },
            0
          )}
        </p>
        <span>грн</span>
      </div>
    </div>
  );
};

export default CartButton;
