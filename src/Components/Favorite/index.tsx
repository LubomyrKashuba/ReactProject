import React from "react";
import { useSelector } from "react-redux";
import { StateRoot } from "../../App";
import Products from "../Products";


const Favorite = () => {
  const store = useSelector((state: StateRoot) => {
    return state.favorite;
  });

  return (
    <div className="Favorite">
      <h2 className="Menu__title">
        Улюблені <span>страви</span>
      </h2>
      <Products fav items={store} />
    </div>
  );
};

export default Favorite;
