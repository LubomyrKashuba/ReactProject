import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

interface buttonProps {
  title: string;
  active: string;
  path: string;
}
const Button = ({ title, active, path }: buttonProps) => {
  return (
    <div className="Menu__Button">
      <Link className={active} to={path}>
        {title}
      </Link>
    </div>
  );
};

export default Button;
