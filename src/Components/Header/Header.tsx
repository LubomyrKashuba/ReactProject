import React from "react";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import MenuHover from "./Menu/MunuHover";
import MaskedInput from "react-maskedinput";
import { useFormik } from "formik";

import ButtonHeader from "./ButtonHeader/Index";

import "./Header.scss";
import { Backdrop } from "@material-ui/core";

interface HeaderProps {
  onClick: () => void;
}

function Header({ onClick }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const [feedBack, setFeedBack] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      area: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setFeedBack(true);
      setTimeout(() => {
        setOpen(false)
        setFeedBack(false);
      }, 2500);
    },
  });

  const modal = (
    <div className="FeedBack">
      <div className="FeedBack__title"> Залишіть відгук</div>
      <form className="FeedBack__form" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              id="firstName"
              name="firstName"
              type="firstName"
              placeholder="*Ваше ім'я"
              onChange={formik.handleChange}
              value={formik.values.firstName}
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
            mask="+38 (111) 111 11 11"
          />
        </div>
        <div className="col-12">
          <textarea
            id="area"
            name="area"
            placeholder="Залиште свій відгук тут..."
            onChange={formik.handleChange}
            value={formik.values.area}
          />
        </div>
        {!feedBack ? (
          <button type="submit">ЗАЛИШИТИ ВІДГУК</button>
        ) : (
          <button type="button">Дякую за ваше повідомлення!</button>
        )}
      </form>
      <div className="closeButton">
        <CloseIcon
          onClick={() => setOpen(false)}
          fontSize="large"
          color="action"
        />
      </div>
    </div>
  );

  return (
    <div className="Header">
      <header>
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.tomatina.ua/wp-content/uploads/2020/10/logo_one-1.svg"
              alt="Tomatina"
            />
          </Link>
        </div>
        <div className="center">
          <ul className="center-ul">
            <li className="MenuButtonHeader">
              МЕНЮ
              <MenuHover />
            </li>
            <Link to="/vacancy">
              <li className="HeaderRout">ВАКАНCІЇ</li>
            </Link>
            <Link to="/delivery">
              <li className="HeaderRout">ДОСТАВКА</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <button
            className="right-left"
            type="button"
            onClick={() => setOpen(true)}
          >
            ЗАЛИШИТИ ВіДГУК
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {modal}
          </Modal>
          <Link to="/favorite">
            <ButtonHeader
              icons={<FavoriteBorderIcon></FavoriteBorderIcon>}
            ></ButtonHeader>
          </Link>
          <div className="right-center">
            <ButtonHeader icons={<PhoneIphoneIcon />}></ButtonHeader>
            <div>
              <h4>
                <a href="tel:+380631938575">+38 (063) 193 85 75</a>
              </h4>
              <p>Працюємо з 08:30 до 22:00</p>
            </div>
          </div>
          <div>
            <ButtonHeader
              icons={<MenuIcon onClick={onClick}></MenuIcon>}
            ></ButtonHeader>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
