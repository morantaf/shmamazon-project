import React, { Component } from "react";
import { connect } from "react-redux";

class CheckoutPage extends Component {
  render() {
    return <div>CheckoutPage</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(CheckoutPage);
