import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

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
import "./App.css";
import Vacancy from "./Components/Vacancy/Vacancy";

export interface orderedProductsInterface {
  product: cardProps;
  count: number;
}

export interface StateRoot {
  breakfast: cardProps[];
  pasta: cardProps[];
  salad: cardProps[];
  sandwich: cardProps[];
  soup: cardProps[];
  dessert: cardProps[];
  drink: cardProps[];
  orderedProducts: orderedProductsInterface[];
}

function App() {
  const [sidebar, setSidebar] = React.useState(false);
  const [cart, setCart] = React.useState(true);

  const store = useSelector((state: StateRoot) => {
    return state;
  });

  const useCartSidebar = () => {
    setCart(!cart);
  };

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
            <Products items={store.breakfast} />
          </Route>
          <Route path="/pasta">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={1} />
            <Products items={store.salad} />
          </Route>{" "}
          <Route path="/salad">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={2} />
            <Products items={store.pasta} />
          </Route>
          <Route path="/sandwich">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={3} />
            <Products items={store.sandwich} />
          </Route>
          <Route path="/soup">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={4} />
            <Products items={store.soup} />
          </Route>
          <Route path="/dessert">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={5} />
            <Products items={store.dessert} />
          </Route>
          <Route path="/drink">
            <CartButton onClick={useCartSidebar} />
            <Info />
            <Menu active={6} />
            <Products items={store.drink} />
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
        </Switch>
        
        <Route path="/contact">
            <CartButton onClick={useCartSidebar} />
            <Contact />
          </Route>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
