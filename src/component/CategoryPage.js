import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryPage extends Component {
  render() {
    return <div> Category Page</div>;
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(CategoryPage);
