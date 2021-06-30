import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Cart-item";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { StateRoot } from "../../../App";

import "./Cart-sidebar.scss";

interface CartSidebarProps {
  className: string;
  closeCart: () => void;
  blur:string;
}
const CartSidebar = ({ className, closeCart,blur }: CartSidebarProps) => {
  const store = useSelector((state: StateRoot) => {
    return state;
  });

  let filteredBasked: any = [];
  let check = true;
  store.orderedProducts.forEach((item, i, arr) => {
    filteredBasked.forEach((subItem: any) => {
      if (subItem.product.id === item.product.id) {
        // subItem.count +=item.count
        check = false;
        // console.log(subItem.count, item.count)
      } else {
        check = true;
      }
    });
    if (check) {
      filteredBasked.push(item);
    }
  });

  console.log(filteredBasked);
  return (
    <div className={blur} onClick={closeCart}>
      <div className={className}>
        <div className="CartSidebar__header">
          <div className="title">Кошик</div>
          <button className="clear-basket">очистити кошик</button>
        </div>
        <div className="CartSidebar__main">
          <div className="items">
            {filteredBasked.map((item: any) => {
              return (
                <CartItem
                  key={item.product.id}
                  img={item.product.img}
                  title={item.product.title}
                  price={item.product.price}
                  amount={item.count}
                />
              );
            })}
          </div>
          <div className="footer">
            <div className="totalPrice">
              Сума <b>0</b> грн
            </div>
            <Link to="/basket">оформити замовлення</Link>
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
