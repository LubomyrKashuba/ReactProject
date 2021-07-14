// import react from "react";

import "./ContactCard.scss";

 interface ContactProps{
  imgContact:string;
  contactText:string;
  contactTextTwo:string;
 }

function Contact({ imgContact, contactText, contactTextTwo }: ContactProps) {
  return (
    <div className="Contact__card">
      <div className="contact__line">
        <img className="contact__img" src={imgContact} alt="img" />
        <div className="text">
          <p className="contact__text">{contactText}</p>
          <p className="contact__text__two">{contactTextTwo}</p>
        </div>
      </div>

      <div className="contacts">
        <div className="contact__line">
          <img
            className="contact__img"
            src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_two.svg"
            alt="img"
          />
          <div className="text">
            <p className="contact__text">service@tomatina.ua</p>
          </div>
        </div>
      </div>
      <div className="contacts">
        <div className="contact__line">
          <img
            className="contact__img__phone"
            src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_tree.svg"
            alt="img"
          />

          <div className="text">
            <p className="contact__text">+38 (096) 195 03 87</p>
          </div>
        </div>
      </div>

      <div className="contacts">
        <div className="contact__line">
          <img
            className="contact__img"
            src="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_foure.svg"
            alt="img"
          />
          <div className="text">
            <p className="contact__text">Пн - Нд з 10:00 до 22:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
