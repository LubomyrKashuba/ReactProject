import React from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

interface MenuHeaderProps {
  url: string;
  text: string;
  path: string;
}

function MenuHeader({ url, text, path }: MenuHeaderProps) {
  return (
    <div className="MenuHeader">
      <Link to={path}>
        <div className='divImg'>
          <img src={url} alt="" />
        </div>

        <h3 className="HeaderMenuTitle">{text}</h3>
      </Link>
    </div>
  );
}

export default MenuHeader;
