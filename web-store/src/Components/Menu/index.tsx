import React from "react";
import Button from "./Menu-button";

import "./Menu.scss";

interface menuProps {
  active: number;
}
const Menu = ({ active }: menuProps) => {

  const menu = [
    {
      title: "сніданки",
      path: "/",
    },
    {
      title: "сaлати пасти",
      path: "/pasta",
    },
    {
      title: "салати",
      path: "/salad",
    },
    {
      title: "фіт сендвічі",
      path: "/sandwich",
    },
    {
      title: "супи",
      path: "/soup",
    },
    {
      title: "десерти",
      path: "/dessert",
    },
    {
      title: "напої",
      path: "/drinks",
    },
  ];

  return (
    <div className="Menu">
      <h2 className="Menu__title">
        Наше <span>меню</span>
      </h2>
      <ul className="Menu__list">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Button
                title={item.title}
                active={active === index ? "active" : ""}
                path={item.path}
              ></Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
