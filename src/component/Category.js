import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt="" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(Category);
