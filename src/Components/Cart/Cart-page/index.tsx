import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { StateRoot } from "../../../App";
import CartItem from "../Cart-item";
import { removeFromBasket } from "../../..";
import { useFormik } from "formik";
import MaskedInput from "react-maskedinput";
import CustomSelect from "./select";

import "./Cart-page.scss";

interface Values {
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  houseNumber: string;
  email: string;
}

interface Errors {
  firstName: Boolean;
  lastName: Boolean;
  phone: Boolean;
  street: Boolean;
  houseNumber: Boolean;
}
export interface selectOption{
  value: String;
  label:String;
}
const options:selectOption[] = [
  { value: "Львів", label: "Львів" },
  { value: "Брюховичі", label: "Брюховичі" },
  { value: "Дубляни", label: "Дубляни" },
];
const validate = (values: Values) => {
  const errors = {} as Errors;

  if (values.firstName !== "") {
    errors.firstName = true;
  } else {
    errors.firstName = false;
  }

  if (values.lastName !== "") {
    errors.lastName = true;
  } else {
    errors.lastName = false;
  }

  if (values.phone !== "") {
    errors.phone = true;
  } else {
    errors.phone = false;
  }

  if (values.street !== "") {
    errors.street = true;
  } else {
    errors.street = false;
  }

  if (values.houseNumber !== "") {
    errors.houseNumber = true;
  } else {
    errors.houseNumber = false;
  }

  return errors;
};

const CartPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      street: "",
      houseNumber: "",
      email: "",
      frontDoor: "",
      flat: "",
      floor: "",
      intercom: "",
      city: "Виберіть місто",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const store = useSelector((state: StateRoot) => {
    return state;
  });

  const dispatch = useDispatch();

  let totalPrice = 0;

  const handleSubmit = () => {
    if (
      formik.errors.firstName &&
      formik.errors.lastName &&
      formik.errors.phone &&
      formik.errors.street &&
      formik.errors.houseNumber
    ) {
      console.log("Дані замовника", formik.values);
      console.log("Список товарів", store.orderedProducts);
    } else {
      console.error("you should fill in the gaps");
    }
  };
  return (
    <div className="CartPage">
      <div className="CartPage__title">Оформлення замовлення</div>
      <form className="CartPage__form" onSubmit={formik.handleSubmit}>
        <div className="leftSide">
          <div className="form-group">
            <div className="form-title">
              <b>1.</b> Контактні дані
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  placeholder="*Ваше ім'я"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  className={formik.errors.firstName ? "valid" : "invalid"}
                />
              </div>
              <div className="col-6">
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  placeholder="*Ваше прізвище"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  className={formik.errors.lastName ? "valid" : "invalid"}
                />
              </div>
            </div>
            <div className="col-12">
              <MaskedInput
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={formik.errors.phone ? "valid" : "invalid"}
                mask="+38 (111) 111 11 11"
              />
            </div>
            <div className="col-12">
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email, щоб отримати копію замовлення"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-title">
              <b>2.</b> Інформація про доставку
            </div>
            <div className="col-12">
              <CustomSelect
                options={options}
                value={formik.values.city}
                onChange={(value: any) =>
                  formik.setFieldValue("city", value.value)
                }
                className="select"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="*Введіть вулицю доставки"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                  className={formik.errors.street ? "valid" : "invalid"}
                />
              </div>
              <div className="col-6">
                <input
                  id="houseNumber"
                  name="houseNumber"
                  type="text"
                  placeholder="*№ будинку"
                  onChange={formik.handleChange}
                  value={formik.values.houseNumber}
                  className={formik.errors.houseNumber ? "valid" : "invalid"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <input
                  id="frontDoor"
                  name="frontDoor"
                  type="text"
                  placeholder="Під'їзд"
                  onChange={formik.handleChange}
                  value={formik.values.frontDoor}
                />
              </div>
              <div className="col-3">
                <input
                  id="flat"
                  name="flat"
                  type="text"
                  placeholder="Квартира"
                  onChange={formik.handleChange}
                  value={formik.values.flat}
                />
              </div>
              <div className="col-3">
                <input
                  id="floor"
                  name="floor"
                  type="text"
                  placeholder="Поверх"
                  onChange={formik.handleChange}
                  value={formik.values.floor}
                />
              </div>
              <div className="col-3">
                <input
                  id="intercom"
                  name="intercom"
                  type="text"
                  placeholder="Домофон"
                  onChange={formik.handleChange}
                  value={formik.values.intercom}
                />
              </div>
            </div>
            <div className="col-12">
              <iframe
                title="This is a unique title"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2573.6862412800538!2d24.032890498613906!3d49.82956201420431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1626025974468!5m2!1suk!2sua"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="form-group">
            <div className="form-title">Ваше замовлення</div>
            <div className="items">
              {store.orderedProducts.map((item: any) => {
                totalPrice += item.product.price * item.count;
                return (
                  <CartItem
                    id={item.product.id}
                    key={item.product.id}
                    img={item.product.img}
                    title={item.product.title}
                    price={item.product.price}
                    amount={item.count}
                    remove={() => dispatch(removeFromBasket(item.product.id))}
                  />
                );
              })}
            </div>
          </div>
          <div className="totalPrice col-12">
            <span>Сума:</span> <b>{totalPrice} грн</b>
          </div>
          <div className="col-12">
            <button onClick={handleSubmit} className="submit" type="submit">
              замовити
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartPage;
