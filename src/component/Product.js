import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Product extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div>
        <div className="card" key={this.props.key}>
          <div className="card-image">
            <Link key={this.props.id} to={`/product/${this.props.id}`}>
              <img src={this.props.img} alt={this.props.name} />
            </Link>
            <span className="card-title">{this.props.name}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(this.props.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>description</p>
            <p>
              <b>Price: {this.props.price}$</b>
            </p>
          </div>
        </div>
      </div>
    );

    // <div>
    //   <img src={this.props.img} alt="" />
    //   <h1>{this.props.name}</h1>
    //   <p>
    //     {this.props.price} {this.props.inStock}
    //   </p>
    //   <button>Add to Cart</button>
    // </div>
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
