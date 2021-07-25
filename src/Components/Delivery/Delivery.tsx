import React from "react";
import "./Delivery.scss";
import Zone from "./ZoneCard/Zone";

function Delivery() {
  return (
    <div className="Delivery">
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

        <Zone
          srcZone="https://www.tomatina.ua/wp-content/uploads/2020/11/bike-1.svg"
          colorZone="Жовта "
          timeZone="55 "
          priceZone="250 "
          priceDelivery="60 "
        ></Zone>

        <Zone
          srcZone="https://www.tomatina.ua/wp-content/uploads/2020/10/bike_red.svg"
          colorZone="Червона "
          timeZone="65 "
          priceZone="350 "
          priceDelivery="90 "
        ></Zone>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1286.804504512048!2d24.032541420339346!3d49.8310134470052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1627224808984!5m2!1suk!2sua"
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
