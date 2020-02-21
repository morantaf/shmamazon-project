const initialState = {
  categories: []
};

export default function categoriesReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case "FETCH_CATEGORIES": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
