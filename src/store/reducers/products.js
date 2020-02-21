const initialState = {
  products: [],
  addedItems: [],
  total: 0
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return { ...initialState, products: action.payload };
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
    case "REMOVE_ITEM": {
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let new_items = state.addedItems.filter(item => action.id !== item.id);

      //calculating the total
      let newTotal =
        state.total - parseInt(itemToRemove.price) * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    }
    case "ADD_QUANTITY": {
      let addedItem = state.addedItems.find(item => item.id === action.id);
      addedItem.quantity += 1;
      let newTotal = state.total + parseInt(addedItem.price);
      return {
        ...state,
        total: newTotal
      };
    }
    case "SUB_QUANTITY": {
      let addedItem = state.addedItems.find(item => item.id === action.id);
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id);
        let newTotal = state.total - parseInt(addedItem.price);
        return {
          ...state,
          addedItems: new_items,
          total: newTotal
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - parseInt(addedItem.price);
        return {
          ...state,
          total: newTotal
        };
      }
    }
    default: {
      return state;
    }
  }
}
