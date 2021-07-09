import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar({ onClick, active }: any) {
  return (
    <div className={active ? "sidebar sidebar__active" : "sidebar"}>
      <span>
        <button onClick={onClick}>×</button>
      </span>
      <Link to="/about">ПРО ТОМАТІНУ</Link>
      <Link to="/delivery">ДОСТАВКА</Link>
      <Link to="/vacancy">ВАКАНСІЇ</Link>
      <Link to="/contact">КОНТАКТИ</Link>
     
    </div>
  );
}

export default Sidebar;
