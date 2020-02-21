import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import M from "materialize-css";

class Product extends Component {
  handleClick = id => {
    // console.log("i am clicked this is my id", id);
    this.props.addToCart(id);
  };

  render() {
    return (
      <div>
        {/* {console.log("i am a prop id key", this.props.id)} */}
        <div className="card" key={this.props.key}>
          <div className="card-image">
            <img src={this.props.img} alt={this.props.name} />
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
