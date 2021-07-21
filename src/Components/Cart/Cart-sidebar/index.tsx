import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Cart-item";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { StateRoot } from "../../../App";
import { clearBasket, removeFromBasket } from "../../..";

import "./Cart-sidebar.scss";

interface CartSidebarProps {
  className: string;
  closeCart: () => void;
  blur: string;
}
const CartSidebar = ({ className, closeCart, blur }: CartSidebarProps) => {
  const store = useSelector((state: StateRoot) => {
    return state;
  });

  const dispatch = useDispatch();

  let totalPrice = 0;
  console.log(store.orderedProducts);

  return (
    <div className={blur} onClick={closeCart}>
      <div className={className} onClick={(e) => e.stopPropagation()}>
        <div className="CartSidebar__header">
          <div className="title">Кошик</div>
          <button
            className="clear-basket"
            onClick={() => dispatch(clearBasket())}
          >
            очистити кошик
          </button>
        </div>
        <div className="CartSidebar__main">
          <div className="items">
            {store.orderedProducts.map((item: any) => {
              totalPrice += item.product.price * item.count;
              return (
                <CartItem
                  id={item.product.id}
                  key={item.product.id}
                  img={item.product.img}
                  title={item.product.title}
                  price={item.product.price}
                  amount={item.count}
                  remove={() => dispatch(removeFromBasket(item.product.id))}
                />
              );
            })}
          </div>
          <div className="footer">
            <div className="totalPrice">
              Сума <b>{totalPrice}</b> грн
            </div>
            <Link to="/basket" onClick={closeCart}>
              оформити замовлення
            </Link>
          </div>
        </div>
        <button>
          <CloseIcon onClick={closeCart} fontSize="large" color="action" />
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
