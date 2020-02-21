import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CheckoutPage extends Component {
  render() {
    console.log(this.props.addedItems);
    return <div>test</div>;
  }
}
function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    addedItems: reduxState.products.addedItems,
    total: reduxState.products.total
  };
}

export default connect(mapStateToProps)(CheckoutPage);
