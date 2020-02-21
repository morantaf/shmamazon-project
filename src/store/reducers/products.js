const initialState = {
  products: [],
  addedItems: [],
  total: 0,
  selectedProduct: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return { ...initialState, products: action.payload };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        ...state,
        selectedProduct: action.payload
      };
    }
    case "ADD_TO_CART": {
      let addedItem = state.products.find(item => item.id === action.id);
      let existed_item = state.addedItems.find(item => action.id === item.id);
      console.log("existed_item", existed_item);
      console.log("addes item", addedItem);
      console.log("state products", state.products);

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
