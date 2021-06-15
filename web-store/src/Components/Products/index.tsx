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
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
