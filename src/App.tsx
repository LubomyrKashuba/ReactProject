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

function App() {
  const [sidebar, setSidebar] = React.useState(false);

  interface StateRoot {
    breakfast: cardProps[];
    pasta: cardProps[];
    salad: cardProps[];
    sandwich: cardProps[];
    soup: cardProps[];
    dessert: cardProps[];
    drink: cardProps[];
  }
  const store = useSelector((state: StateRoot) => {
    return state;
  });
  return (
    <Router>
      <Sidebar active={sidebar} onClick={() => setSidebar(false)} />
      <Header onClick={() => setSidebar(true)} />
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
