import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import AcUnitIcon from '@material-ui/icons/AcUnit';


import "./Header.scss";

function Header({ onClick }: any) {
  return (
    <div className="Header">
      <header>
        <div className="logo">
          <img
            src="https://www.tomatina.ua/wp-content/uploads/2020/10/logo_one-1.svg"
            alt="Tomatina"
          />
        </div>
        <div className="center">
          <ul className="center-ul">
            <li>МЕНЮ</li>
            <li>ЗБЕРИ САМ</li>
            <li>ДОСТАВКА</li>
          </ul>
        </div>
        <div className="right">
          <div className="right-left">ЗАЛИШИТИ ВіДГУК</div>
          <div>
            <button id="likeButton"><AcUnitIcon /></button>
          </div>
          <div className="right-center">
            <button id="phoneButton">phone </button>
            <div>
              <h4>+38 (063) 117 06 58</h4>
              <p>Працюємо Пн - Нд з 08:30 до 22:00</p>
            </div>
          </div>
          <div className="right-right">ВХІД</div>
          <div>
            <button id="menuButton" onClick={onClick}>
              menu
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
