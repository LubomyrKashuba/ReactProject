import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

interface SidebarProps{
  onClick:()=>void;
  active:boolean;
  blur: string;
}

function Sidebar({ onClick, active, blur }: SidebarProps) {
  return (
    <div className={blur} onClick={onClick}>
      <div className={active ? "sidebar sidebar__active" : "sidebar"}>
        <span>
          <button onClick={onClick}>×</button>
        </span>
        <Link onClick={onClick} to="/about">ПРО ТОМАТІНУ</Link>
        <Link onClick={onClick} to="/delivery">ДОСТАВКА</Link>
        <Link onClick={onClick} to="/vacancy">ВАКАНСІЇ</Link>
        <Link onClick={onClick} to="/contact">КОНТАКТИ</Link>
      </div>
    </div>
  );
}

export default Sidebar;
