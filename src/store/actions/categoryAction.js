export function fetchCategories(dispatch, getState) {
  console.log("feCategories called");
  fetch("http://localhost:4000/categories")
    .then(response => response.json())
    .then(data => {
      console.log("getting data:", data);
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
