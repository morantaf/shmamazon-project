import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import Product from "./Product";
import M from "materialize-css";
import { Link } from "react-router-dom";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  render() {
    const pageID = this.props.match.params.id;

    console.log("props prodcuts", this.props.products);
    const filteredProducts = this.props.products.products.filter(product => {
      return product.categoryId === parseInt(pageID);
    });
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
          {filteredProducts.map(product => (
            <div>
              <Link key={product.id} to={`/product/${product.id}`}>
              <Product
                name={product.name}
                price={product.price}
                img={product.imageUrl}
                inStock={product.inStock}
                key={product.id}
                id={product.id}
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products.list
  };
}

export default connect(mapStateToProps)(CategoryPage);
