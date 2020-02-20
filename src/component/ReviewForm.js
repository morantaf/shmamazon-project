import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewForm extends Component {
  state = {
    value: ""
  };

  handleChange(event) {
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Un essai a été envoyé : " + this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <h4>Add a comment:</h4>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
