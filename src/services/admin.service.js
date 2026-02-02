import store from "../data/store.js";

export function getStats() {
  return {
    totalItemsPurchased: store.stats.totalItemsPurchased,
    totalPurchaseAmount: store.stats.totalPurchaseAmount,
    totalDiscountGiven: store.stats.totalDiscountGiven,
    discountCodes: store.discounts.codes,
  };
}
