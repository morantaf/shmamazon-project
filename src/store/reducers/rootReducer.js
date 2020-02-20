import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productsReducer from "./products.js";
import reviewsReducer from "./reviews";

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  reviews: reviewsReducer
});
