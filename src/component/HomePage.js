import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/actions/categories";
import Category from "./Category";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories);
  }

  render() {
    return (
      <div className="homepage">
        {this.props.categories.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>
            <Category
              key={category.id}
              name={category.name}
              img={category.imageUrl}
            />
          </Link>
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
