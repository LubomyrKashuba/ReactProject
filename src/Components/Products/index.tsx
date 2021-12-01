import React from "react";
import Card, { cardProps } from "../Card";

import "./Products.scss";

interface productsProps {
  items: cardProps[];
  fav?: boolean;
}

const Products = ({ items, fav }: productsProps) => {
  return (
    <div className="Products">
      {items.map((item: cardProps) => {
        return (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
            fav={fav}
          />
        );
      })}
    </div>
  );
};

export default Products;
