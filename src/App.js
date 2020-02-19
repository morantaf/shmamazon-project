import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import { Route } from "react-router";
import CategoryPage from "./component/CategoryPage";
import ProductPage from "./component/ProductPage";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/product/:id" component={ProductPage} />
      <Route path="/category/:id" component={CategoryPage} />
      <Route exact path="/" component={HomePage} />

      <Footer />
    </div>
  );
}

export default App;
