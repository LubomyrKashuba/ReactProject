import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Card.scss";

export interface cardProps {
  id?: number;
  img: string;
  title: string;
  description: string;
  price: number;
}
function Card({ img, title, description, price }: cardProps) {
  const [favorite, setFavorite] = React.useState(true);
  const [count, setCount] = React.useState(1);

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
        <img alt="" src={img} />
      </div>
      <div className="Card__title">
        <div>{title}</div>
        <div>{price}</div>
      </div>
      <div className="Card__description">{description}</div>
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
        <button>замовити</button>
      </div>
    </div>
  );
}

export default Card;
