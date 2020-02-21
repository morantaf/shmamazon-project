import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartReducer from "./cartReducer";

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});
