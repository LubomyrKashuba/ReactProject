

import "./ZoneCard.scss";

interface ZoneProps {
  srcZone:string;
  colorZone: string;
  timeZone:string;
  priceZone:string;
  priceDelivery:string;

}

function Zone({ srcZone, colorZone, timeZone, priceZone, priceDelivery }: ZoneProps) {
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
