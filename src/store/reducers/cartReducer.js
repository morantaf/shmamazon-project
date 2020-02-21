// const initialState = {
//   products: [],
//   addedItems: [],
//   total: 0
// };

// export default function cartReducer(state = initialState.products, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       {
//         console.log("logging add to card state", state);
//         let addedItem = state.products.find(item => item.id === action.id);
//         let existed_item = state.addedItems.find(item => action.id === item.id);
//         if (existed_item) {
//           addedItem.quantity += 1;
//           return {
//             ...state,
//             total: state.total + addedItem.price
//           };
//         }
//       }
//       break;
//     default: {
//       return state;
//     }
//   }
// }
