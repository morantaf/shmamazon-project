export function fetchProducts(dispatch, getState) {
  fetch("http://localhost:4000/products")
    .then(response => response.json())
    .then(data => {
      dispatch(setProducts(data));
    })
    .catch(error => console.log("can't fetch the data:", error));
}

export function fetchProductById(id) {
  return function thunk(dispatch, getState) {
    fetch(`http://localhost:4000/products/${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setProductForPage(data));
      })
      .catch(error => console.log("can't fetch the data:", error));
  };
}

export function setProducts(data) {
  return {
    type: "FETCH_PRODUCTS",
    payload: data
  };
}

export function setProductForPage(data) {
  return {
    type: "FETCH_PRODUCT_BY_ID",
    payload: data
  };
}
