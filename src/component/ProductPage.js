import React, { Component } from "react";
import { connect } from "react-redux";

class ProductPage extends Component {
  render() {
    return <div>ProductPage</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(ProductPage);
