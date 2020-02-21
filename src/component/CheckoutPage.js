import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../store/actions/cartActions";
import "./CheckoutPage.css";

class CheckoutPage extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    console.log("first log checkoutpage addeditems", this.props.addedItems);
    let addedItems = this.props.addedItems.length ? (
      this.props.addedItems.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="cartItem">
              <div className="item-img">
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  className="cartImg"
                />
              </div>

              <div className="item-desc-button">
                <div className="item-desc">
                  <span className="title">{item.name}</span>
                  <p>
                    <b>Price: {parseInt(item.price)}$</b>
                  </p>
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                  <div className="add-remove">
                    <Link to="/cart">
                      <i
                        className="material-icons"
                        onClick={() => {
                          this.handleAddQuantity(item.id);
                        }}
                      >
                        arrow_drop_up
                      </i>
                    </Link>
                    <Link to="/cart">
                      <i
                        className="material-icons"
                        onClick={() => {
                          this.handleSubtractQuantity(item.id);
                        }}
                      >
                        arrow_drop_down
                      </i>
                    </Link>
                  </div>
                </div>

                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );

    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {addedItems}
            <li class="collection-item">total: {this.props.total}</li>
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log("logging the state checkouptpage", reduxState);
  return {
    addedItems: reduxState.products.addedItems,
    total: reduxState.products.total
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
