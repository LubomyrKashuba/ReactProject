import react from "react";

import "./ZoneCard.scss";

// interface ZoneProps{
//     colorZone:string
// }

function Zone({ srcZone, colorZone, timeZone, priceZone, priceDelivery }: any) {
  return (
    <div className="zone">
      <div>
        <img src={srcZone} alt="" />
      </div>
      <div>
        <div className="colorzone">
          <span>{colorZone}зона</span>
        </div>
        <ul>
          <li>
            Орієнтовний час доставки <span>{timeZone}</span> хвилин
          </li>
          <li>
            При замовленні від <span>{priceZone}</span> грн привеземо
            БЕЗКОШТОВНО
          </li>
          <li>
            При замовленні до <span>{priceZone}</span> грн вартість доставки{" "}
            <span>{priceDelivery}</span>
            грн
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Zone;
