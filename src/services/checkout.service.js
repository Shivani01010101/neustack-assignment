import store from "../data/store.js";
import {
  validateDiscountCode,
  generateDiscountCode,
} from "./discount.service.js";

export function checkout(discountCode) {
  if (store.cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  // Calculate total
  let totalAmount = 0;
  let totalItems = 0;

  store.cart.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
    totalItems += item.quantity;
  });

  let discountAmount = 0;
  let appliedDiscount = null;

  if (discountCode) {
    const discount = validateDiscountCode(discountCode);
    if (!discount) {
      throw new Error("Invalid or already used discount code");
    }

    discountAmount = (discount.percentage / 100) * totalAmount;
    totalAmount -= discountAmount;

    discount.isUsed = true;
    appliedDiscount = discount.code;

    store.stats.totalDiscountGiven += discountAmount;
  }

  // Create order
  const order = {
    orderId: store.orders.length + 1,
    items: store.cart.items,
    totalAmount,
    discountApplied: appliedDiscount,
  };

  store.orders.push(order);

  // Update stats
  store.stats.totalItemsPurchased += totalItems;
  store.stats.totalPurchaseAmount += totalAmount;

  // Clear cart
  store.cart.items = [];

  // n-th order discount generation
  let newDiscountCode = null;
  if (store.orders.length % store.discounts.nthOrder === 0) {
    newDiscountCode = generateDiscountCode();
  }

  return {
    order,
    newDiscountCode,
  };
}
