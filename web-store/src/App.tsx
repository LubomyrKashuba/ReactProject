import React from "react";
import Info from "./Components/Info";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import { breakfast } from "./data/data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Info />
      <Menu />
      <Products items={breakfast} />
    </div>
  );
}

export default App;
