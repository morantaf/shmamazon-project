import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/actions/categoryAction";
import Category from "./Category";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories);
  }

  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <Category key={category.id} name={category.name} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories
  };
}

export default connect(mapStateToProps)(HomePage);
