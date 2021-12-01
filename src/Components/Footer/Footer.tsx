import React from "react";
import { Link } from "react-router-dom";
import ButtonHeader from "../Header/ButtonHeader/Index";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PlaceIcon from "@material-ui/icons/Place";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_component">
        <div className="left-ul">
          <Link to="/vacancy">ВАКАНСІЇ</Link>

          <Link to="/Oferta">Договір Оферта</Link>
        </div>
      </div>
      <div className="Footer_component">
        <div className="adress">
          <div id="adress_button">
            <ButtonHeader icons={<PlaceIcon></PlaceIcon>}></ButtonHeader>
          </div>
          <div>
            <h2>м.Львів</h2>
            <p>ТРЦ Victoria Gardens, Кульпарківська 226 А</p>
            <p>ТРЦ Spartak, Мазепи 1Б</p>
          </div>
        </div>
      </div>
      <div className="Footer_component">
        <div className="phone">
          <div id="phone_button">
            <ButtonHeader
              icons={<PhoneIphoneIcon></PhoneIphoneIcon>}
            ></ButtonHeader>
          </div>
          <a href="tel:+380631938575">+38 (063) 193 85 75</a>
        </div>
        <div className="clock">
          <div id="clock_button">
            <ButtonHeader
              icons={<AccessTimeIcon></AccessTimeIcon>}
            ></ButtonHeader>
          </div>
          <h2>Пн - Нд з 08:30 до 22:00</h2>
        </div>
      </div>
      <div className="Footer_component_folove">
        <h1>Слідкуй за нами</h1>
        <div className="logo">
          <div id="facebook_button">
            <ButtonHeader icons={<FacebookIcon></FacebookIcon>}></ButtonHeader>
          </div>
          <div id="instagram_button">
            <ButtonHeader
              icons={<InstagramIcon></InstagramIcon>}
            ></ButtonHeader>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
