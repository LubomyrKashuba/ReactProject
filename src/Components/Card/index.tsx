import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { addToBasket } from "../..";

import "./Card.scss";


export interface cardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}
function Card(props: cardProps) {
  const [favorite, setFavorite] = React.useState(true);
  const [count, setCount] = React.useState(1);

  const dispatch = useDispatch();

  const handleBasket = () => {
    dispatch(addToBasket({ product: { ...props }, count }));
  };
  return (
    <div className="Card">
      <div className="Card__favorite" onClick={() => setFavorite(!favorite)}>
        {favorite ? (
          <FavoriteBorderIcon color="secondary" fontSize="large" />
        ) : (
          <FavoriteIcon color="secondary" fontSize="large" />
        )}
      </div>
      <div className="Card__img">
        <img alt="" src={props.img} />
      </div>
      <div className="Card__title">
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
      <div className="Card__description">{props.description}</div>
      <div className="Card__controls">
        <div>
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
        <button onClick={handleBasket}>замовити</button>
      </div>
    </div>
  );
}

export default Card;
