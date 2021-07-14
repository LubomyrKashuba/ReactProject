import React from "react";


import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      
      <div className="Footer_component">
        <div className="left-ul">
        
        <h1>ВАКАНСІЇ</h1> 
        
        <h1>Договір Оферта</h1>
        
      </div>
          
      </div>
      <div className="Footer_component">
        <div className="adress">
        <div id="adress_button">
          
          <img alt="1" src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_one.svg"/></div>
        <div>
        <h2>м.Львів</h2>
        <p>ТРЦ Victoria Gardens, Кульпарківська 226 А</p>
        <p>ТРЦ Spartak, Мазепи 1Б</p>
        {/* <h2>с. Сокільники</h2>
        <p>ТРЦ King Cross, Стрийська 30</p> */}
        </div>
        </div>
      </div>
      <div className="Footer_component">
        <div className="phone" >
      <div id="phone_button"><img alt="1" src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_tree.svg"/></div>
      <a href="tel:+380631938575">+38 (063) 193 85 75</a>
     
      </div>
      <div className="clock">
      <div id="clock_button"><img alt="1" src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_foure.svg"/></div>
      <h2>Пн - Нд з 08:30 до 22:00</h2>
      </div>
      </div>
      <div className="Footer_component_folove">
        <h1>Слідкуй за нами</h1>
        <div className="logo">
        <div id="facebook_button" ><img alt="1" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></div>
        <div id="instagram_button"><img alt="1" src="https://img.icons8.com/plasticine/48/000000/instagram-new--v2.png"/></div>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
