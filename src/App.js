import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";
import { Route } from "react-router";
import CategoryPage from "./component/CategoryPage";
import ProductPage from "./component/ProductPage";
import Footer from "./component/Footer";
import CheckoutPage from "./component/CheckoutPage";
import AllProductPage from "./component/AllProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/product/:id" component={ProductPage} />
      <Route path="/category/:id" component={CategoryPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CheckoutPage} />
      <Route path="/products" component={AllProductPage} />

      <Footer />
    </div>
  );
}

export default App;
