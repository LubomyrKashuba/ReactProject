import React from "react";
import "./Sidebar.scss";

function Sidebar({ onClick, active }: any) {
  return (
    <div className={active ? "sidebar sidebar__active" : "sidebar"}>
      <span>
        <button onClick={onClick}>×</button>
      </span>
      <div>ПРО ТОМАТІНУ</div>
      <div>ЗБЕРИ САМ</div>
      <div>ДОСТАВКА</div>
      <div>ВАКАНСІЇ</div>
      <div>КОНТАКТИ</div>
    </div>
  );
}

export default Sidebar;
