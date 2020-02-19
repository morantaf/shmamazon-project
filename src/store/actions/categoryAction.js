export function fetchCategories(dispatch, getState) {
  fetch("http://localhost:4000/categories")
    .then(response => response.json())
    .then(data => {
      dispatch(setCategories(data));
    })
    .catch(error => console.log("can't fetch the data:", error));
}

export function setCategories(data) {
  return {
    type: "FETCH_CATEGORIES",
    payload: data
  };
}
