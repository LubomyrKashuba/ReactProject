import React from "react";
import { useDispatch } from "react-redux";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

import { addToBasket, addToFavorite, removeFavorite } from "../..";

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
  const [modal, setModal] = React.useState(false);

  const dispatch = useDispatch();

  const handleBasket = () => {
    dispatch(addToBasket({ product: { ...props }, count }));
    setModal(false);
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
      <div className="Card__img" onClick={() => setModal(true)}>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={() => setModal(false)}
        className="Card__modal"
      >
        <div className="paper">
          <div className="paper__title">{props.title}</div>
          <div>
            <div className="paper__img">
              <img alt="" src={props.img} />
            </div>
            <div className="paper__desc">
              <span>Опис:</span>
              <div>{props.description}</div>
              <div className="paper__price">
                <span>Ціна:</span>
                <div>{props.price}</div>
              </div>
              <div className="Card__controls">
                <div>
                  <button
                    className="decrement"
                    onClick={() => setCount(count > 1 ? count - 1 : count)}
                  >
                    -
                  </button>
                  <div>{count}</div>
                  <button
                    className="increment"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <button onClick={handleBasket}>замовити</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
