import { combineReducers } from "redux";

export default combineReducers({
  hello: helloReducer
});

function helloReducer(state = "hello", action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
