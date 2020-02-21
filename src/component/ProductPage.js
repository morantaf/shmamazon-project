import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "../store/actions/products";
import { addToCart } from "../store/actions/cartActions";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

class ProductPage extends Component {
  componentDidMount() {
    // const pageID = this.props.match.params.id;
    // this.props.fetchProductById(pageID);
    this.props.fetchProducts();
  }

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const product = this.props.product;
    const productId = parseInt(this.props.match.params.id);
    const filteredProductReviews = this.props.productReviews.filter(
      review => review.productId === productId
    );

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

            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(productId);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>
        </div>
        <div>
          <h1>Reviews</h1>
          {filteredProductReviews.length === 0
            ? "No comment yet"
            : filteredProductReviews.map(review => {
                return (
                  <Reviews name={review.customerName} comment={review.review} />
                );
              })}

          <ReviewForm productId={productId} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    product: reduxState.products.selectedProduct,
    productReviews: reduxState.reviews.productReviews
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    fetchProducts: () => {
      dispatch(fetchProducts);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
