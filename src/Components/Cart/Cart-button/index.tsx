import React from "react";

import "./Cart-button.scss";

interface CartButtonProps {
  onClick: () => void;
  className: string;
  count: number;
  totalPrice: number;
}

const CartButton = ({
  onClick,
  className,
  count,
  totalPrice,
}: CartButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      <img
        src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/basket_green.svg"
        alt=" "
      />
      <div className="CartButton__img">
        <img
          src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/basket.svg"
          alt="  "
        />
        <span>{count}</span>
      </div>
      <div className="CartButton__price">
        <p>{totalPrice}</p>
        <span>грн</span>
      </div>
    </div>
  );
};

export default CartButton;
