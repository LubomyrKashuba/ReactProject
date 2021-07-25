import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import "./Header.scss";
import MenuHover from "./Menu/MunuHover";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader/Index";

function Header({ onClick }: any) {
  return (
    <div className="Header">
      <header>
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/10/logo_one-1.svg"
              alt="Tomatina"
            />
          </Link>
        </div>
        <div className="center">
          <ul className="center-ul">
            <li className="MenuButtonHeader">
              МЕНЮ
              <MenuHover />
            </li>
            <Link to="/vacancy">
              <li className="HeaderRout">ВАКАНCІЇ</li>
            </Link>
            <Link to="/delivery">
              <li className="HeaderRout">ДОСТАВКА</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <div className="right-left">ЗАЛИШИТИ ВіДГУК</div>
          <Link to="/favorite">
            <ButtonHeader
              icons={<FavoriteBorderIcon></FavoriteBorderIcon>}
            ></ButtonHeader>
          </Link>
          <div className="right-center">
            <ButtonHeader icons={<PhoneIphoneIcon />}></ButtonHeader>
            <div>
              <h4>+38 (063) 117 06 58</h4>
              <p>Працюємо з 08:30 до 22:00</p>
            </div>
          </div>
          {/* <div className="right-right">
            ВХІД
            <div className="right-right-icon">
              <PermIdentityIcon />
            </div>
          </div> */}
          <div>
            <ButtonHeader
              icons={<MenuIcon onClick={onClick}></MenuIcon>}
            ></ButtonHeader>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
