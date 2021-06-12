import React from "react";

import "./Card.scss";

interface cardProps {
  img: string;
  title: string;
  description: string;
}
function Card() {
  return (
    <div className="Card">
        <button></button>
      <div className="Card__img"><img  alt="Яйця з хрустким беконом та бурячковим айолі" src="https://www.tomatina.ua/wp-content/uploads/2021/02/yajczya-benedykt-z-hrustkym-bekonom-ta-buryachkovym-ajoli-350x350.png" /></div>
      <div className="Card__title"><div>Яйця з хрустким беконом та бурячковим айолі</div>
      <div>109</div></div>
      <div className="Card__description">ОБЕРІТЬ У ДОДАТКАХ СПОСІБ ПРИГОТУВАННЯ ЯЄЦЬ  Варені яйця/скрембл/яєчня, хрусткий бекон, хумус власного виробництва, припущені на вогні помідори чері, пряне броколі, халумі, салат мікс, боби едамаме, оливкова олія, орегано, сушена цибуля, мікрогрін, паприка шматочками, кунжут, соус бурячковий айолі</div>
    </div>
  );
}

export default Card;
