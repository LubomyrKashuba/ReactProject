import React from "react";


import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      
      <div className="Footer_component">
        <div className="left-ul">
        <a href="#">ВАКАНСІЇ</a>
        <a href="#">Договір Оферта</a>
        
      </div>
          
      </div>
      <div className="Footer_component">
        <div className="adress">
        <div id="adress_button"><img src="https://img.icons8.com/android/24/000000/place-marker.png"/></div>
        <div>
        <h2>м.Львів</h2>
        <p>ТРЦ Victoria Gardens, Кульпарківська 226 А</p>
        <p>ТРЦ Spartak, Мазепи 1Б</p>
        <h2>с. Сокільники</h2>
        <p>ТРЦ King Cross, Стрийська 30</p>
        </div>
        </div>
      </div>
      <div className="Footer_component">
        <div className="phone" >
      <div id="phone_button"><img src="https://img.icons8.com/metro/26/000000/phone.png"/></div>
      <a href="tel:+380631938575">+38 (063) 193 85 75</a>
     
      </div>
      <div className="clock">
      <div id="clock_button"><img src="https://img.icons8.com/material-sharp/24/000000/clock.png"/></div>
      <h2>Пн - Нд з 08:30 до 22:00</h2>
      </div>
      </div>
      <div className="Footer_component_folove">
        <p>Слідкуй за нами</p>
        <div className="logo">
        <div id="facebook_button" ><img  src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></div>
        <div id="instagram_button"><img src="https://img.icons8.com/plasticine/48/000000/instagram-new--v2.png"/></div>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
