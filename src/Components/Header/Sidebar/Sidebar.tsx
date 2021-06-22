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
      <div>ЗБЕРИ САМ</div>
      <div>ДОСТАВКА</div>
      <div>ВАКАНСІЇ</div>
      <div>КОНТАКТИ</div>
    </div>
  );
}

export default Sidebar;
