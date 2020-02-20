const initialState = {
  list: [],
  selectedProduct: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return {
        ...state,
        list: action.payload
      };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        ...state,
        selectedProduct: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
