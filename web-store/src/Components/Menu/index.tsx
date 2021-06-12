import React from "react";
import Button from "./Menu-button";

import "./Menu.scss";

const Menu = () => {
  const [active, setActive] = React.useState(0);
  
  const menu = [
    "сніданки до 12:00",
    "сaлати пасти",
    "салати",
    "фіт сендвічі",
    "супи",
    "десерти",
    "напої",
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
                title={item}
                active={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              ></Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
