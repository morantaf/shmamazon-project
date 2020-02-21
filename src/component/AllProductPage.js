import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import Product from "./Product";

class AllProductPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  render() {
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          {this.props.products.map(product => (
            <Product
              name={product.name}
              price={product.price}
              img={product.imageUrl}
              inStock={product.inStock}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products.products
  };
}

export default connect(mapStateToProps)(AllProductPage);
