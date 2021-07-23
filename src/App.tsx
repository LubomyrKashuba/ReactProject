import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import Info from "./Components/Info";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Sidebar from "./Components/Header/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { cardProps } from "./Components/Card";
import AboutUs from "./Components/AboutTomatina/index";
import Delivery from "./Components/Delivery/Delivery";
import CartButton from "./Components/Cart/Cart-button";
import CartSidebar from "./Components/Cart/Cart-sidebar";
import CartPage from "./Components/Cart/Cart-page";
import Contact from "./Components/Contact/Contact";
import Vacancy from "./Components/Vacancy/Vacancy";
import Favorite from "./Components/Favorite";
import { addToStore } from ".";

import "./App.css";

export interface orderedProductsInterface {
  product: cardProps;
  count: number;
}
export interface products {
  breakfast: cardProps[];
  pasta: cardProps[];
  salad: cardProps[];
  sandwich: cardProps[];
  soup: cardProps[];
  dessert: cardProps[];
  drink: cardProps[];
}
export interface StateRoot {
  products: products;
  favorite: cardProps[];
  orderedProducts: orderedProductsInterface[];
}
fetch('http://localhost:8000').then(res=>console.log(res))

function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((res) => dispatch(addToStore(res)))
      .then(() => setLoading(!loading));
  }, []);

  const [sidebar, setSidebar] = React.useState(false);
  const [cart, setCart] = React.useState(true);

  const store = useSelector((state: StateRoot) => {
    return state;
  });
  const useCartSidebar = () => {
    setCart(!cart);
  };
  if (loading) {
    return (
      <Router>
        <CartSidebar
          closeCart={useCartSidebar}
          className={cart ? "CartSidebar" : "CartSidebar open"}
          blur={!cart ? "blur" : ""}
        />
        <div className={cart ? "App" : "App disabled"}>
          <Sidebar active={sidebar} onClick={() => setSidebar(false)} />
          <Header onClick={() => setSidebar(true)} />
          <Switch>
            <Route exact path="/">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={0} />
              <Products items={store.products.breakfast} />
            </Route>
            <Route path="/pasta">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={1} />
              <Products items={store.products.salad} />
            </Route>{" "}
            <Route path="/salad">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={2} />
              <Products items={store.products.pasta} />
            </Route>
            <Route path="/sandwich">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={3} />
              <Products items={store.products.sandwich} />
            </Route>
            <Route path="/soup">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={4} />
              <Products items={store.products.soup} />
            </Route>
            <Route path="/dessert">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={5} />
              <Products items={store.products.dessert} />
            </Route>
            <Route path="/drink">
              <CartButton onClick={useCartSidebar} />
              <Info />
              <Menu active={6} />
              <Products items={store.products.drink} />
            </Route>
            <Route path="/about">
              <CartButton onClick={useCartSidebar} />
              <AboutUs />
            </Route>
            <Route path="/delivery">
              <CartButton onClick={useCartSidebar} />
              <Delivery />
            </Route>
            <Route path="/vacancy">
              <CartButton onClick={useCartSidebar} />
              <Vacancy />
            </Route>
            <Route path="/basket">
              <CartPage />
            </Route>
            <Route path="/contact">
              <CartButton onClick={useCartSidebar} />
              <Contact />
            </Route>
            <Route path="/favorite">
              <CartButton onClick={useCartSidebar} />
              <Favorite />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  } else {
    return <CircularProgress color="secondary" className="spinner" />;
  }
}

export default App;
