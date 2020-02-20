import React, { Component } from "react";
import { connect } from "react-redux";

class Reviews extends Component {
  render() {
    return <div>Reviews</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(Reviews);
