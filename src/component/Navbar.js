import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Navbar extends Component {
  render() {
    const quantity = this.props.addedItems.map(item => item.quantity);
    const itemCount = quantity.reduce((acc, curr) => acc + curr, 0);
    console.log(itemCount);
    return (
      <div>
        <nav className="nav-wrapper">
          <div className="container">
            <ul className="right">
              <li>
                <Link to="/">Home page</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/cart">Checkout</Link>
              </li>
              <li>
                <Link to="/cart">My cart</Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="material-icons">shopping_cart</i>
                </Link>
              </li>
              <li>{itemCount}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("navbar state", reduxState);
  return { addedItems: reduxState.products.addedItems };
}

export default connect(mapStateToProps)(Navbar);
