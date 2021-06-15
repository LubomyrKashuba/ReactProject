import React from "react";
import Info from "./Components/Info";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import { breakfast } from "./data/data";
import Sidebar from "./Components/Header/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const [sidebar, setSidebar] = React.useState(false);

  
  return (
    <div className="App">
      <Sidebar active={sidebar} onClick={() => setSidebar(false)} />
      <Header onClick={() => setSidebar(true)} />
      <Info />
      <Menu />
      <Products items={breakfast} />
      <Footer></Footer>
    </div>
  );
}

export default App;
