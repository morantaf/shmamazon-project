import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productsReducer from "./products.js";
import reviewsReducer from "./reviews";

export default combineReducers({
  hello: helloReducer,
  categories: categoriesReducer,
  products: productsReducer,
  reviews: reviewsReducer
});

function helloReducer(state = "hello", action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
