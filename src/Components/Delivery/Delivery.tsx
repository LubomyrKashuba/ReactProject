import react from "react";
import "./Delivery.scss";
import Zone from "./ZoneCard/Zone";

function Delivery() {
  return (
    <div>
      <div>
        <p>
          Доставка та <span>оплата</span>
        </p>
        <div>
          <Zone
            srcZone="https://www.tomatina.ua/wp-content/uploads/2020/10/bike_green.svg"
            colorZone="Зелена "
            timeZone="39 "
            priceZone="250 "
            priceDelivery="60 "
          ></Zone>
        </div>
        <div>
          <Zone
            srcZone="https://www.tomatina.ua/wp-content/uploads/2020/11/bike-1.svg"
            colorZone="Жовта "
            timeZone="55 "
            priceZone="250 "
            priceDelivery="60 "
          ></Zone>
        </div>
        <div>
          <Zone
            srcZone="https://www.tomatina.ua/wp-content/uploads/2020/10/bike_red.svg"
            colorZone="Червона "
            timeZone="65 "
            priceZone="350 "
            priceDelivery="90 "
          ></Zone>
        </div>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2573.6862412800538!2d24.032890498613906!3d49.82956201420431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1626025974468!5m2!1suk!2sua"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div className="pay">Оплата</div>
      <div className="payOption">
        <div className="payOptionDown">
          <div>
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/10/pay_page_one.svg"
              alt=""
            />
          </div>
          <div>
            <div className="payHeader">Оплата LiqPay</div>
            <div className="payFooter">
              Розраховуйся онлайн за своє замовлення через сервіс LiqPay на
              сайті
            </div>
          </div>
        </div>
        <div className="payOptionDown">
          <div>
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/10/pay_page_two.svg"
              alt=""
            />
          </div>
          <div>
            <div className="payHeader">Оплата карткою</div>
            <div className="payFooter">
              Наш кур'єр має з собою термінал та приймає карту для оплати
            </div>
          </div>
        </div>
        <div className="payOptionDown">
          <div>
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/10/pay_page_tree-1.svg"
              alt=""
            />
          </div>
          <div>
            <div className="payHeader">Оплата готівкою</div>
            <div className="payFooter">
              Сплачуй готівкою при отриманні замовлення, попередь якщо потрібна
              решта
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
