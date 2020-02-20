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

            <button>Add to cart</button>
          </div>
        </div>
        <div>
          <h1>Reviews</h1>
          {filteredProductReviews.length === 0
            ? "No comment yet"
            : filteredProductReviews.map(review => {
                console.log("render review:", review);

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

export default connect(mapStateToProps)(ProductPage);
