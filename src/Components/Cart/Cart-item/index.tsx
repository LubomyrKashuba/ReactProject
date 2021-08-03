import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../..";

import "./Cart-item.scss";

interface CartItemProps {
  id: number;
  title: string;
  img: string;
  price: number;
  amount: number;
  remove: () => {};
}
const CartItem = ({ id, img, title, price, amount, remove }: CartItemProps) => {

  const dispatch = useDispatch();

  return (
    <div className="CartItem">
      <Link to="">
        <img src={img} alt="" />
      </Link>
      <div className="CartItem__desc">
        <Link to="">{title}</Link>
        <div className="controls">
          <button type="button" className="decrement" onClick={() => dispatch(decrement(id))}>
            -
          </button>
          <div>{amount}</div>
          <button type="button" className="increment" onClick={() => dispatch(increment(id))}>
            +
          </button>
        </div>
        <div className="price">
          <b>{price * amount}</b>
          грн
        </div>
      </div>
      <button type="button" className="CartItem__remove" onClick={remove}>
        <CloseIcon color="action" />
      </button>
    </div>
  );
};

export default CartItem;
