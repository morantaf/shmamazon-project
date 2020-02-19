import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import { Switch, Route } from "react-router";
import CategoryPage from "./component/CategoryPage";
import ProductPage from "./component/ProductPage";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/category" component={CategoryPage} />
        <Route path="/product" component={ProductPage} />
        <Route component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
