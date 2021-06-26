import React from "react";
import Card, { cardProps } from "../Card";

import "./Products.scss";

interface productsProps {
  items: cardProps[];
}

const Products = ({ items }: productsProps) => {
  

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
          />
        );
      })}
    </div>
  );
};

export default Products;
