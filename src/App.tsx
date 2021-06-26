import React from "react";
import Info from "./Components/Info";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Sidebar from "./Components/Header/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { cardProps } from "./Components/Card";
import AboutUs from "./Components/AboutTomatina/index";

import "./App.css";
import CartButton from "./Components/Cart/Cart-button";

export interface orderedProductsInterface {
  product: cardProps;
  count: number;
}

interface StateRoot {
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

  const store = useSelector((state: StateRoot) => {
    return state;
  });

  const openCart = () => {
    console.log(store.orderedProducts);
  };
  return (
    <Router>
      <Sidebar active={sidebar} onClick={() => setSidebar(false)} />
      <Header onClick={() => setSidebar(true)} />
      <CartButton
        onClick={openCart} //!!
        className={
          store.orderedProducts.length === 0
            ? "CartButton"
            : "CartButton open-cart"
        }
        count={store.orderedProducts.length} //!!
        totalPrice={0} //!!
      />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Info />
            <Menu active={0} />
            <Products items={store.breakfast} />
          </Route>
          <Route path="/pasta">
            <Info />
            <Menu active={1} />
            <Products items={store.salad} />
          </Route>{" "}
          <Route path="/salad">
            <Info />
            <Menu active={2} />
            <Products items={store.pasta} />
          </Route>
          <Route path="/sandwich">
            <Info />
            <Menu active={3} />
            <Products items={store.sandwich} />
          </Route>
          <Route path="/soup">
            <Info />
            <Menu active={4} />
            <Products items={store.soup} />
          </Route>
          <Route path="/dessert">
            <Info />
            <Menu active={5} />
            <Products items={store.dessert} />
          </Route>
          <Route path="/drink">
            <Info />
            <Menu active={6} />
            <Products items={store.drink} />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
