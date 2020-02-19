import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home page</Link>
        <Link to="/category">Category</Link>
        <Link to="/product">Product</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

connect(mapStateToProps)(Navbar);
