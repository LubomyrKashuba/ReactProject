import React from "react";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";

import "./Cart-page.scss";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const validate = (values: any) => {
  const errors: any = {};

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

  return errors;
};

const CartPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
              <div>
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
              <div>
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
              <div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  className={formik.errors.phone ? "valid" : "invalid"}
                  placeholder="+38 (xxx) xxx xx xx"
                  data-inputmask="'mask':'+3(999)999 99 99'"
                />
              </div>
            </div>
          </div>
          <div className="form-group"></div>
        </div>
        <div className="rightSide"></div>
      </form>
    </div>
  );
};

export default CartPage;
