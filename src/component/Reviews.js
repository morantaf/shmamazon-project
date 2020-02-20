import React, { Component } from "react";
import { connect } from "react-redux";

class Reviews extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name} Says: </p>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(Reviews);
