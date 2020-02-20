export function setReview(review, customerName, productId) {
  return {
    type: "STORE_REVIEW",
    payload: {
      customerName: customerName,
      review: review,
      productId: productId
    }
  };
}
