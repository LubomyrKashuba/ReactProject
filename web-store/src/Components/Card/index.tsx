import React from "react";

import "./Card.scss";

export interface cardProps {
  id?: number;
  img: string;
  title: string;
  description: string;
  price: number;
}
function Card({img,title,description,price}:cardProps) {
  return (
    <div className="Card">
        <button></button>
      <div className="Card__img"><img  alt="" src={img} /></div>
      <div className="Card__title"><div>{title}</div>
      <div>{price}</div></div>
      <div className="Card__description">{description}</div>
    </div>
  );
}

export default Card;
