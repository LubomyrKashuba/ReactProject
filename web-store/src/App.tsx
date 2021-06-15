import React from "react";
import Info from "./Components/Info";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import { breakfast, pasta } from "./data/data";
import Sidebar from "./Components/Header/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { cardProps } from "./Components/Card";

function App() {
  const [sidebar, setSidebar] = React.useState(false);

  interface StateRoot {
    breakfast: cardProps[];
    pasta: cardProps[];
    salad: cardProps[];

  }
  const store = useSelector((state: StateRoot) => {
    return state;
  });
  return (
    <Router>
      <div className="App">
        <Sidebar active={sidebar} onClick={() => setSidebar(false)} />
        <Header onClick={() => setSidebar(true)} />
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
          </Route> <Route path="/salad">
            <Info />
            <Menu active={2} />
            <Products items={store.pasta} />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
