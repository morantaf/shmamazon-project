const initialState = {
  products: [],
  addedItems: [],
  total: 0,
  selectedProduct: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      console.log("is type fetch_product", state);
      return { ...initialState, products: action.payload };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        ...state,
        selectedProduct: action.payload
    };
    case "ADD_TO_CART": {
      console.log(state.total);
      console.log(state.addedItems);
      console.log("logging add to card state", state, action.id);
      let addedItem = state.products.find(item => item.id === action.id);
      console.log(addedItem);
      let existed_item = state.addedItems.find(item => action.id === item.id);
      if (existed_item) {
        const updatedCart = state.addedItems.map(it =>
          it.id === action.id ? { ...it, quantity: it.quantity + 1 } : it
        );
        return {
          ...state,
          total: state.total + parseInt(addedItem.price),
          addedItems: updatedCart
        };
      } else {
        //calculating the total
        let newTotal = state.total + parseInt(addedItem.price);

        return {
          ...state,
          addedItems: [...state.addedItems, { ...addedItem, quantity: 1 }],
          total: newTotal
        };
      }
    }
    default: {
      return state;
    }
  }
}
