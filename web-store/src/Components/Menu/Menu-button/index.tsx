import React from "react";

import "./Button.scss";

interface buttonProps {
  title: string;
  active: string;
  onClick: () => void;
}
const Button = ({ title, active, onClick }: buttonProps) => {
  return (
    <div>
      <button className={active} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
