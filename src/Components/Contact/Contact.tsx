import React from "react";
import ContactCard from "./ContactCard/ContactCard";
import "./Contact.scss";


function Contact() {
  return (
   <div className="contact">
     <div className="head">
     <h2>Наші</h2> <h2 className="contact__head">контакти</h2>
     </div>

<div className="contact__cards">
<h1>ТРЦ "King Cross Leopolis"</h1>
<h1>ТРЦ "Вікторія Гарденс"</h1>
<h1>ТРЦ "СПАРТАК"</h1>
</div>

     <div className="contact__cards">
       
<ContactCard
imgContact="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_one.svg"
contactText="с. Сокільники "
contactTextTwo="Вул. Стрийська, 30"
></ContactCard>
<ContactCard
imgContact="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_one.svg"
contactText="м. Львів"
contactTextTwo="Вул. Кульпарківська, 226 А"
></ContactCard>
<ContactCard
imgContact="https://www.tomatina.ua/wp-content/themes/tomatina/img/icons/contact_icon_one.svg"
contactText="м. Львів"
contactTextTwo="Вул. Мазепи, 1Б"
></ContactCard>
</div>
   </div>
  );
}

export default Contact;
