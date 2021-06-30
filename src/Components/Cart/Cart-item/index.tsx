import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import "./Cart-item.scss";

interface CartItemProps {
  title: string;
  img: string;
  price:number;
  amount:number;
}
const CartItem = ({ img, title,price,amount }:CartItemProps) => {
  const [count, setCount] = React.useState(amount);
  return (
    <div className="CartItem">
      <Link to="">
        <img
          src={img}
          alt=""
        />
      </Link>
      <div className="CartItem__desc">
        <Link to="">{title}</Link>
        <div className="controls">
          <button
            className="decrement"
            onClick={() => setCount(count > 1 ? count - 1 : count)}
          >
            -
          </button>
          <div>{count}</div>
          <button className="increment" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <div className="price">
          <b>{price}</b> {/*!!! */}
          грн
        </div>
      </div>
      <button className="CartItem__remove">
        <CloseIcon color="action" />
      </button>
    </div>
  );
};

export default CartItem;
