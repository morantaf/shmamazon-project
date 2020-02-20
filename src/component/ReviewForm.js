import React, { Component } from "react";
import { connect } from "react-redux";
import { setReview } from "../store/actions/reviews";

class ReviewForm extends Component {
  state = {
    comment: "",
    name: ""
  };

  handleCommentChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      setReview(this.state.comment, this.state.name, this.props.productId)
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment:</h4>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Comment
            <textarea
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(ReviewForm);
