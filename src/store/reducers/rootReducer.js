import { combineReducers } from "redux";
import categoriesReducer from "./categories";

export default combineReducers({
  hello: helloReducer,
  categories: categoriesReducer
});

function helloReducer(state = "hello", action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
