import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <h1>{this.props.name}</h1>
        <p>
          {this.props.price} {this.props.inStock}
        </p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(Product);
