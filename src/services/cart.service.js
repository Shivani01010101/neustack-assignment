import store from "../data/store.js";

export function addToCart(item) {
  const { productId, name, price, quantity } = item;

  const existingItem = store.cart.items.find((i) => i.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    store.cart.items.push({
      productId,
      name,
      price,
      quantity,
    });
  }

  return store.cart.items;
}
