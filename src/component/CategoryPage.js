import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import Product from "./Product";
import { Link } from "react-router-dom";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    const pageID = this.props.match.params.id;
    const filteredProducts = this.props.products.filter(product => {
      return product.categoryId === parseInt(pageID);
    });
    return (
      <div>
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Product
              name={product.name}
              price={product.price}
              img={product.imageUrl}
              inStock={product.inStock}
              key={product.id}
            />
          </Link>
        ))}
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
