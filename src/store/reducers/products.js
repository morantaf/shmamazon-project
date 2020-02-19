const initialState = {
  products: []
};

export default function categoriesReducer(
  state = initialState.products,
  action
) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
