export function setReview(review, customerName) {
  return {
    type: "STORE_REVIEW",
    payload: {
      customerName: customerName,
      review: review
    }
  };
}
