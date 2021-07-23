import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { addToBasket, addToFavorite, removeFavorite } from "../..";
import CloseIcon from "@material-ui/icons/Close";

import "./Card.scss";

export interface cardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  fav?: boolean;
}
function Card(props: cardProps) {
  const [favorite, setFavorite] = React.useState(true);
  const [count, setCount] = React.useState(1);

  const dispatch = useDispatch();

  const handleBasket = () => {
    dispatch(addToBasket({ product: { ...props }, count }));
  };
  const addFavorite = () => {
    dispatch(addToFavorite({ ...props }));
    setFavorite(false);
  };
  const deleteFavorite = () => {
    dispatch(removeFavorite(props.id));
    setFavorite(true);
  };
  return (
    <div className="Card">
      {!props.fav ? (
        <div className="Card__favorite">
          {favorite ? (
            <FavoriteBorderIcon
              onClick={addFavorite}
              color="secondary"
              fontSize="large"
            />
          ) : (
            <FavoriteIcon
              onClick={deleteFavorite}
              color="secondary"
              fontSize="large"
            />
          )}
        </div>
      ) : (
        <div className="Card__favorite">
          <CloseIcon onClick={deleteFavorite} fontSize="large" color="action" />
        </div>
      )}
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
