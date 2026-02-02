import store from "../src/data/store.js";
import { checkout } from "../src/services/checkout.service.js";
import { generateDiscountCode } from "../src/services/discount.service.js";

beforeEach(() => {
  // reset in-memory store before each test
  store.cart.items = [];
  store.orders = [];
  store.discounts.codes = [];
  store.stats.totalItemsPurchased = 0;
  store.stats.totalPurchaseAmount = 0;
  store.stats.totalDiscountGiven = 0;
});

test("checkout calculates total amount correctly", () => {
  store.cart.items.push({
    productId: "p1",
    name: "Shoes",
    price: 1000,
    quantity: 2,
  });

  const result = checkout();

  expect(result.order.totalAmount).toBe(2000);
  expect(store.orders.length).toBe(1);
});

test("applies valid discount code correctly", () => {
  store.cart.items.push({
    productId: "p2",
    name: "Jacket",
    price: 2000,
    quantity: 1,
  });

  const code = generateDiscountCode();
  const result = checkout(code);

  expect(result.order.totalAmount).toBe(1800); // 10% off
  expect(store.stats.totalDiscountGiven).toBe(200);
});

test("discount code can be used only once", () => {
  const code = generateDiscountCode();

  store.cart.items.push({
    productId: "p3",
    name: "Bag",
    price: 1000,
    quantity: 1,
  });

  checkout(code);

  store.cart.items.push({
    productId: "p4",
    name: "Cap",
    price: 500,
    quantity: 1,
  });

  expect(() => checkout(code)).toThrow();
});

test("generates discount code on nth order", () => {
  store.discounts.nthOrder = 2;

  store.cart.items.push({
    productId: "p5",
    name: "Shirt",
    price: 1000,
    quantity: 1,
  });
  checkout();

  store.cart.items.push({
    productId: "p6",
    name: "Trousers",
    price: 1500,
    quantity: 1,
  });

  const result = checkout();

  expect(result.newDiscountCode).not.toBeNull();
});
