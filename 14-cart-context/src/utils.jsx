export const getTotals = cart => {
  console.log(cart);
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    //item
    totalAmount += amount; //item.amount
    totalCost += amount * price; //item.amount
  }

  return {
    totalAmount,
    totalCost,
  };
};
