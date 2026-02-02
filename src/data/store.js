const store = {
  cart: {
    items: [],
  },
  orders: [],
  discounts: {
    codes: [],
    nthOrder: 3,
  },
  stats: {
    totalItemsPurchased: 0,
    totalPurchaseAmount: 0,
    totalDiscountGiven: 0,
  },
};

export default store;
