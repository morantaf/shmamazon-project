import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductById } from "../store/actions/products";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

class ProductPage extends Component {
  componentDidMount() {
    const pageID = this.props.match.params.id;
    this.props.dispatch(fetchProductById(pageID));
  }

  render() {
    const product = this.props.product;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="productSection">
          <div>
            <img src={product.imageUrl} />
          </div>
          <div className="detailsSection">
            <h1>{product.name}</h1>
            <h4>{product.price}€</h4>
            <h4>{product.inStock ? "In stock" : "Sold Out"}</h4>

            <button>Add to cart</button>
          </div>
        </div>
        <div>
          <h1>Reviews</h1>
          <Reviews />
          <ReviewForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    product: reduxState.products.selectedProduct
  };
}

export default connect(mapStateToProps)(ProductPage);
