import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productsReducer from "./products.js";

export default combineReducers({
  hello: helloReducer,
  categories: categoriesReducer,
  products: productsReducer
});

function helloReducer(state = "hello", action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
